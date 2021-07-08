import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import AboutPage from './pages/about'
import Skills from "./pages/skills/skills";

// import './assets/js/app'

function App() {


    const [toggleSide, setToggleSide] = useState(true)

  return (
    <Router>
      {/*<button onClick={()=>{setToggleSide(!toggleSide)}}>desplegar</button>*/}
      <Navbar show={toggleSide}/>
      <div className={`content ${toggleSide ? '' : 'navUnToggle'} `}>
          <Switch  >
              <Route path="/home" component={() => <AboutPage showNav={toggleSide} />}/>
              <Route path="/skills" component={() => <Skills/>} />
              <Redirect to='/home#header'/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
