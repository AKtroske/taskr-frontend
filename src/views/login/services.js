import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';


const submitData = async (user, url, setSubmitErrors) => {

  try {
    const res = await axios.post(BASE_URL + url, user)
    if (res.data.success && res.data.accessToken) {
       localStorage.setItem("token", JSON.stringify(res.data.accessToken))
       return true
    }
    else {
      if (res.data.message === 'Email'){
        setSubmitErrors({email:'Email is not in system'});
      }
      else {
        setSubmitErrors({password:'Incorrect Password'});
      }
    }
  }
  catch (error){
    setSubmitErrors({other:'Server Error'});
  }
};

export default submitData;
