import styled from 'styled-components';

import { Button, Row, Col } from '../general/general';

export const ModalContainer = styled.div`
  max-height: 100%;
  width:100%;
  background: white;
  display: ${props => props.display || 'flex'};
  flex-flow: column;
  font-size:1em;
  transition-timing-function: ease-in;
  transition: 0.2s;
`;

export const ModalSlider = styled.div`
  overflow:auto;
  height:auto;
  width:auto;
`;

export const ModalHeader = styled.div`
  font-size:1em;
  height: ${props => props.Height || "45px"};
  background: ${props => props.bgcolor || props.theme.colors.secBold};
  display: flex;
  align-items:center;
  justify-content:space-between;
`;

export const FormContainer = styled.form`
  height:100%;
  font-size: 1em;
  display: flex;
  flex-flow: ${props => props.flex || "column"};
  margin: 0.5em 1em;

`;

export const FormRow = styled(Row)`
  flex:1;
  margin-bottom:15px;
`;

export const FormColOne = styled(Col)`
  flex:1;
  margin-right: 1em;
`;

export const FormButton = styled(Button)`
  align-self: center;
  margin-top: auto;
  margin-bottom:5px;
  background-color: ${props => props.bgcolor || props.theme.colors.secBold}
`;
