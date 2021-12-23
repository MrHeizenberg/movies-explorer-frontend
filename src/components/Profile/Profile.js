import React from "react";
import './Profile.css';
import { CurrentUserContext } from '../CurrentUserContext';

function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [nameValid, setNameValid] = React.useState(true);
    const [emailValid, setEmailValid] = React.useState(true);

    const [nameErrorMessage,setNameErrorMessage] = React.useState('');
    const [emailErrorMessage,setEmailErrorMessage] = React.useState('');
    const [isFormValid,setIsFormValid] = React.useState(false);

    function handleNameChange(e) {
        setName(e.target.value);
        setNameValid(e.target.validity.valid)
        if (!e.target.validity.valid) {
            const errorMessage = e.target.validationMessage;
            setNameErrorMessage(errorMessage);
        }
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
        setEmailValid(e.target.validity.valid)
        if (!e.target.validity.valid) {
            if (e.target.validity.patternMismatch) {
                const errorMessage = 'Введите корректный email';
                setEmailErrorMessage(errorMessage);
                return;
            }
            const errorMessage = e.target.validationMessage;
            setEmailErrorMessage(errorMessage);
        }
    }

    function checkValidity(e) {
        setIsFormValid(e.target.closest('form').checkValidity());
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onProfileUpdate(name,email)
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, []);

    return (
        <form className='profile' onChange={checkValidity} onSubmit={handleSubmit}>
            <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
            <div className='profile__info'>
                <p className='profile__name'>Имя</p>
                <input value={name} disabled={props.isLoading} onChange={handleNameChange} className='profile__username' required minLength={2}/>
            </div>
            <p className='profile__texterror' style={nameValid ? {display: 'none'} : {display: 'block'}}>{!nameValid ? `${nameErrorMessage}` : ``}</p>
            <div className='profile__info'>
                <p className='profile__email'>E-mail</p>
                <input type="email" value={email} disabled={props.isLoading} onChange={handleEmailChange} pattern='[A-zА-я0-9]+@[A-zА-я0-9]+\.(ru|com)' className='profile__useremail' required/>
            </div>
            <p className='profile__texterror' style={emailValid ? {display: 'none'} : {display: 'block'}}>{!emailValid ? `${emailErrorMessage}` : ``}</p>
            <p className='propfile__apierror'>{props.apiErrorText}</p>
            <button type="submit" className={!((isFormValid && (currentUser.name !== name || currentUser.email !== email)) && !props.isLoading) ? 'profile__update profile__update_disabled' : 'profile__update'} disabled={!(isFormValid && (currentUser.name !== name || currentUser.email !== email)) || props.isLoading}>Редактировать</button>
            <button className='profile__logout' onClick={props.signOut}>Выйти из аккаунта</button>
        </form>
    )
}

export default Profile;