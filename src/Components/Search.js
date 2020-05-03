import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            tempValue:'',
            userObj: {}
        }
    }

    isChange = (event) =>{
        console.log(event.target.value);
        this.setState({
            tempValue:event.target.value
        });
        this.props.checkConnect(this.state.tempValue) 
        
    }
    hienThiNut = () =>{
        if(this.props.hienThiForm === true){
            return <div className="btn btn-block btn-outline-secondary " onClick={()=>this.props.ketNoi()} >Đóng lại</div>
        }
        else{
            return <div className="btn btn-block btn-outline-info " onClick={()=>this.props.ketNoi()}  >Thêm mới</div>
        }
    }
    

    isShowEditForm = () => {
        if(this.props.editStatus === true){
            return <EditUser 
                infoEdit = { (info) => this.getUserEdit(info) } 
                userInfo = { this.props.infoEditUser } 
                clickChangeStatus = { () => this.props.changeStatus() } />
        }
    }
    getUserEdit = (info) => {
        this.setState({userObj: info });
        this.props.getUserEditSearch(info);
        console.log(info.name);
        
    }

    render() {
        //console.log("search "+ this.props.infoEditUser);
        
        return (
            <div className="col-12">
                 
                
                {this.isShowEditForm()}

                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event)=> this.isChange(event)}   aria-describedby="helpId" style={{width: '432px'}} placeholder="Nhập tên cần tìm" />
                        <div className="btn btn-info" onClick={ (dl) => this.props.checkConnect(this.state.tempValue)   }>Tìm</div>
                    </div>
                    <div >
                        {this.hienThiNut()}
                    </div>
                    
                </div>
                <hr/>
            </div>


        );
    }
}

export default Search;