import React from 'react';
import {
  useHistory
} from 'react-router-dom';

import { Button } from './general';

export const RedirectButton = ({children, ...props}) => {

  let history = useHistory();

  const handleClick = (event) => {
    history.push(`/${event.target.name}`);
  }

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
}

export const ActionButton = ({children, ...props}) => {

  return (
    <Button {...props}>
      {children}
    </Button>
  );
}
