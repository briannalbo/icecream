import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Pages';


function App() {


  const [pages] = useState([
    {
      name: "About"
    },
    { name: "Products" },
    { name: "Contact" }
  ]);
//use state and sets index zero(aboutme) as default
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Header>
      <Nav
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Nav>
      </Header>
      
        
      <main>
          <Page currentPage={currentPage}></Page>
        </main>
      
    </div>
  );
}

export default App;
