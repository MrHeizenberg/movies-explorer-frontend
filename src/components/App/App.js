import './App.css';
import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {

  const [isLogged, setIsLogged] = React.useState(false);
  const history = useHistory();
  const [path, setPath] = React.useState(history.location.pathname);

  function signIn() {
    setIsLogged(true);
    history.push('/movies');
    setPath(history.location.pathname);
  }

  function signOut() {
    setIsLogged(false);
    history.push('/');
    setPath(history.location.pathname);
  }

  function pushToAccount() {
    history.push('/profile');
    setPath(history.location.pathname);
  }

  function pushToMain() {
    history.push('/');
    setPath(history.location.pathname);
  }

  function pushToFilms() {
    history.push('/movies');
    setPath(history.location.pathname);
  }

  function pushToSavedFilms() {
    history.push('/saved-movies');
    setPath(history.location.pathname);
  }

  function pushToSignUp() {
    history.push('/signup');
    setPath(history.location.pathname);
  }

  function pushToSignIn() {
    history.push('/signin');
    setPath(history.location.pathname);
  }

  function pushToAny() {
    setPath('*');
  }

  return (
    <div className="App">
      {path !== '/signup' && path !== '/signin' && path !== '*' && <Header isLogged={isLogged} pushToAccount={pushToAccount} pushToMain={pushToMain} pushToFilms={pushToFilms} pushToSavedFilms={pushToSavedFilms} pushToSignUp={pushToSignUp} pushToSignIn={pushToSignIn} path={path} />}
      <Switch>
        <Route path='/signup'>
          <Register pushToMain={pushToMain} pushToSignIn={pushToSignIn} />
        </Route>
        <Route path='/signin'>
          <Login pushToMain={pushToMain} pushToSignUp={pushToSignUp} signIn={signIn}/>
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile signOut={signOut} />
        </Route>
        <Route path='*'>
          <PageNotFound pushToMain={pushToMain} pushToAny = {pushToAny}/>
        </Route>
      </Switch>
      {path !== '/profile' && path !== '/signup' && path !== '/signin' && path !== '*' && <Footer />}
    </div>
  );
}

export default App;
