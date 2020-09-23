import React from 'react'

function Bar({precent, name}) {
    return (
        <div className='flex flex__col chart__bar '>
            <div className='chart__bar-size' style={{height: `${precent}%`}}>

            </div>
            <div className='chart__bar-name'>
                {name}
            </div>
        </div>
    )
}

export default Bar
