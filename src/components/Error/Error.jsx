import style from './Error.module.css';

const Error = ({ errorType }) => {
  return <p className={style.error}>Error: {errorType}</p>;
};
export default Error;
