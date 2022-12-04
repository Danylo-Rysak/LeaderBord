import styled from 'styled-components';

export const LeaderBord = styled.div`
  min-width: 320px;
  margin: 0 auto;
  max-width: 754px;
  padding: 0 15px 0 15px;
  font-weight: 500;
  font-size: 12px;
  color: #efefef;
  height: 1200px;

  &:first-child {
    @media (max-width: 700px) {
      text-align: center;
    }
  }
`;

export const Title = styled.img`
  margin: 20px 20px;
`;
