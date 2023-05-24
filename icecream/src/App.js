import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';

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
      <Header></Header>
      {/* <header className="App-header">
        <h1> Happy Head Ice Cream</h1></header> */}
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
