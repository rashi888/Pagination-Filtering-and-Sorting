import React, { Component } from 'react';
const  Like=(props)=>{

        let classes="fa fa-heart";
        if(!props.liked) classes+='-o';
        return <i 
        onClick={props.onClick} 
        className={classes} 
        style={{cursor:"pointer"}}
        aria-hidden="true"/>
}
export default Like;

// import React, { Component } from 'react';
// class Like extends Component {
//     render() { 
//         let classes="fa fa-heart";
//         if(!this.props.liked) classes+='-o';
//         return <i 
//         onClick={this.props.onClick} 
//         className={classes} 
//         style={{cursor:"pointer"}}
//         aria-hidden="true"/>
//     }
// }
 
// export default Like;


/* <i class="ri-heart-fill"></i> */

// return <i class="ri-heart-line"></i>;