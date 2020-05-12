import React from 'react';
import {
  Link
} from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 2.5rem;

  @media only screen and (max-width: 800px){
    max-width: ${props => props.theme.pageWidth};
  }
`;

const FooterItem = styled.a`
  font-size: 0.5em;
  padding: 0 0.5rem;
  padding-left: ${props => props.firstnav};
  margin-right: ${props => props.lastnav};
  margin-left: ${props => (props.copyright) ? 'auto' : '0'};
  color: white;
  opacity: 0.6;

  &:hover {
    cursor: pointer;
    color: white;
    text-shadow: ${props => (props.copyright) ? '0' : '0 0 0.4px'};
    opacity: ${props => (props.copyright) ? '0.6' : '1'};
  }
`;



const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItem firstnav='0'>help</FooterItem>
      <FooterItem>about</FooterItem>
      <FooterItem>contact us</FooterItem>
      <FooterItem>news</FooterItem>
      <FooterItem lastnav='auto'>faq</FooterItem>
      <FooterItem copyright>Copyright 2020</FooterItem>
    </FooterWrapper>
  );
};

export default Footer;
