import style from "./MoviesPage.module.css"
import { Field, Form, Formik } from 'formik';

const MoviesPage = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={style.form}>
        <Field type="text" name="text" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default MoviesPage;
