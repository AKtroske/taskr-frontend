import React, { useContext, useState } from 'react';
import {
  Link, useHistory
} from 'react-router-dom';

import useForm from '../../hooks/useForm';
import loginValidate from './loginValidation';
import submitData from './services';

import {
  Input,
  Text,
  Button,
  FormLabel,
  ErrorLabel,
  Col,
  Row
} from '../../components/general/general';

import {
  RedirectButton,
  ActionButton
} from '../../components/general/button';

import {
  LoginBGWrapper,
  LoginContainer,
  LoginFormContainer,
  ActionHeader
} from './styles';


import { UserContext } from '../../context/userContext';

const Login = () => {

  let { setLoggedIn } = useContext(UserContext);
  const [submitErrors, setSubmitErrors] = useState({})
  let history = useHistory();

  const{
    errors,
    values,
    handleChange,
    handleSubmit
  } = useForm(login, loginValidate)

  async function login (){
    const user = {
      email: values.email,
      password: values.password
    }
    const status = await submitData(user, 'users/login', setSubmitErrors);
    if(status){
      history.push('/dash');
    }
  }

  return (
    <LoginBGWrapper>
      <LoginContainer>
        <LoginFormContainer onSubmit={handleSubmit} noValidate>
          {(submitErrors.other) && <ErrorLabel>{submitErrors.other}</ErrorLabel>}
          <Col my={'10px'}>
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
          <Col my={'10px'}>
            <FormLabel htmlFor='password'>Password:</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              w={'100%'}
              px={'5px'}
              value={values.password || ''}
              onChange={handleChange}
            />
            {(errors.password || submitErrors.password) && <ErrorLabel>{errors.password || submitErrors.password}</ErrorLabel>}
          </Col>
          <Row><ActionButton w={'100%'} my={'10px'} h={'40px'} bgcolor={props => props.theme.colors.secBold} type='submit'>Log in</ActionButton>
          </Row>
          <Row jc={'center'}><Text>Or</Text></Row>
          <Row><RedirectButton name='signup' w={'100%'} my={'10px'} h={'40px'}>Sign up</RedirectButton></Row>
          <Row jc={'center'} fontsize={'10px'}><Text>Or <Link to='/dash'>continue</Link> logged out</Text></Row>
        </LoginFormContainer>
      </LoginContainer>
      <ActionHeader>Ask your tasks!</ActionHeader>
    </LoginBGWrapper>
  );
}

export default Login;
