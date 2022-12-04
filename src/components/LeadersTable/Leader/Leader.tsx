import edit from './../../../icons/edit.svg';
import { useAppDispatch } from '../../../hooks/hooks';
import {
  Score,
  Name,
  EditButton,
  EditImg,
  LeaderContainer,
  Place,
  Order,
  LeaderInfo,
  LeaderChanges,
} from './LeaderStyles';
import { openWindow } from '../../../redux/slices/modal-slice';
import { setEditLeaderId } from '../../../redux/slices/leaders-slice';
import leaderImg from '../../../icons/leader.svg';

interface ILeaderComponent {
  daysLength: number;
  position: number | undefined;
  index: number;
  place: number | undefined;
  editLeaderId: number | undefined;
  currentPage: number;
  name: string;
  score: number;
  isOpen: boolean;
}

export const Leader = ({
  daysLength,
  position,
  index,
  place,
  editLeaderId,
  currentPage,
  name,
  score,
  isOpen,
}: ILeaderComponent) => {
  const dispatch = useAppDispatch();
  const handleEditClick = () => {
    if (currentPage !== daysLength - 1) {
      dispatch(openWindow('Edit user score'));
      dispatch(setEditLeaderId(Number(editLeaderId)));
    }
  };

  const order = index < 3 ? Number(position) + 1 + 'rd' : Number(position) + 1 + 'th';

  const leaderPlace =
    currentPage !== daysLength - 1 ? (
      place === 0 || !Number.isFinite(place) ? (
        <Place dir={'noChanges'}>No change</Place>
      ) : Number(place) < 0 ? (
        <Place dir={'down'}>places {place}</Place>
      ) : (
        <Place dir={'up'}>places {place}</Place>
      )
    ) : null;

  return (
    <LeaderContainer>
      <LeaderInfo>
        <Order>{order}</Order>
        <img src={leaderImg} alt={leaderImg} />
        <Score>{score}</Score>
        <Name>{name}</Name>
      </LeaderInfo>

      <LeaderChanges>
        {leaderPlace}
        <EditButton disabled={isOpen} onClick={handleEditClick}>
          <EditImg src={edit} alt="edit" />
        </EditButton>
      </LeaderChanges>
    </LeaderContainer>
  );
};
