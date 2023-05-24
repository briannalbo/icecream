import React from 'react';
import '../../App.css';
import { useEffect } from 'react';


//function to render the content of the header of the page
function Nav(props) {
    //establishes each available page as the props
    const { pages = [], setCurrentPage, currentPage } = props;
  
    useEffect(() => {
      document.title = currentPage.name;
    }, [currentPage]);

    return (
        <nav id='navChoices'>
        
        {pages.map((Page) => (
          <a key={Page.name}>
            <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
          </a>
        ))}
      
    </nav>
    );
};
//exports header content to be compiled in app.js file
export default Nav;