import styled from 'styled-components';
import { Close } from '@styled-icons/material-rounded/Close';

export const Header = styled.h1`
  color: ${props => props.color ||  props.theme.colors.secBold};
  font-size: ${props => props.fontsize ||"1em"};
  font-weight: ${props => props.fontweight || '500'};
  margin-right: ${props => props.mx || props.theme.flex.marginx};
  margin-left: ${props => props.mx || props.theme.flex.marginx};
  margin-top: ${props => props.my || props.theme.flex.marginy};
  margin-bottom: ${props => props.my || props.theme.flex.marginy};
  width: ${props => props.w || 'auto'};
  height: ${props => props.h ||'auto'};
  align-self: ${props => props.alignself};
  opacity: ${props => props.opacity || '1'};
  flex: ${props => props.flex || '0 1 auto'};
`;

export const Text = styled.p`
  color: ${props => props.color || props.theme.colors.text};
  font-size: ${props => props.fontsize || props.theme.fontsize.mobile};
  font-weight: ${props => props.fontweight || ''};
  text-align: ${props => props.textalign || 'center'};
  opacity: ${props => props.opacity || '1'};
  margin-right: ${props => props.mx || props.theme.flex.marginx};
  margin-left: ${props => props.mx || props.theme.flex.marginx};
  margin-top: ${props => props.my || props.theme.flex.marginy};
  margin-bottom: ${props => props.my || props.theme.flex.marginy};
  flex: ${props => props.flex || '0 1 auto'};

  &:hover{
    cursor: ${props => props.cursor || 'default'}
  }

  @media only screen and (min-width: 800px){
    font-size: ${props => props.fontsize ||  props.theme.fontsize.default}
  }
`;

export const Button = styled.button`
  display: ${props => props.display || 'inline-block'};
  background: ${props => props.bgcolor || props.theme.button.color};
  width: ${props => props.w || props.theme.button.width};
  height: ${props => props.h || props.theme.button.height};
  border-radius: 5px;
  color: ${props => props.color || 'white'};
  font-size: ${props => props.fontsize ||'1.1em2'};
  font-weight: 500;
  margin-right: ${props => props.mx || props.theme.flex.marginx};
  margin-left: ${props => props.mx || props.theme.flex.marginx};
  margin-top: ${props => props.my || props.theme.flex.marginy};
  margin-bottom: ${props => props.my || props.theme.flex.marginy};
`;

export const Input = styled.input`
  flex: ${props => props.display};
  font-size:  ${props => props.fontsize || props.theme.form.default};
  border-bottom: 1.5px solid lightgrey;
  border-radius: ${props => props.radius || "0"};
  padding-right: ${props => props.px || props.theme.form.paddingx};
  padding-left: ${props => props.px || props.theme.form.paddingx};
  padding-top: ${props => props.py || props.theme.form.paddingy};
  padding-bottom: ${props => props.py || props.theme.form.paddingy};
  width: ${props => props.w || props.theme.form.width};
  height: ${props => props.h || props.theme.form.height};
  margin-right: ${props => props.mx || props.theme.flex.marginx};
  margin-left: ${props => props.mx || props.theme.flex.marginx};
  margin-top: ${props => props.my || props.theme.flex.marginy};
  margin-bottom: ${props => props.my || props.theme.flex.marginy};
  &:focus{
    border-bottom: 1.5px solid ${props => props.theme.form.color};
  }
  @media only screen and (min-width: 800px) {
    flex: ${props => props.flex}
  }
`;

export const Row = styled.div`
  flex: ${props => props.flex || '1'};
  display: ${props => props.display || "flex"};
  flex-flow: ${props => props.flexflow || "row"};
  margin-right: ${props => props.mx || props.theme.flex.marginx};
  margin-left: ${props => props.mx || props.theme.flex.marginx};
  margin-top: ${props => props.my || props.theme.flex.marginy};
  margin-bottom: ${props => props.my || props.theme.flex.marginy};
  padding-right: ${props => props.px};
  padding-left: ${props => props.px};
  padding-top: ${props => props.py};
  padding-bottom: ${props => props.py};
  height: ${props => props.height};
  justify-content: ${props => props.jc || 'start'};
  align-items: ${props => props.alignitems};
  border: ${props => props.border};
  border-bottom: ${props => props.borderbottom};
  @media only screen and (min-width: 800px) {
    flex: ${props => props.flex || '0 1 auto'}
  }
`;

export const Col = styled.div`
  flex: ${props => props.flex || '1'};
  display: ${props => props.display || "flex"};
  flex-flow: ${props => props.flexflow || "column"};
  margin-right: ${props => props.mx || props.theme.flex.marginx};
  margin-left: ${props => props.mx || props.theme.flex.marginx};
  margin-top: ${props => props.my || props.theme.flex.marginy};
  margin-bottom: ${props => props.my || props.theme.flex.marginy};
  padding-right: ${props => props.px};
  padding-left: ${props => props.px};
  padding-top: ${props => props.py};
  padding-bottom: ${props => props.py};
  justify-content: ${props => props.jc || 'start'};
  border: ${props => props.border};
  border-bottom: ${props => props.borderbottom};
  @media only screen and (min-width: 800px) {
    flex: ${props => props.flex || '0 1 auto'};
    width: ${props => props.w};
    height: ${props => props.h};
  }
`;

export const TextArea = styled.textarea`
  flex: ${props => props.flex || '0 1 auto'};
  font-size:  ${props => props.fontsize || props.theme.fontsize.default};
  border-radius: ${props => props.radius || props.theme.form.borderRadius};
  border-bottom: 1.5px solid lightgrey;
  padding-right: ${props => props.px || props.theme.form.paddingx};
  padding-left: ${props => props.px || props.theme.form.paddingx};
  padding-top: ${props => props.py || props.theme.form.paddingy};
  padding-bottom: ${props => props.py || props.theme.form.paddingy};
  width: ${props => props.w || props.theme.form.width};
  height: ${props => props.h || props.theme.form.height};
  margin-right: ${props => props.mx || props.theme.flex.marginx};
  margin-left: ${props => props.mx || props.theme.flex.marginx};
  margin-top: ${props => props.my || props.theme.flex.marginy};
  margin-bottom: ${props => props.my || props.theme.flex.marginy};
  &:focus{
    border-bottom: 1.5px solid ${props => props.theme.form.color};
  }
  @media only screen and (min-width: 800px) {
    width: ${props => props.w || props.theme.form.width};
    height: ${props => props.h || props.theme.form.height};
  }
`;

export const Select = styled.select`
  background: ${props => props.bg || "white"};
  font-size:  ${props => props.fontsize || props.theme.fontsize.default};
  border-bottom: 1.5px solid lightgrey;
  border-radius: ${props => props.radius || props.theme.form.borderRadius};
  padding-right: ${props => props.px || props.theme.form.paddingx};
  padding-left: ${props => props.px || props.theme.form.paddingx};
  padding-top: ${props => props.py || props.theme.form.paddingy};
  padding-bottom: ${props => props.py || props.theme.form.paddingy};
  width: ${props => props.w || props.theme.form.width};
  height: ${props => props.h || props.theme.form.height};
  margin-right: ${props => props.mx || props.theme.flex.marginx};
  margin-left: ${props => props.mx || props.theme.flex.marginx};
  margin-top: ${props => props.my || props.theme.flex.marginy};
  margin-bottom: ${props => props.my || props.theme.flex.marginy};
  &:focus{
    border-bottom: 1.5px solid ${props => props.theme.form.color};
  }
`;

export const Exit = styled(Close)`
  color: ${props => props.color || 'white'};
  title: "Close window";
  &:hover{
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  flex: ${props => props.flex || '0'};
  margin-right: ${props => props.mx || props.theme.flex.marginx};
  margin-left: ${props => props.mx || props.theme.flex.marginx};
  margin-top: ${props => props.my || props.theme.flex.marginy};
  margin-bottom: ${props => props.my || props.theme.flex.marginy};
  display: inline-block;
  align-items: center;
  border-radius: 50%;
  padding: 2px;
  height: auto;
  &: hover {
    cursor: pointer;
    background: ${props => props.bgcolor || props.theme.colors.secondary};
    opacity: 0.7;
  }
`;

export const FormLabel = styled.label`
  font-weight:bold;
  margin-right: ${props => props.mr || props.theme.flex.marginx};
  margin-left: ${props => props.ml || props.theme.flex.marginx};
  margin-top: ${props => props.mt || props.theme.flex.marginy};
  margin-bottom: ${props => props.mb || props.theme.flex.marginy};
`;

export const ErrorLabel = styled.label`
  flex:1;
  color:red;
`;
