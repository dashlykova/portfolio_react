import React from "react"

const WorkCard = (props) => {
    let work = props.work
    return (

        <div key={work.id}>
            <img src={work.image} className="block h-auto w-full" style={{ height: '200px', objectFit: 'cover' }} />


            <div className="px-6 py-4" style={{ minHeight: '50px' }} >
                <div style={workName} className="underline font-bolder text-xl mb-2">{work.name} </div>
                <div style={workDate} className="underline font-bolder text-xl mb-2">{work.date} </div>
                <p className="text-white text-base">
                    {work.description}
                </p>
            </div>

            <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <a href={work.website} target="_blank" style={detailsBtn} className="text-white border border-white text-xs py-1 px-2">
                    Company Website
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

const workName = {
    fontFamily: 'Montserrat',
    letterSpacing: '0em',
    fontWeight: 'bold',
    color: 'white'
}

const workDate = {
    fontFamily: 'Montserrat',
    letterSpacing: '0em',
    fontWeight: 'bold',
    fontSize: '15px',
    color: 'white'
}

export default WorkCard