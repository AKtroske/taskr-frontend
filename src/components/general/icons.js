import styled from 'styled-components';
import { Edit, Delete } from '@styled-icons/material-rounded';

export const DeleteIcon= styled(Delete)`
  color:  ${props => props.theme.colors.secBold};
  title: 'Delete Task';
  height: 30px;
  width: 30px;
  @media only screen and (min-width: 800px) {
    height: ${props => props.dim || '4vh'};
    width: ${props => props.dim || '4vh'} ;
  }
`;

export const EditIcon = styled(Edit)`
  color: ${props => props.color || props.theme.colors.secBold};
  title: 'Edit Task';
  height: 30px;
  width: 30px;
  @media only screen and (min-width: 800px) {
    height: ${props => props.dim || '4vh'};
    width: ${props => props.dim || '4vh'} ;
  }
`;
