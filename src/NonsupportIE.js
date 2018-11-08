import React, { Fragment } from 'react';

function isIE() {
  if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    return true;
  }
  return false;
}

// nonsupport IE component
const NonsupportIE = props => {
  const { devMode = false, reminder } = props;
  let isie = isIE();
  if (devMode) {
    isie = true;
  }
  if (isie) {
    return <Fragment>{reminder || 'app is not support IE'}</Fragment>;
  }
  return <Fragment>{props.children}</Fragment>;
};

export default NonsupportIE;
