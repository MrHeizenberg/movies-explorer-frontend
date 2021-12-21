import React from 'react';
import './Header.css';

function Header(props) {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    
    function onMobileMenu() {
        setIsMobileMenuOpen(true);
    }

    function offMobileMenu() {
        setIsMobileMenuOpen(false);
    }

    return (
        <div className='header' style={props.location === '/' ? { backgroundColor: '#073042' } : { backgroundColor: '#202020' }}>
            <button className='header__logo' onClick={props.pushToMain} />
            {props.isLogged && <div className='header__menufilms header__menufilms_fullscreen'>
                <button className='header__films' onClick={props.pushToFilms} style={props.location === '/movies' ? { fontWeight: '500' }: props.location === '/' ? { backgroundColor: '#073042' } : { backgroundColor: '#202020' }}>Фильмы</button>
                <button className='header__films' onClick={props.pushToSavedFilms} style={props.location === '/saved-movies' ? { fontWeight: '500' }: props.location === '/' ? { backgroundColor: '#073042' } : { backgroundColor: '#202020' }}>Сохранённые фильмы</button>
            </div>}
            {props.isLogged && <div className='header__account header__account_fullscreen'>
                <button className='header__accountlink' onClick={props.pushToAccount} style={props.location === '/profile' ? { fontWeight: '500' }: props.location === '/' ? { backgroundColor: '#073042' } : { backgroundColor: '#202020' }}>Аккаунт</button>
                <div className='header__accountlogo'></div>
            </div>}
            {props.isLogged && !isMobileMenuOpen && <button className='header__onmobilemenu' onClick = {onMobileMenu} style = {props.location === '/' ? { backgroundColor: '#073042' } : { backgroundColor: '#202020' }}></button>}
            {isMobileMenuOpen && <div className='header__mobilemenu'>
                <button className='header__offmobilemenu' onClick={offMobileMenu}></button>
                <button className='header__navigation' onClick={() => {props.pushToMain(); setIsMobileMenuOpen(false);}} style={props.location === '/' ? { borderBottom: '2px solid #FFFFFF' } : { borderBottom: 'none' }}>Главная</button>
                <button className='header__navigation' onClick={() => {props.pushToFilms(); setIsMobileMenuOpen(false);}} style={props.location === '/movies' ? { borderBottom: '2px solid #FFFFFF' } : { borderBottom: 'none' }}>Фильмы</button>
                <button className='header__navigation' onClick={() => {props.pushToSavedFilms(); setIsMobileMenuOpen(false);}} style={props.location === '/saved-movies' ? { borderBottom: '2px solid #FFFFFF' } : { borderBottom: 'none' }}>Сохранённые фильмы</button>
                <div className='header__account header__account_mobile'>
                    <button className='header__accountlink' onClick={() => {props.pushToAccount(); setIsMobileMenuOpen(false);}} style={props.location === '/profile' ? { borderBottom: '2px solid #FFFFFF' } : { borderBottom: 'none' }}>Аккаунт</button>
                    <div className='header__accountlogo'></div>
                </div>
            </div>}
            {!props.isLogged && <div className='header__auth'>
                <button className='header__signup' onClick={props.pushToSignUp}>Регистрация</button>
                <button className='header__signin' onClick={props.pushToSignIn}>Войти</button>
            </div>}
        </div>
    )
}

export default Header;