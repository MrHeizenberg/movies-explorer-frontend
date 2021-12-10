import React from "react";
import './PageWithForm.css';

function PageWithForm(props) {
    return (
        <div className='pagewithform'>
            <button className='pagewithform__logo' onClick={props.pushToMain}></button>
            <h2 className='pagewithform__title'>{props.title}</h2>
            <form type='submit' className='pagewithform__form'>
                <div className='pagewithform__container'>
                    {props.children}
                    <p className='pagewithform__inputname'>E-mail</p>
                    <input type="e-mail" className='pagewithform__input' required></input>
                    <p className='pagewithform__inputname'>Пароль</p>
                    <input type="password" className='pagewithform__input' required></input>
                    <p className='pagewithform__texterror'>Что-то пошло не так...</p>
                </div>
                <button className='pagewithform__signbutton' onClick={props.signIn}>{props.button}</button>
            </form>
            <div className='pagewithform__switchpage'>
                <p className='pagewithform__switchtext'>{props.switchText}</p>
                <button className='pagewithform__switchbutton' onClick={props.pushToAnother}>{props.switchButton}</button>
            </div>
        </div>
    )
}

export default PageWithForm;