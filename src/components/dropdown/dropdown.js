import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';

import {
  DropdownContainer,
  DropdownItem,
  DropdownHeader,
  DropdownCol,
  DropdownRow,
  MoneyIcon
} from './styles';

import {
  Header,
  Text
} from '../general/general';

const Dropdown = (props) => {

  const { children, info, view } = props;

  return(
    <DropdownContainer display={(view) ? 'flex' : 'none'}>
      {info.userInfo &&
      <DropdownCol>
        <DropdownRow jc='center' alignitems='center'>
          <MoneyIcon size='3em'/>
          <Header fontweight='500' fontsize='2em' color={props => props.theme.colors.primary}>{info.userInfo.wallet}</Header>
        </DropdownRow>
        <Header alignself='center' color={props => props.theme.colors.text}>Hi, {info.userInfo.username}!</Header>
      </DropdownCol>
      }
      {info.items.map((item, index) => (
        (typeof(item) === "object") ?
          <DropdownHeader key={index} fontweight='500'>{item.header}</DropdownHeader>
        : <DropdownItem key={index} href={`/${item.toLowerCase()}`}>{item}</DropdownItem>
      ))}
      {children}
    </DropdownContainer>
  );
}

export default Dropdown;
