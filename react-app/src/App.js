import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
// import User from './components/User';
import { authenticate } from './store/session';
import MoviePage from './components/MoviePage';
import ListPage from './components/ListPage';
import UserPage from './components/UserPage';
import HomePage from './components/HomePage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        {/* <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        <ProtectedRoute path='/' exact={true} >
          <HomePage/>
          {/* <h1>My Home Page</h1> */}
        </ProtectedRoute>
        <Route path='/movies/:id' exact={true}>
          <MoviePage/>
        </Route>
        <ProtectedRoute path='/lists/:id' exact={true}>
          <ListPage/>
        </ProtectedRoute>
        <Route path='/users/:userId' exact={true}>
          <UserPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
