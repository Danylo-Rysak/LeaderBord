import React, { useEffect } from 'react';
import {
  Preloader,
  ErrorInscription,
  Title,
  Backward,
  Forward,
  Header,
  AddDay,
  AddLeader,
  Buttons,
  LeaderContainer,
  LeadersTableWrapper,
} from './LeadersTableStyles';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { requestLeaders } from '../../redux/thunks/requestLeaders';
import { Leader } from './Leader/Leader';
import { setCurrentPage } from '../../redux/slices/leaders-slice';
import { openWindow } from '../../redux/slices/modal-slice';
import { ModalWindow } from '../Modal/Modal';
import backward from './../../icons/backward.svg';
import forward from './../../icons/forward.svg';
import {ILeader} from "../../redux/interfaces/redux-interfaces";

export const LeadersTable: React.FC = () => {
  const { days, loading, hasErrors, currentPage } = useAppSelector(
    (state: RootState) => state.leadersData
  );
  const { isOpen, inscription } = useAppSelector((state: RootState) => state.modalData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestLeaders());
  }, [dispatch]);

  if (loading) {
    return <Preloader>Loading...</Preloader>;
  }

  if (hasErrors) {
    setTimeout(() => {
      dispatch(requestLeaders());
    }, 500);
    return <ErrorInscription>Request error, reloading the page!</ErrorInscription>;
  }

  const modal = isOpen && (
    <ModalWindow currentPage={currentPage} inscription={inscription} />
  );

  const paginateDay = (pageNumber: number) => {
    if (days.length > 1) {
      dispatch(setCurrentPage(pageNumber));
    }
  };

  const backwardState = currentPage !== days.length - 1 ? 'active' : 'not active';
  const handleClickBackward = () => {
    paginateDay(currentPage < days.length - 1 ? currentPage + 1 : days.length - 1);
  };

  const forwardState = currentPage !== 0 ? 'active' : 'not active';
  const handleClickForward = () => {
    paginateDay(currentPage === 0 ? 0 : currentPage - 1);
  };

  const handleClickAddDay = () => {
    dispatch(requestLeaders());
  };

  const handleClickAddLeader = () => {
    if (currentPage !== days.length - 1) {
      dispatch(openWindow('Add new user'));
    }
  };

  const leader = days
    .map((day: ILeader[]) =>
      day.map((leader, index) => (
        <Leader
          daysLength={days.length}
          position={leader.position}
          index={index}
          place={leader.place}
          editLeaderId={leader.position}
          currentPage={currentPage}
          key={index}
          name={leader.name}
          score={leader.score}
          isOpen={isOpen}
        />
      ))
    )
    .slice(currentPage, currentPage + 1);
  return (
    <LeadersTableWrapper>
      {modal}
      <Header>
        <Title>Leaders table for this period</Title>
        <Buttons>
          <Backward dir={backwardState} src={backward} onClick={handleClickBackward} />
          <Forward dir={forwardState} src={forward} onClick={handleClickForward} />
          <AddDay onClick={handleClickAddDay}>New day</AddDay>
          <AddLeader onClick={handleClickAddLeader}>Add new user</AddLeader>
        </Buttons>
      </Header>
      <LeaderContainer>{leader}</LeaderContainer>
    </LeadersTableWrapper>
  );
};
