import React, {Component} from "react";


function MovieHeader() {
    return (
            <thead className="col row-cols-7 text-center bg-primary">
                <tr>
                    <th className="col">title</th>
                    <th className="col">actors</th>
                    <th className="col">plot</th>
                    <th className="col">imdbRating</th>
                    <th className="col">director</th>
                    <th className="col">year</th>
                    <th className="col">date added</th>
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
        <tr key={index} className='col row-cols-7 text-center'>
          <td className="col bg-danger">{row.title}</td>
          <td className="col">{row.actors}</td>
          <td className="col bg-info">{row.plot}</td> 
          <td className="col">{row.imdbRating}</td>
          <td className="col bg-warning">{row.director}</td>
          <td className="col">{row.year}</td>
          <td className="col">{row.dateAdded}</td>
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
            <table className="">
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