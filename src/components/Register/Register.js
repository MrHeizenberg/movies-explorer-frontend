import React from "react";
import './Register.css';
import PageWithForm from '../PageWithForm/PageWithForm';

function Register(props) {

    const [eMail,setEMail] = React.useState('');
    const [eMailValid, setEMailValid] = React.useState(true);
    const [eMailTextError, setEMailTextError] = React.useState('');

    const [password,setPassword] = React.useState('');
    const [passwordValid, setPasswordValid] = React.useState(true);
    const [passwordTextError, setPasswordTextError] = React.useState('');

    const [name,setName] = React.useState('');
    const [nameValid, setNameValid] = React.useState(true);
    const [nameTextError, setNameTextError] = React.useState('');

    const [isFormValid,setIsFormValid] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegister(name, eMail, password);
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

    function handleNameChange(e) {
        setName(e.target.value)
        setNameValid(e.target.validity.valid);
        if (!e.target.validity.valid) {
            if (e.target.validity.patternMismatch) {
                const errorMessage = 'Имя пользователя может содержать только латиницу, кириллицу, пробел или дефис';
                setNameTextError(errorMessage);
                return;
            }
            const errorMessage = e.target.validationMessage;
            setNameTextError(errorMessage);
        }
    }

    function checkValidity(e) {
        props.registerChange();
        setIsFormValid(e.target.closest('form').checkValidity())
    }

    return (
        <div className='register'>
            <PageWithForm title='Добро пожаловать!' switchButton='Войти' switchText='Уже зарегистрированы?' onAuth={props.onRegister} pushToMain={props.pushToMain} pushToAnother={props.pushToSignIn}>
                <form type='submit' className='pagewithform__form' onSubmit={handleSubmit} onChange={checkValidity}>
                    <div className='pagewithform__container'>
                        <p className='pagewithform__inputname'>Имя</p>
                        <input value={name}  onChange={handleNameChange} className='pagewithform__input' pattern='[A-zА-я\s\-]{1,30}' minLength={2} maxLength={30} required></input>
                        <p className='pagewithform__texterror' style={nameValid ? {display: 'none'} : {display: 'block', marginTop: '0'}}>{!nameValid ? `${nameTextError}` : ``}</p>
                        <p className='pagewithform__inputname'>E-mail</p>
                        <input value={eMail}  onChange={handleEMailChange} type="email" className='pagewithform__input' required></input>
                        <p className='pagewithform__texterror' style={eMailValid ? {display: 'none'} : {display: 'block', marginTop: '0'}}>{!eMailValid ? `${eMailTextError}` : ``}</p>
                        <p className='pagewithform__inputname'>Пароль</p>
                        <input value={password}  onChange={handlePasswordChange} type="password" className='pagewithform__input' required></input>
                        <p className='pagewithform__texterror' style={passwordValid ? {display: 'none'} : {display: 'block'}}>{!passwordValid ? `${passwordTextError}` : ``}</p>
                    </div>
                    <p className='pagewithform__apitexterror'>{props.apiErrorText}</p>
                    <button type='submit' className={isFormValid ? 'pagewithform__signbutton' : 'pagewithform__signbutton pagewithform__signbutton_disabled'} disabled={!isFormValid}>Зарегистрироваться</button>
                </form>
            </PageWithForm>
        </div>
    )
}

export default Register;