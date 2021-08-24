import React from 'react';
import classes from './MuButton.module.css';

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.mybtn}>
      {children}
    </button>
  );
};

export default MyButton;
