import React, { Component } from 'react';

class EditUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id : this.props.userInfo.id,
      name: this.props.userInfo.name,
      tel : this.props.userInfo.tel,
      Permission: this.props.userInfo.Permission
    }
    
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const valueEdit = event.target.value;
    //console.log(valueEdit);
    
    this.setState({ [name]: valueEdit });
  }
  saveButton = () => {
    var info = {};
    
    info.id = this.state.id;
    info.tel = this.state.tel;
    info.name = this.state.name;
    info.Permission = this.state.Permission;
    this.props.infoEdit(info);
    this.props.clickChangeStatus();

    console.log(info.editName);
    
  }
    render() {
        return (
            <div className="col-12">
        <div className="card border-secondary " >
                <div className="card-header text-center">Sửa thông tin</div>
                <div className="card-body text-secondary">
                  <form>
                  <div className="form-group">
                    <input type="text" name="name" onChange = { (event) => this.isChange(event) } defaultValue={this.props.userInfo.name} className="form-control" placeholder="Tên user" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="tel" onChange = { (event) => this.isChange(event) } defaultValue={this.props.userInfo.tel} className="form-control" placeholder="Điện thoại" />
                  </div>
                  <div className="form-group">
                    <select className="form-control" onChange = { (event) => this.isChange(event) } defaultValue={this.props.userInfo.Permission} name="Permission">
                      <option value>Chọn quyền</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Moderator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>

                  <input type="button" className="btn btn-primary btn-block" onClick = { () => this.saveButton() }  value = 'Lưu' /> 
                  </form>
                </div>
              </div>
              </div>
        );
    }
}

export default EditUser;