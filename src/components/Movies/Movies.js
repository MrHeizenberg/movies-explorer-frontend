import React from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from './Preloader/Preloader';
import { minWidth, middleWidth, minShowCard, middleShowCard, maxShowCard, minAddCard, maxAddCard } from '../../utils/constants';

function Movies(props) {

    const [width, setWidth] = React.useState(window.innerWidth);
    function resize() {
        setWidth(window.innerWidth)
    }
    React.useEffect(() => {
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    },[])
    const [numbers, setNumbers] = React.useState(width < minWidth ? minShowCard : width < middleWidth ? middleShowCard : maxShowCard);

    function openFilms() {
        setNumbers(width < middleWidth ? numbers+minAddCard : numbers+maxAddCard);
    }

    function resetCounter() {
        setNumbers(width < minWidth ? minShowCard : width < middleWidth ? middleShowCard : maxShowCard);
    }

    function changeSwitch() {
        props.changeSwitch();
        setNumbers(width < minWidth ? minShowCard : width < middleWidth ? middleShowCard : maxShowCard);
    }

    return (
        <div className='movies'>
            <SearchForm location={props.location} initialCards={props.initialCards} resetCounter={resetCounter} changeSwitch={changeSwitch} switchButton={props.switchOn}/>
            <MoviesCardList>
                {props.switchOn ? props.shortCards.slice(0,numbers).map((card) => {
                    const cardinfo = {country: card.country, director: card.director, year: card.year, description: card.description, thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`, link: card.trailerLink, nameRU: card.nameRU, nameEN: card.nameEN, movieId: card.id, duration: card.duration, image: `https://api.nomoreparties.co${card.image.url}`, isSaved: card.isSaved};
                    return (<MoviesCard
                        idError={props.idError} apiErrorText = {props.apiErrorText} card = {cardinfo} key = {card.id} saveFilms={props.saveFilms} isSaved={props.isSaved} location={props.location}/>)
                }) : props.cards.slice(0,numbers).map((card) => {
                    const cardinfo = {country: card.country, director: card.director, year: card.year, description: card.description, thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`, link: card.trailerLink, nameRU: card.nameRU, nameEN: card.nameEN, movieId: card.id, duration: card.duration, image: `https://api.nomoreparties.co${card.image.url}`, isSaved: card.isSaved};
                    return (<MoviesCard 
                        idError={props.idError} apiErrorText = {props.apiErrorText} card = {cardinfo} key = {card.id} saveFilms={props.saveFilms} location={props.location}/>)
                })}
            </MoviesCardList>
            <Preloader isLoading={props.isLoading} cards={props.switchOn ? props.shortCards : props.cards} openFilms = {openFilms} numbers={numbers} checkResult={props.checkResult}/>
        </div>
    )
}

export default Movies;