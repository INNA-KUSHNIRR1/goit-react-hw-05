import { useParams } from 'react-router-dom';

// import style from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return <div>MovieDetailsPage{movieId}</div>;
};
export default MovieDetailsPage;
