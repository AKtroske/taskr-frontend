import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: ${props => props.display || 'none'};
  flex-flow:column;
  background:white;
  box-shadow: ${"0 2px 2px -2px"};
  border: 0.4px ${props => props.theme.colors.secondary} solid;
  border-radius:3px;
  margin-right: ${props => props.mr || props.theme.spacing.feed};
  margin-left: ${props => props.ml || props.theme.spacing.feed};
  @media only screen and (min-width: 800px){
    min-width: 250px;
    display:flex;
    height: ${props => props.height || 'auto'};
  }
`;

export const SidebarItem = styled.div`
  font-size: 1em;
  font-weight:500;
  color: ${props => props.theme.colors.text};
  padding: 5px 15px;
  margin: 1px;
  padding-left: ${props => props.firstnav};
  text-align: ${props => props.textalign || 'left'};
  background:white;

  &:hover {
    background: ${props => props.theme.colors.secBold};
    color:white;
    cursor: pointer;
  }

  @media only screen and (min-width: 800px){
    flex:1
    border-top:none;
    margin: 0 10px;
  }
`;

export const SidebarHeader = styled(SidebarItem)`
  margin-top: 1px;
  border-bottom: ${props => props.theme.borderbottomheader};
  padding: 10px 15px;
  &:hover{
    background: white;
    color: ${props => props.theme.colors.text};
    cursor: default;
  }
  @media only screen and (min-width: 800px){
    margin-top: 1px;
  }
`;
