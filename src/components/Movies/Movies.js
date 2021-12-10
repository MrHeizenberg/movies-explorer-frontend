import React from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from './Preloader/Preloader';
import picture from '../../images/pic__COLOR_pic.png';
import picture2 from '../../images/pic__COLOR_pic1.svg';
import button from '../../images/saved.svg';
import button2 from '../../images/save.svg';

function Movies() {

    const cardInfo = {name: 'В погоне за Бенкси', duration: '27 минут', image: picture, button: button}
    const cardInfo2 = {name: 'В погоне за Бенкси', duration: '27 минут', image: picture2, button: button2}

    return (
        <div className='movies'>
            <SearchForm/>
            <MoviesCardList>
                <MoviesCard card = {cardInfo}/>
                <MoviesCard card = {cardInfo2}/>
                <MoviesCard card = {cardInfo}/>
                <MoviesCard card = {cardInfo2}/>
                <MoviesCard card = {cardInfo}/>
                <MoviesCard card = {cardInfo2}/>
            </MoviesCardList>
            <Preloader/>
        </div>
    )
}

export default Movies;