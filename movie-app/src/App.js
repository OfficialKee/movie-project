import Table from "./MovieForm";
import Movies from "./Movies";
import Form from "./submitForm";
import React from "react";
import  {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  // set initial state of component 
  state = {Movies : Movies}

  // create simple method here to remove Movie
  removeMovie = (index) => {
  //now that we've defined this.state, we can use 
      const { Movies } = this.state 
  
      // we can use setState to update the state 
      this.setState({
          // remove movie at passed in index by returning 
          // a new list excluding that movie
          Movies : Movies.filter((_, i) => {
              return i !== index
          }),
      })
  } 
  //we add the handle submit here , because 
  //the characters are in here 
  // NOTE ON SYNTAX: passing a character to addCharacter 
  // using (...) spread operator to unpack characters array and adding
  // a new character
  addMovie = movie => {
     this.setState({Movies: [...this.state.Movies, movie ]})
   } 
  
  //delete all the characters 
  // removeAllCharacters = () => {
  //   this.setState({characters:[]})
  // }

  /* you always have a render function
   in a component. */ 

  render() {
    return (
     
   <>
     <Table 
       movieData = {this.state.Movies}
       deleteMovie ={this.removeMovie}
      />
      <Form
      addMovie={this.addMovie}/>
  </>
    )
  }
}



export default App;



// function deleteNote(event, noteId) {
//   event.stopPropagation()
//   setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
// }