export default function loginValidate(values){
  let errors = {};
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
  return errors;
}
