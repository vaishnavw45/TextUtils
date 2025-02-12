import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";



function App() {
  return (
    <>
          <Router>
           <Navbar title="TextUtils"  aboutText="About us"/>
           <div className="container my-3">
           
           <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm heading="Enter the text to analyze"/>
          </Route>
        </Switch>
        </div>
        </Router>
    </>
  );
}

export default App;
