import React from 'react'
import Container from '../helpers/Container'
import BenefitCard from './BenefitCard'
import cards from '../../resources/data/cards'

const About = () => {
    return (
        <Container>
            <div className='flex flex__center flex__col'>

                <h1 className="heading-secondary">
                    What we do to help
                    our client grow in
                    digital era,
                </h1>
                {cards.map((card, index) => (
                    <BenefitCard key={index} index={index} card={card} />
                ))}
                
                
            </div>
        </Container>
    )
}

export default About
