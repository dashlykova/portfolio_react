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
                        {/* <BrowserRouter basename="/portfolio_react" /> */}
                        <Route exact path='portfolio_react/' component={Hello}></Route>
                        <Route exact path='portfolio_react/about' component={About}></Route>
                        <Route exact path='portfolio_react/projects' component={Projects}></Route>
                        <Route exact path='portfolio_react/work' component={Work}></Route>
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