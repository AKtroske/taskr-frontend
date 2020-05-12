import React, { useState } from 'react';

import TaskFeed from '../../components/taskfeed/taskfeed';
import Layout from '../../components/layout/layout';

import {
  BGWrapper,
  Wrapper,
  FeedContainer
} from './styles';

import Sidebar from '../../components/sidebar/sidebar';

const Dash = () => {

  let sidebarItems = [{header: 'Your Items'}, 'My Boards', 'Group Boards'];

  return (
    <Layout>
      <BGWrapper>
        <Wrapper>
          <FeedContainer>
            <Sidebar items={sidebarItems} height={'80vh'}/>
            <TaskFeed/>
          </FeedContainer>
        </Wrapper>
      </BGWrapper>
      </Layout>
  );
}

export default Dash;
