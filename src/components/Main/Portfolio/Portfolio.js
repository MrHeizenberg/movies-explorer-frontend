import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return(
        <div className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__links'>
                <p className='portfolio__site'>Статичный сайт</p>
                <a href='https://github.com/MrHeizenberg/russian-travel' target='_blank' rel="noopener noreferrer" alt='Ссылка на статичный сайт' className='portfolio__link'> </a>
            </div>
            <div className='portfolio__links'>
                <p className='portfolio__site'>Адаптивный сайт</p>
                <a href='https://github.com/MrHeizenberg/react-mesto-api-full' target='_blank' rel="noopener noreferrer" alt='Ссылка на сайт' className='portfolio__link'> </a>
            </div>
            <div className='portfolio__links'>
                <p className='portfolio__site'>Одностраничное приложение</p>
                <a href='https://github.com/' target='_blank' rel="noopener noreferrer" alt='Ссылка на сайт' className='portfolio__link'> </a>
            </div>
        </div>
    )
}

export default Portfolio;