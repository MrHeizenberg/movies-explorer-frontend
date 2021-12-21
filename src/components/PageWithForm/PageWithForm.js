import React from "react";
import './PageWithForm.css';

function PageWithForm(props) {

    return (
        <div className='pagewithform'>
            <button className='pagewithform__logo' onClick={props.pushToMain}></button>
            <h2 className='pagewithform__title'>{props.title}</h2>
            {props.children}
            <div className='pagewithform__switchpage'>
                <p className='pagewithform__switchtext'>{props.switchText}</p>
                <button className='pagewithform__switchbutton' onClick={props.pushToAnother}>{props.switchButton}</button>
            </div>
        </div>
    )
}

export default PageWithForm;