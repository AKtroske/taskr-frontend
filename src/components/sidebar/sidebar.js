import React from 'react';

import {
  SidebarContainer,
  SidebarHeader,
  SidebarItem
} from './styles';

const Sidebar = (props) => {

  const { children, items } = props;

  return(
    <SidebarContainer {...props}>
      {items.map((item, index) => (
        (typeof(item) === "object") ?
          <SidebarHeader key={index} fontweight='500'>{item.header}</SidebarHeader>
        : <SidebarItem key={index} href={`/${item.toLowerCase()}`}>{item}</SidebarItem>
      ))}
      {children}
    </SidebarContainer>
  );
}

export default Sidebar;
