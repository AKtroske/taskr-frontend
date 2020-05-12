import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';

const submitData = async (user, url, setSubmitErrors) => {

  try {
    const res = await axios.post(BASE_URL + url, user)
    if (res.data.success){
      return true
    }
    else {
      if (res.data.message === 'Email'){
        setSubmitErrors({email:'Email is in system'});
      }
      else if (res.data.message === 'Username'){
        setSubmitErrors({user_name:'Username already exists'});
      }
    }
  }
  catch (error){
    setSubmitErrors({other:'Server Error'});
  }
};

export default submitData;
