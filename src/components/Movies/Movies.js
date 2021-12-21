import React from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from './Preloader/Preloader';

function Movies(props) {

    const [width, setWidth] = React.useState(window.innerWidth);
    function resize() {
        setWidth(window.innerWidth)
    }
    React.useEffect(() => {
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    },[])
    const [numbers, setNumbers] = React.useState(width < 620 ? 5 : width < 1135 ? 8 : 12);

    function openFilms() {
        setNumbers(width < 1135 ? numbers+2 : numbers+3);
    }

    function resetCounter() {
        setNumbers(width < 620 ? 5 : width < 1135 ? 8 : 12);
    }

    function changeSwitch() {
        props.changeSwitch();
        setNumbers(width < 620 ? 5 : width < 1135 ? 8 : 12);
    }

    return (
        <div className='movies'>
            <SearchForm location={props.location} initialCards={props.initialCards} resetCounter={resetCounter} changeSwitch={changeSwitch} switchButton={props.switchOn}/>
            <MoviesCardList>
                {props.switchOn ? props.shortCards.slice(0,numbers).map((card) => {
                    const cardinfo = {country: card.country, director: card.director, year: card.year, description: card.description, thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`, link: card.trailerLink, nameRU: card.nameRU, nameEN: card.nameEN, movieId: card.id, duration: card.duration, image: `https://api.nomoreparties.co${card.image.url}`, isSaved: card.isSaved};
                    return (<MoviesCard 
                        card = {cardinfo} key = {card.id} saveFilms={props.saveFilms} isSaved={props.isSaved} location={props.location}/>)
                }) : props.cards.slice(0,numbers).map((card) => {
                    const cardinfo = {country: card.country, director: card.director, year: card.year, description: card.description, thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`, link: card.trailerLink, nameRU: card.nameRU, nameEN: card.nameEN, movieId: card.id, duration: card.duration, image: `https://api.nomoreparties.co${card.image.url}`, isSaved: card.isSaved};
                    return (<MoviesCard 
                        card = {cardinfo} key = {card.id} saveFilms={props.saveFilms} location={props.location}/>)
                })}
            </MoviesCardList>
            <Preloader isLoading={props.isLoading} cards={props.switchOn ? props.shortCards : props.cards} openFilms = {openFilms} numbers={numbers} checkResult={props.checkResult}/>
        </div>
    )
}

export default Movies;