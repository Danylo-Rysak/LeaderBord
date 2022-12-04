import styled from 'styled-components';

export const Form = styled.form`
  gap: 10px;
  position: relative;
  z-index: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid rgba(3, 3, 39, 0.58);
  border-radius: 10px;
  width: 231px;
  height: 34px;
  padding: 13px 10px;
`;

export const Button = styled.button`
  width: 73px;
  height: 24px;
  background: #f99746;
  border: 1px solid #f99746;
  box-shadow: 0 2px 8px rgba(249, 151, 70, 0.04);
  border-radius: 10px;
  cursor: pointer;
`;

export const Error = styled.p`
  margin: 0;
  color: #ff314d;
`;
