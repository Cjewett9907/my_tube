import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList'


class App extends React.Component{

    state = { videos: [] };
    
    onTermSubmit = async (term) => {
        //  console.log(term)
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // console.log(response)
        this.setState({videos: response.data.items})
    };

    render(){


        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                i have {this.state.videos.length} videos.
                <div>APP!</div>
                <VideoList videos={this.state.videos} />
             </div>
            )
    }
}

export default App;