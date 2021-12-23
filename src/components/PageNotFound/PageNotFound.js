import React from "react";
import './PageNotFound.css';

function PageNotFound(props) {

    return (
        <div className='pagenotfound'>
            <p className='pagenotfound__errornumber'>404</p>
            <p className='pagenotfound__errortext'>Страница не найдена</p>
            <button className='pagenotfound__return' onClick={props.pushToMain}>Назад</button>
        </div>
    )
}

export default PageNotFound;