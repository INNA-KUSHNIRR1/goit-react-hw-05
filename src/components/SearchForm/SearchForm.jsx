import { Field, Form, Formik } from 'formik';
import style from './SearchForm.module.css';

const SearchForm = () => {
  const handleSubmit = (values, actions) => {
    const textInput = values.text;
    console.log(textInput);
    //   setSearchParams({ query: value });
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
      <Form className={style.form}>
        <Field
          className={style.input}
          type="text"
          name="text"
          placeholder="Search..."
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
