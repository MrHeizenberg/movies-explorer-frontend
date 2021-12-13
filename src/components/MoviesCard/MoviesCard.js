import React from "react";
import './MoviesCard.css';

function MoviesCard(props) {
    return (
        <div className='moviescard'>
            <div className='moviescard__info'>
                <p className='moviescard__title'>{props.card.name}</p>
                <p className='moviescard__duration'>{props.card.duration}</p>
            </div>
            <a href = 'https://yandex.ru/' className='moviescard__image' target='_blank' rel="noopener noreferrer" style={{backgroundImage: `url(${props.card.image})`}}> </a>
            <button className='moviescard__save' style={{backgroundImage: `url(${props.card.button})`}}></button>
        </div>
    )
}

export default MoviesCard;