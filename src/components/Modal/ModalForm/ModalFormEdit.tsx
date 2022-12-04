import { useFormik } from 'formik';
import React from 'react';
import { Button, Error, Form, Input } from './ModalFormStyles';
import { validate } from './Validation';
import { ILeader } from '../../../redux/interfaces/redux-interfaces';

interface IModalFormEdit {
  editLeader: (name: string, score: number, position: number) => void;
  name: string;
  score: number;
  position: number;
  days: ILeader[][];
  currentPage: number;
}

export const ModalFormEdit = ({
  editLeader,
  name,
  score,
  position,
  days,
  currentPage,
}: IModalFormEdit) => {
  const formik = useFormik({
    initialValues: {
      name: name,
      score: score,
      position: position,
    },
    validate: (values) => validate(values, days, currentPage, name),
    onSubmit: (values) => {
      editLeader(values.name, values.score, Number(values.position));
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
        value={String(formik.values.score)}
        placeholder="Score"
      />
      {formik.touched.score && <Error>{formik.errors.score}</Error>}
      <Button type="submit">Save</Button>
    </Form>
  );
};
