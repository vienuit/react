import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  
  //map giống for each, duyệt trong dataUserProps
  mappingDataUser = () => 
    this.props.dataUserProps.map((value, key) =>(
       
      // Truyền hàm App ->TableData -> TableDataRow
      <TableDataRow 
      infoDeleteTableRow = { (info) => this.props.infoDeleteTable(value) }
      editClick ={ (user) => this.props.edit(value) } 
      id={value.id} userName={value.name} key={key} stt={key} tel={value.tel} permission={value.Permission} />
    ))
  
  
    render() {
      console.log(this.props.dataUserProps); 
        return (
            <div className="col">
            <table className="table table-striped table-inverse table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Điện thoại</th>
                  <th>Quyền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                
              {this.mappingDataUser()}
                
              </tbody>
            </table>
          </div>

        );
    }
}

export default TableData;