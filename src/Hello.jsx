import React from "react"


const Hello = () => {
    return (
        <div className="page-container" style={container}>
            <div style={name}>
                <p>Daria Lykova</p>

            </div>
        </div>
    )
}

const container = {
    position: 'absolute',
    width: '2300px',
    height: '800px',
    background: '#E83F3F',
    margin: '0',
    padding: '0',
    border: 'none'
}

const name = {
    position: 'center',
    width: '268px',
    height: '100px',
    paddingLeft:'25rem',
    paddingTop: '30rem',
   

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '90px',
    lineHeight: '64px',
    /* or 58px */
    letterSpacing: '-0.12em',
    color: '#E5E5E5'
}




export default Hello