import React, { useState, useEffect } from 'react';
import {
  useHistory
} from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../../components/layout/layout';

import Loader from 'react-loader-spinner'

import {
  Col,
  Row,
  Header,
  Text,
  IconContainer
} from '../../components/general/general';

import ProfileReview from './profileReview';
import ProfileInfo from './profileInfo';
import ProfileRating from './profileRating';
import ProfileSidebar from './profileSidebar';

import useFetch from '../../hooks/useFetch';

const MyProfile = () => {

  const { response, error } = useFetch('users/account');

  const [accData, setAccData] = useState({});
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  useEffect(() => {
    function responseHandler(){
      if (error) {
        console.log(error);
      } else if (response) {
        setLoading(false);
        if (response.success){
          response.data.date_created = response.data.date_created.slice(0,10).replace(/-/gi,'/')
          setAccData(response.data);
        } else {
          history.push('/dash')
        }
      }
    }
    responseHandler()
  }, [response, error]);

  if (loading){
    return(
      <Layout>
        <BGWrapper>
          <Loader
             type="Oval"
             color={"rgba(16,2,133,1.0)"}
             height={45}
             width={45}
             timeout={5000}
          />
        </BGWrapper>
      </Layout>
    )
  }
  else {
    return (
      <Layout>
        <BGWrapper>
          <Wrapper>
            <ProfileContainer>
              <ProfileInfo
                username={accData.user_name}
                firstname={accData.first_name}
                lastname={accData.last_name}
                age={accData.date_created}
                tasksPublished={accData.tasks_published}
                tasksCompleted={accData.tasks_completed}
                wallet={accData.wallet}
              />
              <ProfileRating/>
              <ProfileReviewContainer>
                <Header px={'10px'} py={'10px'} flex={'1'}>Reviews:</Header>
                <ProfileReview/>
                <ProfileReview/>
              </ProfileReviewContainer>
            </ProfileContainer>
            <ProfileSidebar/>
          </Wrapper>
        </BGWrapper>
      </Layout>
    );
  }
}

export default MyProfile;

const BGWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  flex:1;
  display:flex;
  justify-content:center;
  width:100vw;
  margin-top:2px;
`;

const Wrapper = styled.div`
  flex:1;
  margin: 85px 24px 0 24px;
  background: ${props => props.theme.colors.background};
  overflow: auto;
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: 800px){
    margin: 85px 24px 0 24px;
    max-width: 1160px;
  }
`;

const ProfileReviewContainer = styled(Col)`
  align-items: left;
  height: auto;
  width:100%;
  background-color: ${props => props.theme.colors.card};
  border: ${props => props.theme.border};
  box-shadow: ${props => props.theme.boxshadow};
  border-radius: ${props => props.theme.borderradius};
  padding:20px;
`;

const ProfileContainer = styled(Col)`
  align-items:center;
  height:auto;
  margin-bottom:200px;
  @media only screen and (min-width: 600px) {
`;
