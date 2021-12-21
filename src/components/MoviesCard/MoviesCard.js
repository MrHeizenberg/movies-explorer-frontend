import React from "react";
import './MoviesCard.css';
import saveButton from '../../images/save.svg';
import savedButton from '../../images/saved.svg'

function MoviesCard(props) {

    function saveFilm() {
        props.saveFilms(props.card.country, props.card.director, props.card.duration, props.card.year, props.card.description, props.card.image, props.card.link, props.card.thumbnail, props.card.movieId, props.card.nameRU, props.card.nameEN, props.card.isSaved);
    }

    function deleteFilm() {
        props.deleteFilm(props.card.id,props.card.movieId);
    }

    return (
        <div className='moviescard'>
            <div className='moviescard__info'>
                <p className='moviescard__title'>{props.card.nameRU}</p>
                <p className='moviescard__duration'>{props.card.duration} мин</p>
            </div>
            <a href={`${props.card.link}`} className='moviescard__image' target='_blank' rel="noopener noreferrer" style={{ backgroundImage: `url(${props.card.image})` }}> </a>
            <button className='moviescard__save' style={props.location.pathname === '/saved-movies' ? { backgroundImage: `url(${props.buttonImage})`} : props.card.isSaved ? { backgroundImage: `url(${savedButton})` } : { backgroundImage: `url(${saveButton})` }} onClick={props.location.pathname === '/saved-movies' ? deleteFilm : saveFilm}></button>
        </div>
    )
}

export default MoviesCard;