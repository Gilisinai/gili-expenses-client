import React from 'react'
import Container from '../components/helpers/Container'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <div className='footer'>
            <Container>
                <div className='flex flex__row'>

                    <div className='flex flex__col footer__col'>
                        <Link className='footer__link'>About us</Link>
                        <Link className='footer__link'>About us</Link>
                        <Link className='footer__link'>About us</Link>
                        <Link className='footer__link'>About us</Link>
                    </div>
                    <div className='flex flex__col footer__col'>
                        <Link className='footer__link'>About us</Link>
                        <Link className='footer__link'>About us</Link>
                        <Link className='footer__link'>About us</Link>
                        <Link className='footer__link'>About us</Link>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Footer
