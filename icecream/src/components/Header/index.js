import React from 'react';
import '../../App.css';


//function to render the content of the header of the page
function Header(props) {

    return (
        <header>
            <div>
            <h1>Happy Head Ice Cream</h1>
            </div>
            {/* renders the nav section */}
            {props.children}
          
         
        </header>
    );
};
//exports header content to be compiled in app.js file
export default Header;