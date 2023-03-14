//Table React Component
import { useState } from "react";
import { Link } from "react-router-dom";
import Movies from "../MovieData/Movies";

// TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Year</th>
        <th>Title</th>
      </tr>
    </thead>
  );
};

//TABLE BODY SIMPLE COMPONENT
const TableBody = (prop) => {

  //construct rows
  const rows = prop.data.map((row, index) => {
    return (
      <>
        <tr key={index}>
          <td> {row.year} </td>
          <td>
            <Link to={`/movies/${index}`}>{row.title} </Link>
          </td>
        </tr>
      </>
    );
  });
  //return rows wrapped in tbody
  return <tbody>{rows}</tbody>;
};

// TABLE is our main Component
const MoviesListing = () => {
  //Import movie data and assign to movieList
  const [movieList, setMovieList] = useState(Movies);

  return (
    <div>
      <p className="instructions">
        Click on the title to see the movie's details.
      </p>
      <table>
        <TableHeader />
        <TableBody 
        MovieData={movieList} />
      </table>
    </div>
  );
};
// }

export default MoviesListing;