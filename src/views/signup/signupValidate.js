export default function signupValidate(values){
  let errors = {};
  if(!values.user_name) {
    errors.user_name = 'Username is required';
  } else if (!/^[a-zA-Z0-9]+$/.test(values.user_name)){
    errors.user_name = 'Invalid characters';
  } else if (values.user_name.length > 25){
    errors.user_name = 'Username must be less than 25 characters';
  }

  if(!values.first_name) {
    errors.first_name = 'First name is required';
  } else if (!/^[a-zA-Z]+$/.test(values.first_name)){
    errors.first_name = 'Name may only contain letters';
  } else if (values.first_name.length > 40){
    errors.first_name = 'Name must be less than 40 characters';
  }

  if(!values.last_name) {
    errors.last_name = 'Last name is required';
  } else if (!/^[a-zA-Z]+$/.test(values.last_name)){
    errors.last_name = 'Name may only contain letters';
  }else if (values.last_name.length > 40){
    errors.last_name = 'Name must be less than 40 characters';
  }

  if(!values.email) {
    errors.email = 'Email address is required';
  } else if (!/^[-a-z0-9~!$%^&*_=+}{?]+(\.[-a-z0-9~!$%^&*_=+}{?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if(!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 4){
    errors.password = 'Password must be 4 or more characters';
  } else if (values.password.length > 18){
    errors.password = 'Password must be less than 18 characters';
  }
  if(!values.cpassword) {
    errors.cpassword = 'Password is required';
  } else if (values.password !== values.cpassword){
    errors.cpassword = 'Passwords do not match'
  }

  return errors;
}
