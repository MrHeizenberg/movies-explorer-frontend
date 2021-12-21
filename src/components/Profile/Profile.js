import React from "react";
import './Profile.css';
import { CurrentUserContext } from '../CurrentUserContext';

function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [nameValid, setNameValid] = React.useState(false);
    const [emailValid, setEmailValid] = React.useState(false);

    const [nameErrorMessage,setNameErrorMessage] = React.useState('');
    const [emailErrorMessage,setEmailErrorMessage] = React.useState('');

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
            const errorMessage = e.target.validationMessage;
            setEmailErrorMessage(errorMessage);
        }
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, []);

    return (
        <div className='profile'>
            <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
            <div className='profile__info'>
                <p className='profile__name'>Имя</p>
                <input value={name} onChange={handleNameChange} className='profile__username' required minLength={2}/>
            </div>
            <p className='profile__texterror' style={nameValid ? {display: 'none'} : {display: 'block'}}>{!nameValid ? `${nameErrorMessage}` : ``}</p>
            <div className='profile__info'>
                <p className='profile__email'>E-mail</p>
                <input type="email" value={email} onChange={handleEmailChange} className='profile__useremail' required/>
            </div>
            <p className='profile__texterror' style={emailValid ? {display: 'none'} : {display: 'block'}}>{!emailValid ? `${emailErrorMessage}` : ``}</p>
            <p className='propfile__apierror'>{props.apiErrorText}</p>
            <button className={(!nameValid || !emailValid) ? 'profile__update profile__update_disabled' : 'profile__update'} disabled={!nameValid || !emailValid} onClick={()=> {props.onProfileUpdate(name,email)}}>Редактировать</button>
            <button className='profile__logout' onClick={props.signOut}>Выйти из аккаунта</button>
        </div>
    )
}

export default Profile;