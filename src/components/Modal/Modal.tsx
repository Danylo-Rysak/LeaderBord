import React from 'react';
import './ModalStyles';
import {
  Modal,
  CloseButton,
  ImgCross,
  Background,
  Name,
  ImgGroup,
  ModalContainer,
} from './ModalStyles';
import modalBackground from './../../icons/modalBackground.svg';
import modalGroup from './../../icons/modalGroup.svg';
import close from './../../icons/close.svg';
import { useAppDispatch } from '../../hooks/hooks';
import { closeWindow } from '../../redux/slices/modal-slice';
import { ModalFormContainer } from './ModalForm/ModalFormContainer';

interface IModalWindow {
  currentPage: number;
  inscription: string;
}

export const ModalWindow = ({ currentPage, inscription }: IModalWindow) => {
  const dispatch = useAppDispatch();
  const handleClickCloseWindow = () => {
    dispatch(closeWindow());
  };
  return (
    <ModalContainer>
      <Modal>
        <CloseButton onClick={handleClickCloseWindow}>
          <ImgCross src={close} alt="cross" />
        </CloseButton>
        <Background src={modalBackground} alt="modalBackground" />
        <ImgGroup src={modalGroup} alt="modalGroup" />
        <Name>{inscription}</Name>
        <ModalFormContainer currentPage={currentPage} inscription={inscription} />
      </Modal>
    </ModalContainer>
  );
};
