import styled from 'styled-components';

import {
  Input
} from '../general/general';

import {
  Menu,
  KeyboardArrowDown,
  Add
} from '@styled-icons/material-rounded';

export const NavBGWrapper = styled.div`
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  background-color: ${props => props.theme.colors.primary};
  width: 100%;

  @media only screen and (min-width: 800px){

    flex:none;
    background-color: ${props => props.theme.colors.primary};
    display:flex;
    justify-content:center;
  }

`;

export const NavbarWrapper = styled.div`
  margin: 0 24px;
  height:50px;
  display: flex;
  align-items: center;
  justify-content:space-evenly;

  /*tablets*/
  @media only screen and (min-width: 800px) {
    height:50px;
    justify-content:flex-start;
    max-width: ${props => props.theme.pageWidth};
    flex:1;
  }
`;

export const NavbarItem = styled.a`
  display:none;
  font-size: ${props => props.theme.fontsize.default};
  color: ${props => (props.lastnav) ? '#FCAD02' : 'white'};
  opacity: ${props => (props.lastnav) ? '1' : props.theme.colors.opacity};
  transition-timing-function: ease-in;
  transition: 0.4s;

  &:hover {
    color: ${props => (props.lastnav) ? '#FCAD02' : 'white'};
    text-shadow:0 0 0.4px;
    opacity:1;
    cursor: pointer;
  }

  @media only screen and (min-width: 800px){
    display:block;
    margin-left: ${props => props.leftnav};
    padding: 0 15px;
    padding-left: ${props => props.firstnav};
    padding-right: ${props => props.lastnav};
  }
`;

export const ToolBGWrapper = styled.div`
  position: fixed; /* Set the navbar to fixed position */
  top: 50px; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  background-color:white;
  box-shadow: ${"0 3px 3px -3px"};

  @media only screen and (min-width: 800px){

    flex:none;
    display:flex;
    justify-content:center;
    box-shadow: ${"0 3px 3px -3px"};
  }
`;

export const ToolbarWrapper = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  background-color: white;
  justify-content:space-evenly;
  height: 40px;
  z-index:5;
  margin: 0 24px;

  @media only screen and (min-width: 800px){
    justify-content:flex-start;
    max-width: ${props => props.theme.pageWidth};;
  }
`;

export const ToolbarItem = styled.a`
  font-size: 1em;
  font-weight:500;
  color: ${props => props.theme.colors.secondary};
  padding: 0.25em 1em;
  display:flex;
  transition-timing-function: ease-in;
  transition: 0.4s;

  &:hover {
    color: ${props => props.theme.colors.secBold};
    cursor: pointer;
  }
  @media only screen and (min-width: 800px){
    padding-left: ${props => props.firstnav};
  }
`;

export const ToolbarAdd = styled.div`
  font-size: 1em;
  font-weight:500;
  color: ${props => props.theme.colors.secondary};
  padding: 0.25em 1em;
  padding-left: ${props => props.firstnav};
  display:flex;
  align-items:center;

  &:hover {
    color:  ${props => props.theme.colors.secBold};
    cursor: pointer;
  }
  @media only screen and (min-width: 800px){

  }
`;

export const AddIcon = styled(Add)`
  color: ${props => props.theme.colors.secondary};
  title: "Add Slide Icon";
  padding: 0 5px;
  &:hover {
    color:  ${props => props.theme.colors.secBold};
    cursor: pointer;
  }
`;

export const Search = styled(Input)`
  border: none;
  background: ${props => props.theme.colors.background};
  width:80%;
  margin-left:none;
  max-width: 150px;
  &:focus{
    background: white;
    border:none;
  }
  @media only screen and (min-width: 800px){
  }
`;

export const SearchForm = styled.form`
  flex: 1;
  min-width: 30%;
  display: flex;
  align-items:center;
`;

//Icon
export const MenuStyle = styled(Menu)`
  color: ${props => props.theme.colors.secondary};
  title: "Menu Icon";
  display: block;

  &:hover{
    cursor: pointer;
  }
   /*web*/
  @media only screen and (min-width: 800px){
    display:none;
  }
`;

export const ArrowDown = styled(KeyboardArrowDown)`
  color: ${props => props.theme.colors.secondary};
  title: "Menu Icon";
  display: block;
  padding: 0 5px;
  transition-timing-function: ease-in;
  transition: 0.4s;

  &:hover{
    color: ${props => props.theme.colors.secBold};
    cursor: pointer;
  }

  /*web*/
 @media only screen and (min-width: 800px){
   display:none;
 }
`;

export const MobileBarWrapper = styled.div`
  /*phones*/
  width: 40%;
  position:fixed;
  top:0;
  height: 100vh;
  right: ${props => props.right || '-40%'};
  transition-timing-function: ease-in;
  transition: 0.2s;
  display: ${props => props.Display || 'flex'};
  background: white;
  z-index:10;
  justify-content:start;
  @media only screen and (min-width: 800px){
   display: none;
  }
`;


export const MobileBarItem = styled(NavbarItem)`
  text-align:center;
  display:block;
  padding: 5px;
  width:100%;
  color: ${props => props.theme.colors.secBold};
  opacity: 1;
  transition-timing-function: ease-in;
  transition: 0.4s;

  &:hover {
    background: ${props => props.theme.colors.secBold};
    color:white;
    opacity:1;
    cursor: pointer;
  }
`;

export const MobileHeader = styled.div`
  background: ${props => props.theme.colors.primary};
  display:flex;
  align-items:center;
  justify-content:flex-end;
`;

export const MobSidebar = styled.div`
  background: white;
  display: ${props => props.Display || 'none'};
  width: 60%;
  flex-flow:column;
  box-shadow: ${"0 3px 3px -3px"};
  position:fixed;
  left: 10vw;
  top:95px;
  z-index:2;
  border: 0.4px ${props => props.theme.colors.secondary} solid;
  @media only screen and (min-width: 800px) {
    display:none;
  }
`;
