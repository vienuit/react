import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

import DataUser from './Data.json';
const { v4: uuidv4 } = require('uuid');
//import { v4 as uuidv4 } from 'uuid';
// function App() {

//  //
//  thongBao = () => { console.log("ket noi thanh cong")}
//     return (
//       <div className="App">
//         <Header/>
//         <div className="seachForm">
//               <div className="container">
//                 <div className="row">
//                     <Search  />
//                     <TableData/>
//                     <AddUser/>
//                 </div>
//               </div>
//         </div>

//       </div>
//     );
// }

// export default App;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      hienThiForm:false,
      data : [],
      searchText:'',
      editUserStatus:false,
      userEdit : {},
    }
  }

  
  UNSAFE_componentWillMount() {
    // kiem tra xem co localStorage chưua
    if(localStorage.getItem('userData') === null)
    {
      localStorage.setItem('userData', JSON.stringify(DataUser)); 
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
    
    
  }
  



  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  //thongBao = () => { console.log("ket noi thanh cong")}

  getTextSearch = (dl) =>{
    this.setState({
      searchText:dl
    });
    console.log('Nhận được: ' + this.state.searchText);
    
  }
  getNewUser = (name, tel, Permission) => {
    console.log('Ket noi '+ name + tel + Permission);

    var item = {};
    

    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = parseInt(Permission) ;

    var items = this.state.data;
    items.push(item);

    this.setState({
      data : items
    });

    localStorage.setItem('userData', JSON.stringify(items));
    
  }
  editUser = (user) => {
    console.log('da ket noi');
    console.log(user);

    this.setState({
      userEdit: user
    });


    this.setState({
      editUserStatus: !this.state.editUserStatus
    });

  }
  changEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  getUserEditApp = (info) => {
    console.log('App ' + info.name);
    this.state.data.forEach((value, key) =>{
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = parseInt(info.Permission);
      }
    } )
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }
  infoDeleteApp = (info) => {

    // hàm filter
    // var arr = [1, 2, 3];
    // var x = 2;
    // arr = arr.filter(item => item !== x); // lấy những phần từ khác x
    // console.log(arr); // 1,3

    var tempData = this.state.data.filter( item => item.id !== info.id);
    this.setState({
      data: tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData));

    
  }
  render() {
    localStorage.setItem('key1', 'ha ah');
    console.log( localStorage.getItem('key1') );
    localStorage.removeItem('key1');

    var ketqua = [];
    this.state.data.forEach( (item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    } )
    console.log(ketqua);
    
    return (
            <div className="App">
              <Header/>
              <div className="seachForm">
                    <div className="container">
                      <div className="row">
                          <Search 
                          getUserEditSearch = { (info) => this.getUserEditApp(info)}
                          infoEditUser = {this.state.userEdit}
                          changeStatus = { () => this.changEditUserStatus() }
                          checkConnect={ (dl)=> this.getTextSearch(dl)}
                          ketNoi={ ()=>this.doiTrangThai() }  hienThiForm={this.state.hienThiForm}
                          editStatus={this.state.editUserStatus}
                          />
                          <TableData 
                            infoDeleteTable = { (info) => this.infoDeleteApp(info) }
                            edit={ (user) => this.editUser(user)} 
                            dataUserProps={ketqua} />
                          <AddUser getData={ (name, tel, Permission) => this.getNewUser(name, tel, Permission)} hienThiForm={this.state.hienThiForm}/>
                      </div>
                    </div>
              </div>
      
            </div>
          );
  }
}

export default App;
