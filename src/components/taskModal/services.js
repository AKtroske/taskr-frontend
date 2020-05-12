import axios from 'axios';

import authHeader from '../../services/authHeader';

const BASE_URL = 'http://localhost:8000/api/';

export const postData = async (info, url) => {
  try{
    const res = await axios.post(BASE_URL + url, info, { headers: authHeader()});
    if(res.data.success){
      return {success:true};
    } else if (res.data.message === 'Unauthorized Access'){
      return {success:false, message:"Please Log In!"}
    } else{
      return {success:res.data.sucess, message:res.data.message};
    }
  }
  catch (err){
    console.log(err);
  }
}

export const updateData = async (info, url) => {
  try{
    const res = await axios.put(BASE_URL + url, info, { headers: authHeader()});
    if(res.data.success){
      return {success:true};
    } else if (res.data.message === 'Unauthorized Access'){
      return {success:false, message:"Please Log In!"}
    } else{
      return {success:res.data.sucess, message:res.data.message};
    }
  }
  catch (err){
    console.log(err);
  }
}
