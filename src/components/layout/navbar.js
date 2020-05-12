import React, { useState, useEffect, useContext } from 'react';
import {
  Link
} from 'react-router-dom';
import axios from 'axios';

import authHeader from '../../services/authHeader';
import { checkToken } from '../../services/withAuth';

import {
  Header,
  Button
} from '../general/general';

import {
  NavBGWrapper,
  NavbarWrapper,
  NavbarItem,
  Search,
  SearchForm,
  MenuStyle,
} from './styles.js';

import { UserContext } from '../../context/userContext';

const BASE_URL = 'http://localhost:8000/api/';

const Navbar = props => {

  const { toggleNav, toggleAcc } = props;

  let  { setUserInfo } = useContext(UserContext);
  const [values, setValues] = useState({});

  useEffect(() => {
   const verifyLoggedIn = async (url) => {
    if (checkToken) {
       const res = await axios.get(BASE_URL + url, { headers:authHeader() })
       console.log(res)
       setUserInfo({loggedIn:res.data.success,username:res.data.username,wallet:res.data.wallet});
    } else {
      setUserInfo({loggedIn:false});
    }
   };
   verifyLoggedIn('users/account/basic');
 }, []);

  const handleChange = (event) =>{
    event.persist();
    setValues({[event.target.name]:event.target.value})
  }

  return (
    <NavBGWrapper>
      <NavbarWrapper>
        <NavbarItem firstnav='0' href="/dash">dash</NavbarItem>
        <NavbarItem>public</NavbarItem>
        <SearchForm>
          <Search
            placeholder="search..."
            mx={'10px'}
            h={'25px'}
            value={values.search|| ''}
            name='search'
            onChange={handleChange}
          />
          <Button h={'25px'} w={'5em'}>Search</Button>
        </SearchForm>
        <Header color={"white"} fontweight={'500'} mx={'15px'}>Logo</Header>
        <NavbarItem onClick={toggleAcc}>account</NavbarItem>
        <NavbarItem lastnav='0'>premium</NavbarItem>
        <MenuStyle size="40" onClick={toggleNav}/>
      </NavbarWrapper>
    </NavBGWrapper>
  );
};

export default Navbar;
