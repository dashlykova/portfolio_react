import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import Projects from "./Projects"
import About from "./About"
import Work from "./Work"
import Hello from "./Hello"
import Header from "./Header"
import './css/tailwind.css'
import { Switch, Route } from 'react-router-dom'


const App = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Header />
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path='/' component={Hello}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/projects' component={Projects}></Route>
                        <Route exact path='/work' component={Work}></Route>
                    </Switch>
                </div>
            </div >
        </div >
    )       
};
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));