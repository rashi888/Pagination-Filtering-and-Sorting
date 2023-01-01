import React, { Component } from 'react';

const Listgroup = (props) => {
    const {items,textProperty,valueProperty,selectedItem,onItemSelect}=props;
    return ( 
        <ul className="list-group">
        {items.map(item=> (
            <li 
            onClick={()=>onItemSelect(item)} 
            key={item[valueProperty]} 
            className={item===selectedItem ? "list-group-item active" :"list-group-item"}>
            {item[textProperty]}
        </li>
        ))}
        
      </ul>
     );
}
 
Listgroup.defaultProps={
    textProperty:"name",
    valueProperty:"id"
}
export default Listgroup;
