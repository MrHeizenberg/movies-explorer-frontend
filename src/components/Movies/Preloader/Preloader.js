import React from 'react'
import './Preloader.css'

const Preloader = () => {

    const [isLoading, setIsLoading] = React.useState(false)
    const onPreloader = () => {
            setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }

    return (
        <div className='preloader'>
            {isLoading && <div className='preloader__container'>
                <span className='preloader__round'></span>
            </div>}
            {!isLoading && <button className='preloader__on' onClick = {onPreloader}>Ещё</button>}
        </div>
    )
};

export default Preloader
