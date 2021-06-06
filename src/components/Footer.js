import React from 'react'

function Footer() {
    return (
        <div>
            <p style={{position:"absolute",bottom: "0", padding:"5px", width:"100%", textAlign:"center"}}>Copyright &copy; {new Date().getFullYear()} Shazwan Shaari</p>
        </div>
    )
}

export default Footer
