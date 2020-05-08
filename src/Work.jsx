import React, { Component } from "react"
import axios from "axios"
import WorkCard from "./WorkCard"

class Work extends Component {
    constructor() {
        super();
        this.state = {
            works: []
        };
    }
    componentDidMount() {
        axios.get('./src/data/works.json')
            .then(response => {
                this.setState({
                    works: response.data
                })
            })
    }

    render() {
        const works = this.state.works
        let worksList 

        if (works.length > 0) {
            worksList = works.map(work => {
                return (
                    <div key={work.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <WorkCard work={work} />
                    </div>
                )
            })
        }


        return (
            <div className="content-wrapper">
                <div className="flex flex-wrap -mx-2 lg:-mx-1">
                    {worksList}
                </div>
            </div>
        )
    
    }
};

export default Work