import React from 'react'

class SearchBar extends React.Component {

    state = {term:''};

    onInputChange(event){

        console.log(event.target.value)
    }
    onInputClick(event){
        console.log('Input was clicked')
    }

    // onFormSubmit(event){
    //     event.preventDefault();
    //     console.log(this.state.term);        
    // }

    //arrow function to solve this undefined issue 2nd way
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term)
    }

    //3rd way is use arrow funciton directly in onSubmit in form

    render(){
        return(
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form" >
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" 
                        // onClick={this.onInputClick} 
                        onChange={(e) => this.setState({term:e.target.value})}
                        value={this.state.term}
                        >
                    </input>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;