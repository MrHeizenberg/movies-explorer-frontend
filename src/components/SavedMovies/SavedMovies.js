import React from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import carddelete from '../../images/delete.svg';

function SavedMovies(props) {

    function changeSwitch() {
        props.changeSwitch();
    }

    return (
        <div className='savedmovies'>
            <SearchForm switchButton={props.switchOn} changeSwitch={changeSwitch} searchSavedMovies={props.searchSavedMovies} location={props.location}/>
            <MoviesCardList>
            {props.switchOn ? props.savedCards.filter(card => card.duration < 40).map((card) => {
                    const cardinfo = {trailer: card.trailerLink, nameRU: card.nameRU, movieId: card.movieId, id: card._id, duration: card.duration, image: card.image};
                    return (<MoviesCard 
                        card = {cardinfo} key = {card._id} saveFilms={props.saveFilms} isSaved={props.isSaved} buttonImage={carddelete} location={props.location} deleteFilm={props.deleteFilm}/>)
                }) : props.savedCards.map((card) => {
                    const cardinfo = {trailer: card.trailerLink, nameRU: card.nameRU, movieId: card.movieId, id: card._id, duration: card.duration, image: card.image};
                    return (<MoviesCard 
                        card = {cardinfo} key = {card._id} saveFilms={props.saveFilms} isSaved={props.isSaved} buttonImage={carddelete} location={props.location} deleteFilm={props.deleteFilm}/>)
                })}
            </MoviesCardList>
            {!props.checkShortResult && <p className='savedmovies__result'>Ничего не найдено</p>}
        </div>
    )
}

export default SavedMovies;