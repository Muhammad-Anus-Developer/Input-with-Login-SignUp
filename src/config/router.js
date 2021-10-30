import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FinalInp from "../components/final_inp"
import Login from "../components/login";
import Signup from "../components/signup";



export default function Routers() {
  return (
    <Router>
      <div>
       
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/s-i-g-n-u-p"  component={Signup} />
          <Route path="/alisonsinputdata" exact component={FinalInp} />
         
        </Switch>
      </div>
    </Router>
  );
}
