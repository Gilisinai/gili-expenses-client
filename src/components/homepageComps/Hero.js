import React from 'react'
import Container from '../helpers/Container'
import heroImage from '../../resources/illustrations/hero.svg'

function Hero() {
    return (
        <div className="hero">

            <Container>
                <div className='flex flex__center height__full'>
                    <div className='width__60'>

                        <h1 className='heading-primary'>
                            New Automation
                            Tool for Your Home
                        </h1>
                        <p className='text__p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.
                        </p>
                        <div className='button button__primary'>See our project</div>
                    </div>
                    <div className='width__40'>

                        <img src={heroImage} className='hero__image'/>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Hero
