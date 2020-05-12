import React from 'react';

import {
  Col,
  Row,
  Header,
  Text,
  IconContainer
} from '../../components/general/general';

import {
  ProfileWrapper,
  ColoredHeader,
  EditContainer,
  TopSection,
  UsernameRow,
  InfoContainer
} from './styles';

import {
  EditIcon
} from '../../components/general/icons';

import {
  MoneyIcon
} from '../../components/dropdown/styles';

const ProfileInfo = (props) => {

  const { username, age, tasksPublished, tasksCompleted, wallet } = props;

  return (
    <ProfileWrapper>
      <ColoredHeader>
        <EditContainer>
          <IconContainer bg={props=>props.theme.colors.background}>
            <EditIcon size='45'/>
          </IconContainer>
        </EditContainer>
      </ColoredHeader>
      <InfoContainer>
        <TopSection borderbottom={props => props.theme.borderbottomheader}>
          <Header fontsize='2em'>{username}</Header>
          <Row><Text></Text><Text fontsize={'0.7em'} opacity={'0.6'}>{age}</Text></Row>
        </TopSection>
        <Row py={'10px'} borderbottom={props => props.theme.borderbottomheader}>
          <Col flex={'3 1 0'}>
            <Row height={'100%'}><Text>Tasks Published: {tasksPublished}</Text></Row>
            <Row height={'100%'}><Text>Tasks Completed: {tasksCompleted}</Text></Row>
          </Col>
          <Col flex={'1 1 0'} jc={'center'}>
            <Row jc={'center'} >
              <Header fontsize='2em' color={props=>props.theme.colors.text}>{wallet}</Header>
            </Row>
          </Col>
        </Row>
        <Col my={'10px'}>
          <Header>About:</Header>
          <Text textalign={'left'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio morbi. Tincidunt ornare massa eget egestas purus. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Nibh tortor id aliquet lectus proin nibh.
          </Text>
        </Col>
      </InfoContainer>
    </ProfileWrapper>
  );
}

export default ProfileInfo;

// <Col flex={'3 1 0'}>
//   <UsernameRow py={'10px'}>
//     <Header fontsize='2em'>{username}</Header>
//     <Text fontsize={'0.7em'} opacity={'0.6'}>{age}</Text>
//   </UsernameRow>
//   <Row height={'100%'} py={'10px'}><Text>Tasks Published: {tasksPublished}</Text></Row>
//   <Row height={'100%'} py={'10px'}><Text>Tasks Completed: {tasksCompleted}</Text></Row>
//   <Row my={'10px'} jc={'center'}>
//     <Header fontsize='2em' color={props=>props.theme.colors.text}>{wallet}</Header>
//   </Row>
//   <Row jc={'center'}>Logo</Row>
// </Col>
// <Col flex={'1 1 0'} jc={'center'}>
//   <Row my={'10px'} jc={'center'}>
//     <Header fontsize='2em' color={props=>props.theme.colors.text}>{wallet}</Header>
//   </Row>
//   <Row jc={'center'}>Logo</Row>
// </Col>
