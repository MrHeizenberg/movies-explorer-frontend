import React from "react";
import './MoviesCardList.css';

function MoviesCardList(props) {

    return (
        <div className='moviescardlist'>
            {props.children}
        </div>
    )
}

export default MoviesCardList;