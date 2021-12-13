import React from "react";
import './SearchForm.css';
import switchon from '../../images/switchon.svg';
import switchoff from '../../images/switchoff.svg';
function SearchForm() {

    const [switchOn, setSwitchOn] = React.useState(false);

    return (
        <div className='searchform'>
            <form type = 'submit' className = 'searchform__form'>
                <input name = 'film' className='searchform__film' placeholder = 'Фильм'></input>
                <button className='searchform__button'></button>
            </form>
            <div className='searchform__shortfilms'>
                <button className='searchform__switch' onClick={() => {switchOn ? setSwitchOn(false) : setSwitchOn(true)}} style = {switchOn ? {backgroundImage: `url(${switchon})`} : {backgroundImage: `url(${switchoff})`} }></button>
                <p className='searchform__text'>Короткометражки</p>
            </div>
        </div>
    )
}

export default SearchForm;