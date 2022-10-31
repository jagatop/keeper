import React from "react";

function Footer(){

    var date = new Date();
    var curentYear = date.getFullYear();
    
    return (
        <div className="footer">
            <p>Copyright © {curentYear}</p>
        </div>
    );
}

export default Footer;