import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/UserMenu/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsViews from './views/ContactsViews';
import styles from './styles.module.css';

const App = () => (
  <div className={styles.Container}>
    <AppBar />

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/register" component={RegisterView} />
      <Route path="/login" component={LoginView} />
      <Route path="/contacts" component={ContactsViews} />
    </Switch>
  </div>
);

export default App;