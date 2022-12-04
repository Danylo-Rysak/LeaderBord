import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  width: 511px;
  max-width: 100%;
  min-width: 320px;
  padding: 0 15px 0 15px;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Modal = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 298px;
  background: #f6f6f6;
  border: 1px solid #dddddd;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  float: right;
  cursor: pointer;
  border: none;
  background: none;
`;

export const ImgCross = styled.img`
  width: 16px;
  height: 16px;
`;

export const Background = styled.img`
  max-width: 100%;
  position: absolute;
  left: 3.13%;
  right: 1.96%;
  z-index: 0;
  margin-top: -1px;
  @media (max-width: 570px) {
    bottom: 0;
  }
`;

export const Name = styled.h1`
  position: relative;
  z-index: 1;
  text-align: center;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  color: #030327;
  margin-top: 68px;
  margin-bottom: 20px;
  @media (max-width: 570px) {
    margin-top: 30px;
  }
`;

export const ImgGroup = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 39px;
  @media (max-width: 570px) {
    right: 0;
  }
`;
