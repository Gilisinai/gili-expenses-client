import React, { Fragment } from 'react'

const HorizontalBar = ({lightColor,color, amount, category}) => {

    const bg = {background: lightColor}
    const bar = {
        background: color,
        width: `${amount}%`
    }

    return (
        <Fragment>
            <div className='flex flex__space-between'>
                <span className=''>{category}</span>
                <span className=''>{amount}</span>
            </div>
            <div className='category category__chart' style={bg}>
                <div className='category category__chart-content' style={bar}></div>
            </div>
        </Fragment>
    )
}

export default HorizontalBar
