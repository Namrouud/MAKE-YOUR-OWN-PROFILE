import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Photo from './Photo';
import Name from './Name';
import cat from './cat.jpg';


function App() {
  return (
    <div className="App">
     <Photo src={cat}/>   
     <Name firstname="khalil" lastname="sliti"/>
     <Button isShown onSimpleClick={()=>{window.location="https://facebook.com"} }>
   Facebook</Button>
   <Button isShown onSimpleClick={()=>{window.location="https://linkedin.com"} }>
  My linkedin</Button>

    </div>
  );
}

export default App;
