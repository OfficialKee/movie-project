import React from "react";
import { Component } from "react";

const date = new Date()
class Form extends Component{
    //set initial state of form  in constructor and save it to state
    constructor(props){
        super(props);

        this.initialState ={
            title:'',
            actors:'',
            plot:'',
            imdbRating:'',
            director:'',
            year:'',
            dateAdded: ``

            
        }

        this.state = this.initialState;
        
    }
//change handler function
    handleChange = event => {
        //get name,value out of target element
        const {name,value} = event.target;

        //update state
        this.setState({
            [name]: value,
        })


    }

    onSubmit = event => {
        event.preventDefault();
//sets current state to what was submitted
        this.props.addMovie(this.state)
    }

    render(){
        //hook in data from state
        const{title,actors,plot,imdbRating,director,year,dateAdded} = this.state
        return(
            <form onSubmit={this.onSubmit}>
                <label htmlFor="title">Title :</label><br/>
                <input 
                    type="text" 
                    id="title" 
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                    /><br/>
                <label htmlFor="actors">Actors :</label><br/>
                <input 
                    type="text" 
                    id="actors" 
                    name="actors"
                    value={actors}
                    onChange={this.handleChange}
                /><br/>
                <label htmlFor="plot">Plot :</label><br/>
                <input 
                    type="text" 
                    id="plot" 
                    name="plot"
                    value={plot}
                    onChange={this.handleChange}
                /><br/>
                <label htmlFor="imdbRating">imdbRating :</label><br/>
                <input 
                    type="text" 
                    id="imdbRating" 
                    name="imdbRating"
                    value={imdbRating}
                    onChange={this.handleChange}
                /> <br/>
                <label htmlFor="director">Director :</label><br/>
                <input 
                    type="text" 
                    id="director" 
                    name="director"
                    value={director}
                    onChange={this.handleChange}
                    /><br/>
                <label htmlFor="year">Year :</label><br/>
                <input 
                    type="text" 
                    id="year" 
                    name="year"
                    value={year}
                    onChange={this.handleChange}
                    /><br/>
                    <label htmlFor="date added">Date Added :</label><br/>
                <input 
                    type="text" 
                    id="dateAdded" 
                    name="dateAdded"
                    value={dateAdded}
                    onChange={this.handleChange}
                    />
                   
             <button type='submit'>Submit</button>

            </form>
        )
    }
}

export default Form;