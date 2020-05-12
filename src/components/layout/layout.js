import React, { useState, useContext } from 'react';
import {
  Link, useHistory
} from 'react-router-dom';
import styled from 'styled-components';

import useModal from '../../hooks/useModal';
import  { logout } from '../../services/withAuth';

import {
  ToolBGWrapper,
  ToolbarWrapper,
  ToolbarItem,
  ToolbarAdd,
  AddIcon,
  ArrowDown,
  MobSidebar
} from './styles.js';

import {
  Row,
  Text,
  Header,
  Col
} from '../general/general';

import {
  RedirectButton
} from '../general/button';

import { SidebarItem } from '../sidebar/styles';

import MobileNavbar from './mobileNavbar';
import Modal from '../modal/modal';
import TaskModal from '../taskModal/taskModal';
import Navbar from './navbar';
import Dropdown from '../dropdown/dropdown';

import { UserContext } from '../../context/userContext';

import { DropdownHeader, DropdownItem } from '../dropdown/styles';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height:100vh;
`;

const Layout = (props) => {

  const { children } = props;

  let { userInfo } = useContext(UserContext);
  let history = useHistory();

  const { view, toggle } = useModal();

  //terrible way to this but wanted to only maintain context in layout
  let accountData = {userInfo: {username:userInfo.username, wallet:userInfo.wallet}, items:[{header: 'Account'}, 'Profile', 'Messages', 'Helpers', {header:'Tasks'}, 'Published', 'History', 'Settings']}
  let accountDataDefault = {userInfo:null, items:[]}

  // const [modal, setModal] = useState(false);
  const [mobNav, setMobNav] = useState(false);
  const [mobSide, setMobSide] = useState(false); //manages viewing of sidebar
  const [accDropdown, setAccDropdown] = useState(false);

  const toggleNav = () => {
    setMobNav(!mobNav);
    if (accDropdown){
      setAccDropdown(false)
    }
  }

  const toggleAcc = () => {
    setAccDropdown(!accDropdown);
  }

  const handleClick = () => {
    // if (modal){
    //   setModal(false);
    // }
    if (mobNav){
      setMobNav(false);
      if (accDropdown){
        setAccDropdown(false)
      }
    } else if (accDropdown){
      setAccDropdown(false);
    } else {
      setMobSide(!mobSide);
    }
  }

  const handleLogout = () => {
    if (logout()){
      history.push('/login');
      console.log('logged out')
    }
  }

  return (
    <Wrapper>
      <Navbar toggleNav={toggleNav} toggleAcc={toggleAcc}/>
      <ToolBGWrapper>
          <ToolbarWrapper>
            <ArrowDown size='40' onClick={handleClick}/>
            <ToolbarItem firstnav='0'>tasks</ToolbarItem>
            <ToolbarAdd onClick={toggle}>new<AddIcon size='40'/></ToolbarAdd>
          </ToolbarWrapper>
      </ToolBGWrapper>
      <MobileNavbar view={mobNav} toggleNav={toggleNav} toggleAcc={toggleAcc}/>
      <MobSidebar Display={(mobSide) ? "flex" : "none"} >
        <SidebarItem>My Boards</SidebarItem>
        <SidebarItem last={'none'}>Group Boards</SidebarItem>
      </MobSidebar>
      <Modal view={view} close={toggle}><TaskModal close={toggle} action={'Create'}/></Modal>
      <Dropdown info={(userInfo.loggedIn) ? accountData : accountDataDefault} view={accDropdown}>
        {(userInfo.loggedIn) ?
            <DropdownItem onClick={handleLogout} color={props => props.theme.colors.secondary} fontweight='500' last>Log out</DropdownItem>
          : <Col flex={'1'} w={'100%'}>
              <Row jc='center'><Text fontsize='0.8em'> You are not logged in. </Text></Row>
              <Row my='5px'>
                <RedirectButton name='login'
                  w={'100%'}
                  h={'40px'}
                  fontsize={'1.1em'}
                  bgcolor={props => props.theme.colors.secBold}
                  >
                  Log in
                </RedirectButton>
              </Row>
              <Row my='5px'>
                <RedirectButton name='signup'
                  w={'100%'}
                  h={'40px'}
                  fontsize={'1.1em'}
                  >
                  Sign up
                </RedirectButton>
              </Row>
              {accountData.items.map((item,index) => (
                (index !== 0) ?
                  (typeof(item) === "object") ?
                    <Row my='5px'><DropdownHeader key={index} fontweight='500' opacity='0.5'>{item.header}</DropdownHeader></Row>
                  : <Row my='5px'><Text key={index} opacity='0.5'>{item}</Text></Row>
                : null
              ))}
            </Col>
      }
      </Dropdown>
      {children}
    </Wrapper>
  );
}

export default Layout;

// <Overlay display={(modal || mobNav || mobSide || accDropdown) ? "block" : "none"}
//   cover={(mobSide || (accDropdown && !mobNav)) ? "0" : "0.7"}
//   mtop={(mobSide || (accDropdown && !mobNav)) ? "50px" : "0"}
//   onClick={handleClick}
// />
