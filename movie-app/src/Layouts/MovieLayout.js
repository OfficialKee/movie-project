import { Outlet } from "react-router-dom";

const MovieLayout = (props) => {
  return (
    <div className="movie-layout">
      <h1>The List of Movies</h1>
      <div className="movie-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MovieLayout;