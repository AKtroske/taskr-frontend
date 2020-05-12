import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => props.display || 'flex'};
  width: ${props => props.w || '85%'};
  height: auto;
  position:fixed;
  top:50px;
  left:50%;
  transform: translateX(-50%);
  z-index:10;

  @media only screen and (min-width: 800px) {
    max-width: 600px;
    max-height:700px;
    top:100px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height:100%;
  width:100%;
  background: rgba(0,0,0, ${props => props.cover || '0.6'});
  margin-top: ${props => props.mtop};
  transition-timing-function: ease-in;
  transition: 0.2s;
  z-index: 2;
`;
