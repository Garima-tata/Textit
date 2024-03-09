import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route, 
// } from "react-router-dom";


function App() {

  const[mode, setMode] = useState("light");
  const[alertName, setAlert] = useState(null);

  const ShowAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      ShowAlert("Dark Mode has been enabled", "success");
    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      ShowAlert("Light Mode has been enabled", "success");
    }

    document.title = "TextUtils - " + mode;
  }
  return (  
    <>
     {/* // <Router> */}
      <Navbar title="TextUtils" AboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alertName} />
      <TextForm heading="Enter the text" mode={mode} ShowAlert={ShowAlert} />
      
      {/* // <Routes>
        // <Route exact path="/about" element={<About />} />
        // <Route exact path="/" element={<TextForm heading="Enter the text" mode={mode} ShowAlert={ShowAlert} />} />
      // </Routes> */}

      {/* <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
          <TextForm  heading="Enter the text " mode={mode} ShowAlert = {ShowAlert} />
          </Route>
      </Routes> */}

    {/* // </Router> */}
    </>
  );
}

export default App;
