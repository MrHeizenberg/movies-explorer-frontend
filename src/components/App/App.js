import './App.css';
import React from 'react';
import { Route, useHistory, Switch, useLocation, Redirect } from 'react-router-dom';
import { filmDuration } from '../../utils/constants';
import ProtectedRoute from '../ProtectedRoute';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { register, authorize, getContent, addMovie, getSavedCards, deleteMovie, profileUpdate } from '../../utils/MainApi';
import { getCards } from '../../utils/MoviesApi';
import { CurrentUserContext } from '../CurrentUserContext';

function App() {

  const [isLogged, setIsLogged] = React.useState(false);
  const history = useHistory();
  let location = useLocation();
  const [registerErrorText, setRegisterErrorText] = React.useState('');
  const [authErrorText, setAuthErrorText] = React.useState('');
  const [updateErrorText, setUpdateErrorText] = React.useState('');
  const [saveErrorText ,setSaveErrorText] = React.useState('');
  const [token, setToken] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [cards, setCards] = React.useState([]);
  const [shortCards, setShortCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [checkResult, setCheckResult] = React.useState(true);
  const [checkShortResult, setCheckShortResult] = React.useState(true);
  const [savedCards, setSavedCards] = React.useState([]);
  const [switchOn, setSwitchOn] = React.useState(false);
  const [allFilms, setAllFilms] = React.useState([]);
  const [idError, setIdError] = React.useState('');

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      setToken(jwt);
      if (localStorage.getItem('allFilms')) {
        setAllFilms(JSON.parse(localStorage.getItem('allFilms')));
      }
      getContent(jwt).then((data) => {
        setCurrentUser(data);
        if (localStorage.getItem('cards')) {
          setCards(JSON.parse(localStorage.getItem('cards')));
        }
        if (localStorage.getItem('shortCards')) {
          setShortCards(JSON.parse(localStorage.getItem('shortCards')));
        }
        if (localStorage.getItem('switchOn')) {
          setSwitchOn(JSON.parse(localStorage.getItem('switchOn')));
        }
        setIsLogged(true);
        history.push(location);
      })
      getSavedCards(jwt).then((films) => {
        setSavedCards(films);
      })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [])

  function registerChange() {
    setRegisterErrorText('');
  }

  function authChange() {
    setAuthErrorText('');
  }

  function signOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('cards');
    localStorage.removeItem('shortCards');
    localStorage.removeItem('switchOn');
    localStorage.removeItem('filmName');
    setCurrentUser({});
    setCards([]);
    setShortCards([]);
    setIsLogged(false);
    history.push('/');
  }

  function pushToAccount() {
    setUpdateErrorText('');
    history.push('/profile');
  }

  function pushToMain() {
    history.push('/');
  }

  function pushToFilms() {
    history.push('/movies');
  }

  function pushToSavedFilms() {
    history.push('/saved-movies');
  }

  function pushToSignUp() {
    history.push('/signup');
  }

  function pushToSignIn() {
    history.push('/signin');
  }

  function changeSwitch() {
    switchOn ? setSwitchOn(false) : setSwitchOn(true);
    switchOn ? localStorage.setItem('switchOn', JSON.stringify(false)) : localStorage.setItem('switchOn', JSON.stringify(true));
  }

  function handleOnRegister(name, email, password) {
    setIsLoading(true);
    setRegisterErrorText('');
    register(name, email, password).then(() => {
      authorize(password, email).then((data) => {
        getCards().then((films) => {
          setAllFilms(films);
          localStorage.setItem('allFilms', JSON.stringify(films));
        })
          .catch(() => {
            console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          })
        localStorage.setItem('jwt', data.token);
        setToken(data.token);
        getContent(data.token).then((res) => {
          setCurrentUser(res);
          setIsLogged(true);
          history.push('/movies');
        });
      })
    })
      .catch((err) => {
        if (err === 409) {
          setRegisterErrorText('Пользователь с таким email уже существует');
          return;
        }
        setRegisterErrorText('При регистрации пользователя произошла ошибка');
      })
      .finally(() => setIsLoading(false))
  }

  function handleonAuthorize(password, email) {
    setIsLoading(true);
    setAuthErrorText('');
    authorize(password, email).then((data) => {
      getCards().then((films) => {
        setAllFilms(films);
        localStorage.setItem('allFilms', JSON.stringify(films));
      })
        .catch(() => {
          console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
      localStorage.setItem('jwt', data.token);
      setToken(data.token);
      setIsLogged(true);
      history.push('/movies');
      getContent(data.token).then((res) => {
        setCurrentUser(res);
      });
      getSavedCards(data.token).then((films) => {
        setSavedCards(films);
      })
    })
      .catch((err) => {
        if (err === 401) {
          setAuthErrorText('Вы ввели неправильный логин или пароль');
          return;
        }
        setAuthErrorText('При авторизации пользователя произошла ошибка');
      })
      .finally(() => setIsLoading(false))
  }

  function initialCards(filmName) {
    setCards([]);
    setIsLoading(true);
    localStorage.setItem('filmName', filmName);
    const result = allFilms.map((film) => { return savedCards.some((card) => { return film.id === card.movieId }) ? { ...film, 'isSaved': true } : { ...film, 'isSaved': false } }).filter((film) => film.nameRU.toLowerCase().includes(filmName.toLowerCase()));
    setCards(result);
    localStorage.setItem('cards', JSON.stringify(result));
    setShortCards(result.filter(film => film.duration < filmDuration));
    localStorage.setItem('shortCards', JSON.stringify(result.filter(film => film.duration < filmDuration)));
    if (result.length === 0) {
      setCheckResult(false);
    }
    else setCheckResult(true);
    setIsLoading(false);
  }

  function searchSavedMovies(filmName) {
    setCheckShortResult(true);
    getSavedCards(localStorage.getItem('jwt')).then((films) => {
      const result = films.filter((card) => card.nameRU.toLowerCase().includes(filmName.toLowerCase()))
      setSavedCards(result);
      if (result.length === 0) {
        setCheckShortResult(false);
      }
      else setCheckShortResult(true);
    })
      .catch(() => {
        console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
  }

  function updateChanges(result) {
    setSavedCards(result);
    const updateCards = cards.map((card) => { return result.some((film) => { return card.id === film.movieId }) ? { ...card, 'isSaved': true } : { ...card, 'isSaved': false } });
    localStorage.setItem('cards', JSON.stringify(updateCards));
    setCards(updateCards);
    const updateShortCards = shortCards.map((card) => { return result.some((film) => { return card.id === film.movieId }) ? { ...card, 'isSaved': true } : { ...card, 'isSaved': false } });
    localStorage.setItem('shortCards', JSON.stringify(updateShortCards));
    setShortCards(updateShortCards);
  }

  function saveFilms(country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN, isSaved) {
    if (isSaved) {
      const savedFilm = savedCards.find(card => card.movieId === movieId);
      return deleteMovie(token, savedFilm._id)
        .then(() => {
          const result = savedCards.filter(card => card.movieId !== movieId);
          updateChanges(result);
        })
        .catch(() => {
          console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
    }
    addMovie(token, country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN)
      .then((movie) => {
        const result = [...savedCards, movie];
        updateChanges(result);
      })
      .catch((err) => {
        if (err === 400) {
          setSaveErrorText('Невозможно сохранить данную карточку');
          setIdError(movieId);
          return;
        }
        setSaveErrorText('При авторизации пользователя произошла ошибка');
      })
  }

  function deleteFilm(filmId, movieId) {
    deleteMovie(token, filmId)
      .then(() => {
        const result = savedCards.filter(card => card.movieId !== movieId);
        updateChanges(result);
      })
      .catch(() => {
        console.log('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
  }

  function onProfileUpdate(name, email) {
    setIsLoading(true);
    setUpdateErrorText('');
    profileUpdate(name, email, token)
      .then((user) => {
        setUpdateErrorText('Данные пользователя успешно изменены');
        setCurrentUser(user);
      })
      .catch((err) => {
        if (err === 409) {
          setUpdateErrorText('Пользователь с таким email уже существует');
          return;
        }
        setUpdateErrorText('При редактировании пользователя произошла ошибка');
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {(location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile') && <Header isLogged={isLogged} pushToAccount={pushToAccount} pushToMain={pushToMain} pushToFilms={pushToFilms} pushToSavedFilms={pushToSavedFilms} pushToSignUp={pushToSignUp} pushToSignIn={pushToSignIn} location={location.pathname} />}
        <Switch>
          <Route path='/signup'>
            {!isLogged ? <Register onRegister={handleOnRegister} pushToMain={pushToMain} pushToSignIn={pushToSignIn} apiErrorText={registerErrorText} registerChange={registerChange} isLoading={isLoading} /> : <Redirect to='./' />}
          </Route>
          <Route path='/signin'>
            {!isLogged ? <Login onAuth={handleonAuthorize} pushToMain={pushToMain} pushToSignUp={pushToSignUp} apiErrorText={authErrorText} authChange={authChange} isLoading={isLoading} /> : <Redirect to='./' />}
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
          <ProtectedRoute exact path='/movies' loggedIn={isLogged} component={Movies} initialCards={initialCards} cards={cards} shortCards={shortCards} isLoading={isLoading} checkResult={checkResult} saveFilms={saveFilms} location={location} changeSwitch={changeSwitch} switchOn={switchOn} apiErrorText={saveErrorText} idError={idError} />
          <ProtectedRoute exact path='/saved-movies' loggedIn={isLogged} component={SavedMovies} savedCards={savedCards} saveFilms={saveFilms} location={location} deleteFilm={deleteFilm} changeSwitch={changeSwitch} switchOn={switchOn} searchSavedMovies={searchSavedMovies} checkShortResult={checkShortResult} />
          <ProtectedRoute exact path='/profile' loggedIn={isLogged} component={Profile} signOut={signOut} onProfileUpdate={onProfileUpdate} apiErrorText={updateErrorText} isLoading={isLoading} />
          <Route path='*'>
            <PageNotFound pushToMain={pushToMain} />
          </Route>
        </Switch>
        {(location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies') && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
