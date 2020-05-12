import React, { useEffect } from 'react';
import axios from 'axios';

import authHeader from './authHeader';

const BASE_URL = 'http://localhost:8000/api/';

export const login = (user) => {

  axios.post(BASE_URL + 'login', user)
    .then(res => {
      console.log(res.data);
      if (res.data.success) {
        if (res.data.accessToken) {
         localStorage.setItem("token", JSON.stringify(res.data.accessToken))
         return res.data
       }
      }
      else {
        console.log(res.data)
        return res.data
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export const checkToken = () => {
  if (localStorage.getItem("token")){
    return true;
  }
  return false;
}

// must remove token from backend
export const logout = async () =>  {
  const res = await axios.get(BASE_URL + 'users/account', { headers:authHeader() })
  if (res.data.success){
    localStorage.removeItem("token")
    return true;
  }
  return false;
}
