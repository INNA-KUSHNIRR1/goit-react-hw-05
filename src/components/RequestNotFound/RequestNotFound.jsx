import style from './RequestNotFound.module.css';

const RequestNotFound = () => {
  return (
    <p className={style.error}>
      Nothing found for your search... Do another search
    </p>
  );
};
export default RequestNotFound;
