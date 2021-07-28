import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Contacts from "./components/contacts/Contacts";
import {Provider} from "./components/context";
import AddContact from "./components/contacts/AddContact";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";

class App extends Component {
    render() {

        return (
            <Provider>
                <Router>
                <div className="App">
                    <Navbar title="Contacts list"/>
                    <Switch>
                        <Route exact path="/" component={Contacts}/>
                        <Route exact path="/contact/add" component={AddContact}/>
                        <Route exact path="/about/:id/:name" component={About}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
                </Router>
            </Provider>

        );
    }
}

export default App;
