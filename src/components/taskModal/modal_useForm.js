import { useState, useEffect } from 'react';

const useForm = (submit, taskValidate) =>{

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit(values, setValues);
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(taskValidate(values));
    setIsSubmitting(true);
  }

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };


  return {
    errors,
    values,
    handleSubmit,
    handleChange,
  }

}

export default useForm;
