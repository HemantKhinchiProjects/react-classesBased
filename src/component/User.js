import React from 'react';
import classes from './user.module.css';

const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};

export default User;
