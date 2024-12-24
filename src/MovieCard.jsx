const MovieCard = ({ title, director, releaseDate, rating }) => (
    <div className="movie-card">
      <h3>{title}</h3>
      <p>Director: {director}</p>
      <p>Release Date: {releaseDate}</p>
      <p>Rating: {rating}/10</p>
    </div>
  );
  
  export default MovieCard;
  