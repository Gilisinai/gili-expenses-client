import React from 'react'

const BenefitCard = ({ card, index }) => {
    return (
        <div className={`card flex flex__row${index % 2 == 0 ? '-reverse' : ''}`}>
            <img src={card.img} className='card__img' />
            <div className='card__details'>
                <h1 className='heading-card'>{card.heading}</h1>
                <p className='text__p'>{card.text}</p>
            </div>
        </div>
    )
}

export default BenefitCard
