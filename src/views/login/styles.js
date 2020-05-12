import styled from 'styled-components';

import { Header } from '../../components/general/general';

export const LoginBGWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  width:100vw;
  height:50vh;
  display:flex;
  flex-flow:column;

  @media only screen and (min-width: 800px){
    height: 60vh;
    display:block;
  }
`;

export const LoginContainer = styled.div`
  background: white;
  box-shadow: 0 6px 6px;
  height: auto;
  min-height: 400px;
  position:static;
  display:flex;
  flex-flow:column;
  width:300px;
  max-width:400px;
  min-width:300px;
  margin-top: 20%;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 800px){
    margin:0;
    position:absolute;
    width: 300px;
    right:15%;
    top: 30%;
  }
`;

export const LoginFormContainer = styled.form`
  flex:1;
  display:flex;
  flex-flow:column;
  justify-content: center;
  margin: 30px 20px;
`;

export const ActionHeader = styled(Header)`
  color: ${props => props.theme.colors.secondary};
  font-size: 3em;
  font-weight: 500;
  flex:1;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 800px){
    font-size: 5em;
    display:none;
  }
`;
