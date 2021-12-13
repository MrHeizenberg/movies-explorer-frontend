import React from "react";
import './Register.css';
import PageWithForm from '../PageWithForm/PageWithForm';

function Register(props) {
    return (
        <div className='register'>
            <PageWithForm title='Добро пожаловать!' button = 'Зарегестрироваться' switchButton = 'Войти' switchText = 'Уже зарегистрированы?' pushToMain={props.pushToMain} pushToAnother={props.pushToSignIn}>
                    <p className='pagewithform__inputname'>Имя</p>
                    <input className='pagewithform__input' required></input>
            </PageWithForm>
        </div>
    )
}

export default Register;