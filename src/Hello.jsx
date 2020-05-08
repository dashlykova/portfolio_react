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
    width: '100%',
    height: '800px',
    background: '#E83F3F',
    margin: '0',
    padding: '0',
    border: 'none'
}

const name = {
    position: 'absolute',
    width: '268px',
    height: '100px',
    paddingLeft:'3rem',
    paddingTop: '32rem',
   

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '90px',
    lineHeight: '64px',
    letterSpacing: '-0.12em',
    color: 'white'
}




export default Hello