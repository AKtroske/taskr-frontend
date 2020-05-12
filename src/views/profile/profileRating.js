import React from 'react';
import styled from 'styled-components';

import {
  Col,
  Row,
  Header,
} from '../../components/general/general';

const ProfileRating = () => {

  return(
    <ProfileRatingContainer flex={'1'}>
      <Col px={'20px'} py={'10px'}>
        <Header flex={'1'} px={'10px'} py={'10px'}>Rating:</Header>
        <Row><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></Row>
      </Col>
    </ProfileRatingContainer>
  )
}

export default ProfileRating;

const ProfileRatingContainer = styled(Col)`
  align-items: left;
  height: auto;
  width:100%;
  background-color: ${props => props.theme.colors.card};
  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxshadow};
  border-radius: ${props => props.theme.borderradius};
  margin-bottom: ${props => props.theme.spacing.feed};
`;
