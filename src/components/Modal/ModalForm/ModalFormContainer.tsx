import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { RootState } from '../../../redux/store';
import {
  addLeader,
  editLeaders,
  setAllLeaders,
  setDiffPlaces,
  setLeaderPosition,
  setPageSize,
  setTopLeaders,
  sortLeaders,
} from '../../../redux/slices/leaders-slice';
import { closeWindow } from '../../../redux/slices/modal-slice';
import { ModalFormAdd } from './ModalFormAdd';
import { ModalFormEdit } from './ModalFormEdit';

interface IModalFormContainer {
  currentPage: number;
  inscription: string;
}

export const ModalFormContainer = ({ currentPage, inscription }: IModalFormContainer) => {
  const { days, editLeaderId } = useAppSelector((state: RootState) => state.leadersData);
  const leaders = days[currentPage].filter((leader, i) => i === editLeaderId && leader);
  const position = Number(leaders.map((leader) => leader.position));
  const name = String(leaders.map((leader) => leader.name));
  const score = Number(leaders.map((leader) => leader.score));

  const dispatch = useAppDispatch();
  const dispatchOtherActions = () => {
    dispatch(setLeaderPosition());
    dispatch(setAllLeaders());
    dispatch(setDiffPlaces());
    dispatch(setTopLeaders());
    dispatch(closeWindow());
  };

  const createLeader = (name: string, score: number) => {
    dispatch(addLeader({ name, score }));
    dispatch(sortLeaders());
    dispatch(setPageSize());
    dispatchOtherActions();
  };

  const editLeader = (name: string, score: number, position: number) => {
    dispatch(editLeaders({ name, score, position }));
    dispatch(sortLeaders());
    dispatchOtherActions();
  };

  const chooseModalForm =
    inscription === 'Edit user score' ? (
      <ModalFormEdit
        editLeader={editLeader}
        name={name}
        score={score}
        position={position}
        days={days}
        currentPage={currentPage}
      />
    ) : (
      <ModalFormAdd createLeader={createLeader} days={days} currentPage={currentPage} />
    );

  return <>{chooseModalForm}</>;
};
