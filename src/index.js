import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"


const App = () => {
    return (
        <div>
            <Hello />
            <Header />
        </div>
    )        
};

ReactDOM.render(<App />, document.getElementById("app"))