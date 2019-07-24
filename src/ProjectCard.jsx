import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (

        <div key={project.id}>
            <img src={project.image} className="block h-auto w-full" style={{ height: '200px', objectFit: 'cover' }} />


            <div className="px-6 py-4" style={{ minHeight: '50px' }} >
                <div style={projectTitle} className="underline font-bolder text-xl mb-2">{project.name} </div>
                <p className="text-white text-base">
                    {project.description}
                </p>
            </div>

            <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <a href={project.website} target="_blank" style={detailsBtn} className="text-white border border-white text-xs py-1 px-2">
                    Details
                </a>
            </div>

        </div>
    )
}

const detailsBtn = {
    fontFamily: 'Montserrat',
    letterSpacing: '0em',
    textDecoration: 'none'
}

const projectTitle = {
    fontFamily: 'Montserrat',
    letterSpacing: '0em',
    fontWeight: 'bold',
    color: 'white'
}

export default ProjectCard