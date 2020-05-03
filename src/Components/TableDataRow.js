import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.permission === 1){
            return "Admin";
        }
        else if(this.props.permission === 2)
        {
            return "Moderator";
        }
        else{
            return "Normal User";
        }
    }
    
    render() {
      var infoDelete = {};
      infoDelete.id = this.props.id;
      infoDelete.name = this.props.userName;
      infoDelete.tel = this.props.tel;
      infoDelete.Permission = this.props.permission;

        return (
            <tr>
            <td >{this.props.stt}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.tel}</td>
            <td>{this.permissionShow()}</td>
            <td>
              <div className="btn-group">
                <div className="btn btn-warning sua" onClick ={ () => this.props.editClick() } >
                  <i className="fa fa-edit">Sửa</i>
                </div>
                <div className="btn btn-danger xóa" onClick ={ (infoDelete) => this.props.infoDeleteTableRow(infoDelete) }>
                  <i className="fa fa-delete">
                    Xóa
                  </i>
                </div>
              </div>
            </td>
          </tr>
        );
    }
}

export default TableDataRow;