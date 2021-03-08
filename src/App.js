import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/react-jquery-plugin'
import '../node_modules/bootstrap/dist/js/bootstrap'
import {  CartPage ,Home,Productpage , About, Contactus } from './components/Views/index';
import "../node_modules/font-awesome/css/font-awesome.css";
import {BrowserRouter as Router , Route, Switch } from  'react-router-dom'

export default function App() {


  return (
    <div>
      <Router>
        <Switch>
            <Route  exact path="/cartpage"  component={CartPage}/> 
            <Route exact path="/"  component={Home}/> 
            <Route exact path="/product" component={Productpage} ></Route>
            <Route exact path="/product" component={Productpage} ></Route>
            <Route exact path="/about" component={About} ></Route>
            <Route exact path="/contact"component={Contactus}  ></Route>
        </Switch>
      </Router>
   
  
    </div>
  )
}
