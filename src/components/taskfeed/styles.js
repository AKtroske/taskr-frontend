import styled from 'styled-components';
import { Edit, Delete } from '@styled-icons/material-rounded';

import {
  Text,
} from '../general/general';

export const Wrapper = styled.div`
  width:100%;
  display:flex;
  flex-flow:column;
  justify-content:center;
  @media only screen and (min-width: 600px) {
    justify-content:flex-start;
  }
`;

export const TaskContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom: ${props => props.theme.spacing.feed};
;`

export const TaskSlide = styled.div`
  flex: 1;
  height:auto;
  min-height: 80px;
  background:  ${props => props.bgcolor || "white"};
  color: ${props => props.color || props.theme.colors.secBold};
  border-radius: 3px;
  box-shadow: ${"0 2px 2px -2px"};
  border: 0.4px ${props => props.theme.colors.secondary} solid;
  display:flex;
  align-items:center;
  min-width:55px;
  &:hover{
    cursor:pointer;
    border-bottom: 1.5px solid ${props => props.theme.colors.secondary};
  }
  @media only screen and (min-width: 800px) {
    width:80%;
  }
`;

export const TaskEntry = styled(TaskSlide)`
  justify-content:space-around;
`;

export const InfoItem = styled.div`
  margin:0 6px;
  width:15%;
  display: ${props => props.mobile && 'none'};
  @media only screen and (min-width: 600px) {
    justify-content:center;
    margin:0 12px;
    display: block;
  }
`

export const InfoText = styled(Text)`
  font-size:1em;
`;

export const Enum = styled(Text)`
  margin: 0 12px;
  display: ${props => props.display};
`;

export const ToolContainer = styled.div`
  display:flex;
  flex-flow:column;
  justify-content:center;
  margin-right:5px;
  @media only screen and (min-width: 600px) {
    flex-flow:row;
  }
`;

export const DeleteButton = styled.button`
  background:white;
  flex:1;
  height: 100%;
`;

export const EditButton = styled.button`
  background:white;
  flex:1;
  height: 100%;
`;

export const DeleteStyle = styled(Delete)`
  color:  ${props => props.theme.colors.secBold};
  title: 'Delete Task';
  @media only screen and (min-width: 800px) {
    height: ${props => props.dim || '4vh'};
    width: ${props => props.dim || '4vh'} ;
  }
`;

export const EditStyle = styled(Edit)`
  color: ${props => props.theme.colors.secBold};
  title: 'Edit Task';
  @media only screen and (min-width: 800px) {
    height: ${props => props.dim || '4vh'};
    width: ${props => props.dim || '4vh'} ;
  }
`;
