const taskValidate = (values) => {
  let errors = {};
  if(!values.header) {
    errors.header = 'Required';
  } else if (!/^[ \ta-zA-Z]+$/.test(values.header)){
    errors.header = 'Please enter only letters.';
  } else if (values.header.length > 50){
    errors.header = '50 character max';
  }
  if(!values.priority) {
    errors.priority = 'Required';
  }
  if(!values.cost) {
    errors.cost = 'Required';
  }

  //handle case if type == other (validate "other" text)
  if(!values.type){
    errors.type = 'Required';
  } else if(values.type ==='Other'){
    values.type = values.other; // Set then check
    if(!values.other) {
      errors.other = 'Required'
    } else if (!/^[ \ta-zA-Z]+$/.test(values.type)){
      errors.other = 'Please enter only letters.';
    } else if (values.type.length > 30){
      errors.other = '30 character max';
    }
  }

  if(!values.description) {
    errors.description = 'Required';
  } else if (!/^[ \t\na-zA-Z0-9]+$/.test(values.description)) {
    errors.description = 'Alphanumeric characters only';
  }
  if(!values.date){
    errors.date = 'Required';
  } else if (!isFutureDate(values.date)){
    errors.date = 'Invalid - Past';
  }

  return errors;
}

const isFutureDate = (date) => {
  return new Date(date).setHours(0,0,0,0) > new Date().setHours(0,0,0,0);
};


export default taskValidate;
