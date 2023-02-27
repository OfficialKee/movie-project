import React, {Component} from "react";

function MovieHeader() {
    return (
            <thead>
                <tr>
                    <th>title</th>
                    <th>actors</th>
                    <th>plot</th>
                    <th>imdbRating</th>
                    <th>director</th>
                    <th>year</th>
                    <th>date added</th>
                </tr>
            </thead>
        
    )
}

const MovieForm = (props) => {


    //construct rows
    // use map to iterate over each row and wrap it in
    // a html table row  
    //registered an on click listener to remove the character
    const rows = props.list.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.title}</td>
          <td>{row.job}</td>
          <td>{row.actors}</td>
          <td>{row.plot}</td> 
          <td>{row.imdbRating}</td>
          <td>{row.director}</td>
          <td>{row.year}</td>
          <td>{row.dateAdded}</td>
          <td><button onClick={()=>props.deleteMovie(index)}> Delete</button></td>
        </tr>
      )
    })
    //return rows wrapped in tbody
    return <tbody>{rows}</tbody>
  }


  class Table extends Component {
    render(){
        const {movieData, 
            deleteMovie
        } = this.props;
        return(
            <table>
                <MovieHeader/>
                <MovieForm
                list ={movieData}
                deleteMovie ={deleteMovie}
                />
            </table>
        )
    }
  }
export default Table;

// Create a Component called MovieForm that has the following fields: 
// -title
// -actors
// -plot
// -imdbRating
// -director 
// -year
// -date added