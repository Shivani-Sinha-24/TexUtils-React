// import { useState } from 'react';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode] =  useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#4f4d4d';
      document.body.style.color='white';
      showAlert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='#212529';
      showAlert('Light mode has been enabled','success');
    }
  }
  return (
    <>
    <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <TextForm showAlert={showAlert} heading='Try TextUtils - Word Counter, Character Counter, Remove extra Spaces' mode={mode}/> */}
      {/* <About mode={mode} toggleMode={toggleMode} /> */}
         {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text below to analyze' mode={mode}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
