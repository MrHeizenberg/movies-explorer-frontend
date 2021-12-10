import React from 'react';
import './AboutMe.css';
import photo from '../../../images/photo.png';

function AboutMe() {
    return (
        <div className='aboutme'>
            <h2 className='aboutme__title'>Студент</h2>
            <div className='aboutme__container'>
                <p className='aboutme__name'>Николай</p>
                <p className='aboutme__subtitle'>Фронтенд-разработчик, 24 года</p>
                <p className='aboutme__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <div className='aboutme__links'>
                    <a href = 'https://ru-ru.facebook.com/' target='_blank' rel="noopener noreferrer" className='aboutme__link'>Facebook</a>
                    <a href = 'https://github.com/' target='_blank' rel="noopener noreferrer" className='aboutme__link'>Github</a>
                </div>
                <img src = {photo} alt = 'Фото' className='aboutme__photo'/>
            </div>
        </div>
    )
}

export default AboutMe;