import React from 'react';

import style from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={style.container}>
    <img src={avatar} alt="" width="32" className={style.avatar} />
    <span className={style.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserMenu;
