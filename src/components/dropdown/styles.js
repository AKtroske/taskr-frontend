import styled from 'styled-components';
import { Header } from '../general/general';
import {
  Link
} from 'react-router-dom';

import { LocalAtm } from '@styled-icons/material-rounded/LocalAtm';

import {
  Col,
  Row
} from '../general/general';

export const DropdownContainer = styled.div`
  display: ${props => props.display || 'flex'};
  flex-flow: column;
  align-items:center;
  position: fixed;
  top: 55px;
  right:41%;
  background: white;
  padding:10px;
  z-index: 20;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderradius};
  box-shadow: ${props => props.theme.boxshadow};
  width:40%;
  transition-timing-function: ease-in-out;
  transition: 0.2s;
  min-width:240px;
  max-width:300px;

  @media only screen and (min-width: 800px){
    display: ${props => props.display || 'none'};
    max-width:300px;
    right: calc(15px + 24px + 79.8px);
  }

  @media only screen and (min-width:1160px){
    right: calc((100% - 1160px)/2 + 79.8px + 15px)
  }
`;

export const DropdownCol = styled(Col)`
  width:100%;
  border: 5px solid rgba(16,2,133,1.0);
  border-radius: ${props => props.borderradius};
  margin-bottom:10px;
  padding:10px 0;
`;

export const DropdownRow = styled(Row)`
  flex: none;
  width:150px;
  align-self:center;
  border-bottom: 1px solid rgba(16,2,133,1.0);
  margin-bottom:5px;
  justify-content:space-between;
`;

export const DropdownHeader = styled(Header)`
  border-top: ${props => props.theme.borderbottomheader};
  border-bottom: ${props => props.theme.borderbottomheader};
  width: 100%;
  padding: 5px;

  @media only screen and (min-width: 800px){
    padding: 10px 5px;
  }
`;

export const DropdownItem = styled.a`
  flex:1;
  width:100%;
  background: white;
  color: ${props => props.color || props.theme.colors.text};
  font-size: ${props => props.fontsize || props.theme.fontsize.default};
  font-weight: 400;
  padding: 5px;
  font-weight: ${props => props.fontweight || ''};
  border-top: ${props => props.last && props.theme.borderbottomheader};

  &: hover{
    background: ${props => props.theme.colors.background};
    cursor: pointer;
  }
  @media only screen and (min-width: 800px){
  }
`;


export const MoneyIcon = styled(LocalAtm)`
  color: ${props => props.color || props.theme.colors.primary};
  title: "Money icon";
  padding:0;
  margin:0;
`;
