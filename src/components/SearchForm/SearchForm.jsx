import { Field, Form, Formik } from 'formik';
import style from './SearchForm.module.css';

const SearchForm = ({ submit }) => {
  const handleSubmit = (values, actions) => {
    const textInput = values.text.trim();
    submit(textInput);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
      <Form className={style.form}>
        <Field
          className={style.input}
          type="text"
          name="text"
          placeholder="Search movie..."
        />
        <div className={style.wrap}>
          <button className={style.btn} type="submit">
            Search
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default SearchForm;
