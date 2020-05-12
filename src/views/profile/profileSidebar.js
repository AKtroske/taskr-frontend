import React from 'react';
import styled from 'styled-components';

import Sidebar from '../../components/sidebar/sidebar';

const ProfileSidebar = () => {

  let sideBarItems = [{header: 'Profile'}, 'Messages', 'Tasks', 'Settings', 'Help']

  return (
    <Sidebar items={sideBarItems} height={'200px'}/>
  );
}

export default ProfileSidebar;
