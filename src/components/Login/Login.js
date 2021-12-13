import React from "react";
import './Login.css';
import PageWithForm from '../PageWithForm/PageWithForm';

function Login(props) {
    return (
        <div className='register'>
            <PageWithForm title='Рады видеть!' button = 'Войти' switchButton = 'Регистрация' switchText = 'Ещё не зарегистрированы?' pushToMain={props.pushToMain} pushToAnother={props.pushToSignUp} signIn={props.signIn}/>
        </div>
    )
}

export default Login;