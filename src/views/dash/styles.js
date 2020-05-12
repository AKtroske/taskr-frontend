import styled from 'styled-components';

export const BGWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  flex:1;
  display:flex;
  justify-content:center;
  width:100vw;
  margin-top:2px;
`;

export const Wrapper = styled.div`
  flex:1;
  margin: 100px 24px 0 24px;
  background: ${props => props.theme.colors.background};
  overflow: auto;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 800px){
    margin-top:120px;
    max-width: 1160px;
  }
`;

export const FeedContainer = styled.div`
  display:flex;
  flex-flow:row;
  @media only screen and (min-width: 600px) {
    justify-content:center;
  }
`;
