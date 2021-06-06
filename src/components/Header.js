import React from 'react';
import Paper from "@material-ui/core/Paper";

function Header() {
    return (
        <Paper style={{padding:"5px", display:"flex"}} square elevation ={3}>
            <img alt="" style={{width:"50px"}} src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png" ></img>
          {/*  <h1 style={{margin:"0", fontFamily:"cursive", fontWeight:"200"}}>My React [ Header ]</h1> */}
          <h1 style={{margin:"0"}}>My React App</h1>
        </Paper> 
    )
}

export default Header;
