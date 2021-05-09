import React, { Component } from 'react';
import styles from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    pasword: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.prevantDefault();

    this.setState({ email: '', pasword: '' });
  };

  render() {
    const { email, pasword } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Пароль
            <input
              type="pasword"
              name="pasword"
              value={pasword}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

export default LoginView;
