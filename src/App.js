import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import AboutPage from './pages/about'
// import './assets/js/app'

function App() {


    const [toggleSide, setToggleSide] = useState(true)

  return (
    <Router>
      {/*<button onClick={()=>{setToggleSide(!toggleSide)}}>desplegar</button>*/}
      <Navbar show={toggleSide}/>
      <div className={`content ${toggleSide ? '' : 'navUnToggle'} `}>
          <Switch  >
              <Route path="/" component={() => <AboutPage showNav={toggleSide} />} />
          </Switch>
      </div>

    </Router>
  );
}

export default App;
