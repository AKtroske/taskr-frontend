import styled from 'styled-components';

import { Header } from '../../components/general/general';

export const SignupBGWrapper = styled.div`
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

export const SignupContainer = styled.div`
  background: white;
  box-shadow: 0 6px 6px;
  display:flex;
  flex-flow:column;
  width:300px;
  max-width:400px;
  min-width:300px;
  height: auto;
  min-height:790px;
  margin: 5% auto;

  @media only screen and (min-width: 800px){
    min-width: 400px;
    position: absolute;
    left: 50%;
    margin-left: -200px;
  }
`;

export const SignupFormContainer = styled.form`
  flex:1;
  display:flex;
  flex-flow:column;
  justify-content: center;
  height:auto;
  margin: 30px 20px;
`;

export const ActionHeader = styled(Header)`
  color: ${props => props.theme.colors.text};
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
