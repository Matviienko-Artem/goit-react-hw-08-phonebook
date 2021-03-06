import React, { Component, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/UserMenu/AppBar/AppBar';
import styles from './styles.module.css';
import * as authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);

const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);

const ContactsViews = lazy(() =>
  import('./views/ContactsViews' /* webpackChunkName: "contacts-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div className={styles.Container}>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              component={RegisterView}
              redirectTo="/contacts"
            />
            <PublicRoute
              path="/login"
              restricted
              component={LoginView}
              redirectTo="/contacts"
            />
            <PrivateRoute
              path="/contacts"
              component={ContactsViews}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
