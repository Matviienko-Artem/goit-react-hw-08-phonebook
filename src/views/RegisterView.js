import React, { Component } from 'react';
import styles from './LoginView.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    pasword: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.prevantDefault();

    this.setState({ name: '', email: '', pasword: '' });
  };

  render() {
    const { name, email, pasword } = this.state;

    return (
      <div>
        <h1>Register</h1>
        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
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
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

export default RegisterView;
