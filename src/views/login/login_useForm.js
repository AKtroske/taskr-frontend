import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/userContext'

const BASE_URL = 'http://localhost:8000/api/';

const useForm = (login, loginValidate) => {

  //const { setUserData } = useContext(UserContext);

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submiterrors, setSubmit] = useState({email: '', password: ''})
  //Context

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const user = {
        email: values.email,
        password: values.password
      }
      postData(user, 'users/login');
    }
  }, [errors]);
 // call callback if login is successful
  const postData = async (user, url) => {
    try {
      const res = await axios.post(BASE_URL + url, user)
      if (res.data.success && res.data.accessToken) {
        localStorage.setItem("token", JSON.stringify(res.data.accessToken))
        login();
      }
      else {
        submitHandler(res.data.message)
      }
    }
    catch (error){
      console.log(error)
    }
  }

  const submitHandler = (status) => {
    if (status === 'Email'){
      setSubmit({email: 'Email is not in system'});
    }
    //Password incorrect
    else if (status === 'Password'){
      setSubmit({password: 'Incorrect Password'});
    }
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(loginValidate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    submiterrors,
    values,
    errors
  }
};

export default useForm;
