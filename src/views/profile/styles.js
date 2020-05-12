import styled from 'styled-components';

import {
  Col,
  Row,
  Header,
  Text,
  IconContainer
} from '../../components/general/general';


//** PROFILE INFO STYLES **//

export const ProfileWrapper = styled(Col)`
  background-color: ${props => props.theme.colors.card};
  box-shadow: ${"0 2px 2px -2px"};
  width:100%;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderradius};
  margin-bottom: ${props => props.theme.spacing.feed};

  @media only screen and (min-width: 600px){
  }
`;

export const EditContainer = styled(Col)`
  text-align: end;
  display:block;
  padding:5px;

  @media only screen and (min-width: 600px){
  }
`;

export const TopSection = styled(Row)`
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin-top:40px;
  padding-bottom:10px;
  @media only screen and (min-width: 600px){
    flex-flow:row;
    justify-content: space-between;
  }
`;

export const ColoredHeader = styled.div`
  background-image: linear-gradient(rgba(49,158,111,0.7), rgba(16,2,133,0.7));
  height: 150px;
  display:flex;
  flex-flow:column;
  justify-content:flex-end;
  @media only screen and (min-width: 600px){
    height:200px;
  }
`;

export const InfoContainer = styled(Col)`
  padding: 10px 20px;
`;
