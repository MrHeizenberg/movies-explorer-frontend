import React from "react";
import './Profile.css';

function Profile(props) {
    return (
        <div className='profile'>
            <h2 className='profile__title'>Привет, Виталий!</h2>
            <div className='profile__info'>
                <p className='profile__name'>Имя</p>
                <p className='profile__username'>Виталий</p>
            </div>
            <div className='profile__info'>
                <p className='profile__email'>E-mail</p>
                <p className='profile__useremail'>pochta@yandex.ru</p>
            </div>
            <button className='profile__update'>Редактировать</button>
            <button className='profile__logout' onClick={props.signOut}>Выйти из аккаунта</button>
        </div>
    )
}

export default Profile;