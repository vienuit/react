import React, { Component } from 'react';

class AddUser extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         trangthaiChinhSua : true
    //     }
    // }
    // thayDoiTrangThai = ()=>{
    //     this.setState({
    //         trangthaiChinhSua: !this.state.trangthaiChinhSua
    //     });
        
    // }
    // hienThiNut = () =>{
    //     if(this.state.trangthaiChinhSua === true){
    //         return (
    //         <div className="btn btn-block btn-outline-secondary " onClick={() =>this.thayDoiTrangThai()} >Đóng lại</div>
                
    //         )
    //     }
    //     else{
    //         return(
    //         <div className="btn btn-block btn-outline-info " onClick={() => this.thayDoiTrangThai()} >Thêm mới</div>
    //         )
    //     }
    // }    
    // hienThiForm = () =>{
    //     if(this.state.trangthaiChinhSua === true){
    //         return (
    //             <div className="card border-secondary mb-3 mt-2 " style={{maxWidth: '18rem'}}>
    //             <div className="card-header">Thêm mới</div>
    //             <div className="card-body text-secondary">
    //               <div className="form-group">
    //                 <input type="text" className="form-control"  placeholder="Tên user" />
    //               </div>
    //               <div className="form-group">
    //                 <input type="text" className="form-control"  placeholder="Điện thoại" />
    //               </div>
    //               <div className="form-group">
    //                 <select className="form-control" >
    //                   <option>Admin</option>
    //                   <option>Moderator</option>
    //                   <option>Normal</option>
    //                 </select>
    //               </div>
    //               <div className="btn btn-primary btn-block">Thêm mới</div>
    //             </div>
    //           </div>

    //         )
    //     }
        
    // }

  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name:"",
      tel: "",
      Permission:""
    }
  }
  
  

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    //console.log(name);
    //console.log(value);
    this.setState({
      [name]:value
    });

    // thêm mới thành viên
    // var item = {};
    // item.id = this.state.id;
    // item.name = this.state.name;
    // item.tel = this.state.tel;
    // item.Permission = parseInt( this.state.Permission);
    //console.log('Mới ' + item.id + item.name + item.tel + item.Permission);
  }

  kiemTraTrangThai = () =>{
    if(this.props.hienThiForm === true){
      return(
        <div className="col-12">
        <div className="card border-secondary mb-3 mt-2 " style={{maxWidth: '18rem'}}>
                <div className="card-header">Thêm mới</div>
                <div className="card-body text-secondary">
                  <form>
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" onChange={(event) => this.isChange(event)}  placeholder="Tên user" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="tel" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Điện thoại" />
                  </div>
                  <div className="form-group">
                    <select className="form-control" onChange={(event) => this.isChange(event)} name="Permission">
                      <option value>Chọn quyền</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Moderator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>

                  <input type="reset" className="btn btn-primary btn-block" onClick={ (name, tel, Permission) => this.props.getData(
                    this.state.name, this.state.tel, this.state.Permission
                  ) } value = 'Thêm mới' /> 
                  </form>
                </div>
              </div>
              </div>
      )
    }
  }

    render() {
     
      
      //console.log(this.props.hienThiForm);
      
        return (
            
              <div >
            
            {/* { this.hienThiNut()} */}
            {/* { this.hienThiForm()} */}
            
                {this.kiemTraTrangThai()}
    
             </div>
            

        );
    }
}

export default AddUser;