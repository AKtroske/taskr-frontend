import React from 'react';

import { Col, Exit } from '../general/general';

import {
  MobileBarWrapper,
  MobileHeader,
  MobileBarItem,
} from './styles.js';

const MobileNavbar = props => {

  const { view, toggleNav, toggleAcc} = props;

  return (
    <MobileBarWrapper right={(view) ? '0' : '-40%'}>
      <Col>
        <MobileHeader><Exit size={'50'} onClick={toggleNav} color={props => props.theme.colors.secondary}/></MobileHeader>
        <MobileBarItem firstnav='0'>dash</MobileBarItem>
        <MobileBarItem>public</MobileBarItem>
        <MobileBarItem>jobs</MobileBarItem>
        <MobileBarItem onClick={toggleAcc}>account</MobileBarItem>
        <MobileBarItem lastnav='0'>premium</MobileBarItem>
      </Col>
    </MobileBarWrapper>
  );
};

export default MobileNavbar;
