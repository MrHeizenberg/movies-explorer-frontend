import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <div className='aboutproject'>
            <h2 className='aboutproject__title'>О проекте</h2>
            <div className='aboutproject__info'>
                <div className='aboutproject__container'>
                    <h3 className='aboutproject__subtitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='aboutproject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='aboutproject__container'>
                    <h3 className='aboutproject__subtitle'>На выполнение диплома ушло 5 недель</h3>
                    <p className='aboutproject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='aboutproject__diagram'>
                <div className='aboutproject__diagram-info'>
                    <p className='aboutproject__firstweek'>1 неделя</p>
                    <p className='aboutproject__othertweeks'>4 недели</p>
                </div>
                <div className='aboutproject__diagram-info'>
                    <p className='aboutproject__firstweek aboutproject__firstweek_text'>Back-end</p>
                    <p className='aboutproject__othertweeks aboutproject__othertweeks_text'>Front-end</p>
                </div>
            </div>
        </div>
    )
}

export default AboutProject;