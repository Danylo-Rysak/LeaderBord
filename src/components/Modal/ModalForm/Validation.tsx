import { ILeader } from '../../../redux/interfaces/redux-interfaces';
import { IInitialValues } from './ModalFormAdd';

export const validate = (
  values: IInitialValues,
  days: ILeader[][],
  currentPage: number,
  name?: string
): object => {
  const errors: { name?: string; score?: string } = {};
  if (values.name === '') {
    errors.name = 'Field name is empty!';
  }
  if (values.name.length > 9) {
    errors.name = 'Length of name must be less than 10 letters';
  }
  if (values.score > 99) {
    errors.score = 'Score of leader must be less then 100';
  }
  if (values.score === '') {
    errors.score = 'Field score is empty!';
  }
  if (name === undefined) {
    days[currentPage].map((leader) =>
      leader.name === values.name
        ? (errors.name = 'This name has already been added')
        : null
    );
  } else {
    days.map((day) =>
      day.map((leader) =>
        leader.name === values.name && name !== leader.name
          ? (errors.name = 'This name has already been added')
          : null
      )
    );
  }
  return errors;
};
