import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
    return (
        <div className='preloader'>
            {props.isLoading && <div className='preloader__container'>
                <span className='preloader__round'></span>
            </div>}
            {!props.isLoading && !props.checkResult ? <p className='preloader__notfoundtext'>Ничего не найдено</p> : !props.isLoading && !(props.cards.length < 4) && (props.cards.length - props.numbers > 0 ) && <button className='preloader__on' onClick={() => props.openFilms()}>Ещё</button>}
        </div>
    )
};

export default Preloader
