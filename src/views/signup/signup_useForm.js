import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';


const useForm = (signupSuccess, signupValidate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submiterrors, setSubmit] = useState({email: '', password: ''})

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const user = {
        user_name: values.user_name,
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
      }
      postData(user, 'users/signup')
    }
  }, [errors]);

  const postData = async (user, url) => {
    try {
      const res = await axios.post(BASE_URL + url, user)
      if (res.data.success) {
         signupSuccess();
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
    setErrors(signupValidate(values));
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
