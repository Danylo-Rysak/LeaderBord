import styled from 'styled-components';

export const HighestScorersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 714px;
  min-height: 140px;
  max-height: 140px;
  border-radius: 10px;
  background: rgba(27, 33, 172, 0.96);
  padding: 20px;
  @media (max-width: 700px) {
    max-height: 500px;
    flex-direction: column;
    gap: 25px;
    align-items: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  order: 1;
  @media (max-width: 700px) {
    order: 2;
    text-align: center;
  }
`;

export const Name = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
`;

export const Inscription = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const Icon = styled.img`
  height: 59.818729400634766px;
  width: 59.841270446777344px;
`;

export const TopLeaders = styled.p`
  margin: 0;
  line-height: 15px;
  text-align: center;
`;

export const TopLeader = styled.div`
  display: flex;
  gap: 8.16px;
`;

export const GroupImg = styled.img`
  height: 227.31114196777344px;
  width: 332px;
  margin-top: -70px;
  order: 2;
  @media (max-width: 700px) {
    margin-top: 1px;
    order: 1;
  }
`;
