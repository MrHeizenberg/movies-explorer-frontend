import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
                <p className='footer__copyright'>&copy; 2021</p>
                <div className='footer__links'>
                    <a href='https://practicum.yandex.ru/' target='_blank' rel="noopener noreferrer" alt='Практикум' className='footer__link'>Яндекс.Практикум</a>
                    <a href='https://github.com/' target='_blank' rel="noopener noreferrer" alt='Github' className='footer__link'>Github</a>
                    <a href='https://ru-ru.facebook.com/' target='_blank' rel="noopener noreferrer" alt='Facebook' className='footer__link'>Facebook</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;