import Table from "./MovieForm";
import Movies from "./Movies";
import React from "react";
import  {Component} from "react"


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
  // addCharacter = character => {
  //   this.setState({characters: [...this.state.characters, character ]})
  // } 
  
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
  </>
    )
  }
}



export default App;



// function deleteNote(event, noteId) {
//   event.stopPropagation()
//   setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
// }