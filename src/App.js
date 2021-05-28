import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import AboutPage from './pages/about'
// import './assets/js/app'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={AboutPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
