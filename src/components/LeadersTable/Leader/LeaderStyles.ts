import styled, { css } from 'styled-components';

export const LeaderContainer = styled.div`
  max-width: 714px;
  height: 61px;
  background: #f1f1f1;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  @media (max-width: 430px) {
    padding: 0 5px;
  }
`;

export const LeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 430px) {
    gap: 15px;
  }
`;

export const Order = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #808080;
`;

export const Score = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

export const Name = styled.p`
  font-weight: 400;
  line-height: 15px;
  color: #000000;
`;

export const LeaderChanges = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  @media (max-width: 430px) {
    gap: 5px;
  }
`;

export const Place = styled.p<{ dir: 'up' | 'down' | 'noChanges' }>`
  line-height: 15px;
  ${(props) => {
    switch (props.dir) {
      case 'up':
        return css`
          color: #40a3c3;
        `;
      case 'down':
        return css`
          color: #b64c41;
        `;

      case 'noChanges':
        return css`
          color: #f99746;
        `;
    }
  }}
`;

export const EditButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const EditImg = styled.img`
  width: 17.5px;
  height: 17.5px;
`;
