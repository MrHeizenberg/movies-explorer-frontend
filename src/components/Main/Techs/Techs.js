import React from 'react';
import './Techs.css'

function Techs() {
    return(
        <div className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <p className='techs__subtitle'>7 технологий</p>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__technologies'>
                <li className='techs__technology'>HTML</li>
                <li className='techs__technology'>CSS</li>
                <li className='techs__technology'>JS</li>
                <li className='techs__technology'>React</li>
                <li className='techs__technology'>Git</li>
                <li className='techs__technology'>Express.js</li>
                <li className='techs__technology'>mongoDB</li>
            </ul>
        </div>
    )
}

export default Techs;