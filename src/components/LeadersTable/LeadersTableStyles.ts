import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';

export const Preloader = styled.p`
  margin: 20px;
  font-size: 30px;
  font-weight: 700;
  color: #394dff;
`;

export const ErrorInscription = styled.div`
  margin: 20px;
  font-size: 30px;
  font-weight: 700;
  color: #ff314d;
`;

export const LeadersTableWrapper = styled.div`
  min-height: 600px;
  max-width: 754px;
  border-radius: 10px;
  background: #f6f6f6;
  margin-top: 20px;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 22px;
  color: #030327;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;

export const Backward = styled(SVG)<{ dir: 'active' | 'not active' }>`
  cursor: pointer;
  margin-top: 7px;
  ${(props) => {
    switch (props.dir) {
      case 'active':
        return css`
          & path {
            fill: #414b47;
          }
        `;
      case 'not active':
        return css`
          & path {
            fill: #949e9a;
          }
        `;
    }
  }}
`;

export const Forward = styled(Backward)``;

const AddButton = styled.button`
  border-radius: 10px;
  cursor: pointer;
  color: #ffffff;
`;

export const AddDay = styled(AddButton)`
  width: 93px;
  height: 24px;
  background: #f99746;
  border: 1px solid #f99746;
`;

export const AddLeader = styled(AddButton)`
  width: 123px;
  height: 24px;
  background: #1e3ca9;
  border: 1px solid #1e3ca9;
`;

export const LeaderContainer = styled.div`
  margin-top: 20px;
`;
