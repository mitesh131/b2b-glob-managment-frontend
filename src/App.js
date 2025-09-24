import React from 'react'
import {Header} from './Header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (
    <React.Fragment >

<Router>
       <Switch>

        <Route exact path= '/' component={Header}></Route>
        <Route exact path='/:eventType' component={Header}></Route>
        <Route exact path='/:eventType/:sportId' component={Header}></Route>
        <Route exact path='/:eventType/:eventId/:marketId' component={Header}></Route>
        <Route exact path='/:eventType/:sportType/:eventId/:marketId' component={Header}></Route>
        <Route exact path='/:eventType/:eventId/:marketId/:selectionId/:fancy_id' component={Header}></Route>

       </Switch>
     </Router>
    </React.Fragment>
  );
}

export default App;
