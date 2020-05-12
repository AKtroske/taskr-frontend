import React , { useState } from 'react';
import {
  Link, useHistory
} from 'react-router-dom';

import useForm from '../../hooks/useForm';
import signupValidate from './signupValidate';
import submitData from './services';


import {
  Input,
  Text,
  FormLabel,
  ErrorLabel,
  Col,
  Header,
  Row
} from '../../components/general/general';

import {
  SignupBGWrapper,
  SignupContainer,
  SignupFormContainer,
  ActionHeader
} from './styles';

import {
  RedirectButton,
  ActionButton
} from '../../components/general/button';

const Signup = () => {

  const [submitErrors, setSubmitErrors] = useState({})
  let history = useHistory();

  const{
    errors,
    values,
    handleChange,
    handleSubmit
  } = useForm(signup, signupValidate)

  async function signup(){
    const user = {
      user_name: values.user_name,
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
    }
    const status = await submitData(user, 'users/signup', setSubmitErrors)
    console.log(status);
    if (status){
      history.push('/login')
    }
  }

  return (
    <SignupBGWrapper>
      <SignupContainer>
        <SignupFormContainer onSubmit={handleSubmit} noValidate>
          <Header fontweight={"700"} fontsize={'24px'} alignself={'center'} color={props => props.theme.colors.text}>Join the Community</Header>
          {(submitErrors.other) && <ErrorLabel>{submitErrors.other}</ErrorLabel>}
          <Col my={'5px'}>
            <FormLabel htmlFor='user_name'>Username (Display name):</FormLabel>
            <Input
              type="text"
              name="user_name"
              placeholder="username"
              w={'100%'}
              px={'5px'}
              value={values.user_name || ''}
              onChange={handleChange}
            />
            {(errors.user_name || submitErrors.user_name) && <ErrorLabel>{errors.user_name || submitErrors.user_name}</ErrorLabel>}
          </Col>
          <Col my={'5px'}>
            <FormLabel htmlFor='first_name'>First name:</FormLabel>
            <Input
              type="text"
              name="first_name"
              placeholder="First name"
              w={'100%'}
              px={'5px'}
              value={values.first_name || ''}
              onChange={handleChange}
            />
            {(errors.first_name) && <ErrorLabel>{errors.first_name}</ErrorLabel>}
          </Col>
          <Col my={'5px'}>
            <FormLabel htmlFor='last_name'>Last name:</FormLabel>
            <Input
              type="text"
              name="last_name"
              placeholder="Last name"
              w={'100%'}
              px={'5px'}
              value={values.last_name || ''}
              onChange={handleChange}
            />
            {(errors.last_name) && <ErrorLabel>{errors.last_name}</ErrorLabel>}
          </Col>
          <Col my={'5px'}>
            <FormLabel htmlFor='email'>Email:</FormLabel>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              w={'100%'}
              px={'5px'}
              value={values.email || ''}
              onChange={handleChange}
            />
            {(errors.email || submitErrors.email) && <ErrorLabel>{errors.email || submitErrors.email}</ErrorLabel>}
          </Col>
          <Col my={'5px'}>
            <FormLabel htmlFor='password'>Password:</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="****..."
              w={'100%'}
              px={'5px'}
              value={values.password || ''}
              onChange={handleChange}
            />
            {(errors.password || submitErrors.password) && <ErrorLabel>{errors.password || submitErrors.password}</ErrorLabel>}
          </Col>
          <Col my={'5px'}>
            <FormLabel htmlFor='cpassword'>Confirm Password:</FormLabel>
            <Input
              type="password"
              name="cpassword"
              placeholder="****"
              w={'100%'}
              px={'5px'}
              value={values.cpassword || ''}
              onChange={handleChange}
            />
            {(errors.cpassword) && <ErrorLabel>{errors.cpassword}</ErrorLabel>}
          </Col>
          <Row><ActionButton w={'100%'} my={'10px'} h={'40px'} bgcolor={props => props.theme.colors.secBold} type='submit'>Sign up</ActionButton>
          </Row>
          <Row jc={'center'}><Text>If you already have an account then</Text></Row>
          <Row><RedirectButton name='login' w={'100%'} my={'10px'} h={'40px'}>Log In</RedirectButton></Row>
          <Row jc={'center'} fontsize={'10px'}><Text>Or <Link to='/dash'>continue</Link> logged out</Text></Row>
        </SignupFormContainer>
      </SignupContainer>
      <ActionHeader></ActionHeader>
    </SignupBGWrapper>
  );
}

export default Signup;
