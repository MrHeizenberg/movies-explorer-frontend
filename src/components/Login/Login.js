import React from "react";
import './Login.css';
import PageWithForm from '../PageWithForm/PageWithForm';

function Login(props) {

    const [eMail,setEMail] = React.useState('');
    const [eMailValid, setEMailValid] = React.useState(true);
    const [eMailTextError, setEMailTextError] = React.useState('');

    const [password,setPassword] = React.useState('');
    const [passwordValid, setPasswordValid] = React.useState(true);
    const [passwordTextError, setPasswordTextError] = React.useState('');

    const [isFormValid,setIsFormValid] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        props.onAuth(password, eMail);
    }

    function handleEMailChange(e) {
        setEMail(e.target.value);
        setEMailValid(e.target.validity.valid);
        if (!e.target.validity.valid) {
            const errorMessage = e.target.validationMessage;
            setEMailTextError(errorMessage);
        }
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
        setPasswordValid(e.target.validity.valid);
        if (!e.target.validity.valid) {
            const errorMessage = e.target.validationMessage;
            setPasswordTextError(errorMessage);
        }
    }

    function checkValidity(e) {
        props.authChange();
        setIsFormValid(e.target.closest('form').checkValidity());
    }

    return (
        <div className='register'>
            <PageWithForm title='Рады видеть!' button='Войти' switchButton='Регистрация' switchText='Ещё не зарегистрированы?' pushToMain={props.pushToMain} pushToAnother={props.pushToSignUp} signIn={props.signIn}>
                <form type='submit' className='pagewithform__form' onSubmit={handleSubmit} onChange={checkValidity}>
                    <div className='pagewithform__container'>
                        <p className='pagewithform__inputname'>E-mail</p>
                        <input value={eMail} type="email" className='pagewithform__input' onChange={handleEMailChange} required></input>
                        <p className='pagewithform__texterror' style={eMailValid ? {display: 'none'} : {display: 'block', marginTop: '0'}}>{!eMailValid ? `${eMailTextError}` : ``}</p>
                        <p className='pagewithform__inputname'>Пароль</p>
                        <input value={password} type="password" className='pagewithform__input' onChange={handlePasswordChange} required></input>
                        <p className='pagewithform__texterror' style={passwordValid ? {display: 'none'} : {display: 'block'}}>{!passwordValid ? `${passwordTextError}` : ``}</p>
                    </div>
                    <p className='pagewithform__apitexterror'>{props.apiErrorText}</p>
                    <button type='submit' className={isFormValid ? 'pagewithform__signbutton' : 'pagewithform__signbutton pagewithform__signbutton_disabled'} disabled={!isFormValid}>Войти</button>
                </form>
            </PageWithForm>
        </div>
    )
}

export default Login;