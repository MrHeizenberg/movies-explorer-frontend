import React from "react";
import './SearchForm.css';
import switchon from '../../images/switchon.svg';
import switchoff from '../../images/switchoff.svg';

function SearchForm(props) {

    const [filmName, setFilmName] = React.useState('');
    const [filmNameValid, setFilmNameValid] = React.useState(true);
    const [filmNameTextError, setFilmNameTextError] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.resetCounter();
        props.initialCards(filmName);
    }

    function handleFilmNameChange(e) {
        setFilmName(e.target.value);
        setFilmNameValid(e.target.validity.valid);
        if (!e.target.validity.valid) {
            const errorMessage = 'Нужно ввести ключевое слово';
            setFilmNameTextError(errorMessage);
        }
        if (!e.target.validity.valid && props.location.pathname === '/saved-movies') {
            props.searchSavedMovies('');
        }
    }

    function searchSavedMovies(e) {
        e.preventDefault();
        props.searchSavedMovies(filmName);
    }

    React.useEffect(() => {
        if (localStorage.getItem('filmName') && props.location.pathname === '/movies') {
            setFilmName(localStorage.getItem('filmName'))
        }
    }, []);

    return (
        <div className='searchform'>
            <form type = 'submit' className = 'searchform__form' onSubmit={props.location.pathname === '/movies' ? handleSubmit : searchSavedMovies}>
                <input name = 'film' className='searchform__film' value={filmName} placeholder = 'Фильм' onChange={handleFilmNameChange} onClick={handleFilmNameChange} onInvalid={handleFilmNameChange} required></input>
                <button className={filmNameValid ? 'searchform__button' : 'searchform__button searchform__button_disabled'} disabled={!filmNameValid}></button>
            </form>
            <p className='searchform__texterror' style={filmNameValid ? {display: 'none'} : {display: 'block'}}>{filmNameTextError}</p>
            <div className='searchform__shortfilms'>
                <button className='searchform__switch' onClick={() => props.changeSwitch()} style = {props.switchButton ? {backgroundImage: `url(${switchon})`} : {backgroundImage: `url(${switchoff})`} }></button>
                <p className='searchform__text'>Короткометражки</p>
            </div>
        </div>
    )
}

export default SearchForm;