import React from "react";
import {Link} from "react-router-dom"

const Footer = () =>{
    return(
        <div className='footer'>
                <div className="about-logos">
                        <img className="user-object--avi" src="https://avatars.githubusercontent.com/u/75050631?v=4" alt="Nick" />
                       <div className='icons'>
                        <a id='git' className="fab fa-github" href="https://github.com/NickKury"></a>
                        <a id='link' className="fab fa-linkedin" href="https://www.linkedin.com/in/nick-kury-011840213/"></a>
                        {/* <Link to="https://github.com/NickKury"> <i className="fab fa-github"></i></Link>
                        <Link to="https://www.linkedin.com/in/nick-kury-011840213/"><i className="fab fa-linkedin"></i></Link>    */}
                        </div> 
                
                </div>
        </div>
    )  
}

export default Footer;