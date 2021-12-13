import React from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import picture from '../../images/pic__COLOR_pic.png';
import button from '../../images/delete.svg';

function SavedMovies() {

    const cardInfo = {name: 'В погоне за Бенкси', duration: '27 минут', image: picture, button: button}

    return (
        <div className='savedmovies'>
            <SearchForm/>
            <MoviesCardList>
                <MoviesCard card = {cardInfo}/>
                <MoviesCard card = {cardInfo}/>
                <MoviesCard card = {cardInfo}/>
            </MoviesCardList>
        </div>
    )
}

export default SavedMovies;