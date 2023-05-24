import React from 'react';
//imports all components 
//each of these make up the content and layout of the app
import PageContent from '../PageContent';
import About from '../About';
import Products from '../Products';
import Contact from '../Contact';
// import Projects from '../Projects';
// import Contact from '../Contact';


const styles = {
  label: {
    textAlign:'center',
  },
}

//function to generate the page content
function Page({ currentPage }) {

  //function to navigate between all existingpages 
  const renderPage = () => {
    switch (currentPage.name) {
      case 'About':
        return <About />;
      case 'Products':
        return <Products />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };
//renders the page content 
  return (
    <section>
      <h2 style={styles.label}>{(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
//exports page function
export default Page;