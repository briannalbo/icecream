import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {


  const [pages] = useState([
    {
      name: "About Me"
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
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Happy Head Ice Cream
        </a>
      
    </div>
  );
}

export default App;
