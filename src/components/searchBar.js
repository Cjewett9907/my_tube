import React from 'react'
import './SearchBar.css'


class SearchBar extends React.Component {

    state = { term: ''};

    handleChange = (event) => {
        this.setState({ term: event.target.value})

    };


    onFormSubmit = (event) => {
        event.preventDefault();
        // TODO call callback from parent conponent
        this.props.onTermSubmit(this.state.term);

    }


    render(){
        return(
        <div className="ui action input space">
            <form onSubmit={this.onFormSubmit} className="ui form">
            <label className="label-space">Video Search</label>
                <div className="field flow">
                    
                    <input type="text" 
                        className="searchfield"
                        onChange={this.handleChange} 
                        value={this.state.term} 
                    />
                    <button className="ui button">Search</button>
                </div>
            </form>
        </div>

        ) 
    }
}

export default SearchBar