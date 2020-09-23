import React, { Fragment } from 'react'



function CircleChart({ precent, color, lightColor, heading }) {



    const gradient = `conic-gradient( 
        transparent ${360 - (360 * precent)}deg, ${color} ${360 - (360 * precent)}deg )`


    const style = {
        background: gradient
    }
    return (
        <div className='flex flex__center flex__col'>
            <div className='bold mb-sm'>

                {heading}
            </div>
            <div className='circle' style={{ background: `${lightColor}` }}>

                <div className='oval' style={style}>

                </div>
                <div className='circle__inner' style={{ background: `${lightColor}` }}>
                    <span>{precent * 100}%</span>
                </div>
            </div>
        </div>
    )
}

export default CircleChart
