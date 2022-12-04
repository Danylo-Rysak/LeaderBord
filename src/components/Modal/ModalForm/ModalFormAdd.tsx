import { useFormik } from 'formik';
import { Button, Error, Form, Input } from './ModalFormStyles';
import { validate } from './Validation';
import { ILeader } from '../../../redux/interfaces/redux-interfaces';

interface IModalFormAdd {
  createLeader: (name: string, score: number) => void;
  days: ILeader[][];
  currentPage: number;
}

export interface IInitialValues {
  name: string;
  score: string | number;
}

export const ModalFormAdd = ({ createLeader, days, currentPage }: IModalFormAdd) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      score: '',
    } as IInitialValues,
    validate: (values) => validate(values, days, currentPage),
    onSubmit: (values) => {
      createLeader(values.name, Number(values.score));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        name="name"
        id="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="Name"
      />
      {formik.touched.name ? <Error>{formik.errors.name}</Error> : null}
      <Input
        name="score"
        id="score"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.score}
        placeholder="Score"
      />
      {formik.touched.score && <Error>{formik.errors.score}</Error>}
      <Button type="submit">Save</Button>
    </Form>
  );
};
