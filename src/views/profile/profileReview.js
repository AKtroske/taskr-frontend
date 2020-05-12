import React from 'react';
import styled from 'styled-components';

import {
  Col,
  Row,
  Header,
  Text,
} from '../../components/general/general';

import {
  ActionButton
} from '../../components/general/button';

const ProfileReview = () => {

  return (
    <Col my={'10px'} orderbottom={props => props.theme.borderbottomheader}>
      <Header flex={'1'}>Username</Header>
      <Header flex={'1'}>Rating</Header>
      <Text opacity={'0.7'} fontsize={'0.8em'} flex={'1'} textalign={'left'}>Verified exchange</Text>
      <Text flex={'1'} textalign={'left'} my={'10px'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi. </Text>
      <Row flex={'1'} jc={'space-between'}>
        <ActionButton h={'25px'} bgcolor={props => props.theme.colors.primBold}>Helpful</ActionButton>
        <ActionButton h={'25px'} bgcolor={'white'} color={'red'}>Report</ActionButton>
      </Row>
    </Col>
  )
}

export default ProfileReview;
