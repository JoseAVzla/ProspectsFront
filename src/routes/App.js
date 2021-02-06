import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import NewProspect from '../containers/NewProspect';
import EvaluateProspect from '../containers/EvaluateProspect';
import VisualizeProspect from '../containers/VisualizeProspect';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/new-prospect" component={NewProspect}/>
            <Route exact path="/evaluate:id" component={EvaluateProspect}/>
            <Route exact path="/visualize:id" component={VisualizeProspect}/>
        </Switch>
    </BrowserRouter>
)

export default App;