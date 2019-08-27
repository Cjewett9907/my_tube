import React from 'react';
import youtube from '../api/youtube';
import VideoList from './VideoList'
import VideoMain from './VideoMain'
import ToolBar from './ToolBar'
import './App.css'


class App extends React.Component{

    state = { videos: [], selectedVideo: null};

    componentDidMount(){
        this.onTermSubmit('News')
    }
    
    onTermSubmit = async (term) => {
        //  console.log(term)
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // console.log(response)
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video});
    };

    render(){


        return (
            <div className="main-div">
                <ToolBar onTermSubmit={this.onTermSubmit} />
                <div className="ui container padding">
                    
                    {/* <SearchBar onTermSubmit={this.onTermSubmit} /> */}

                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoMain video={this.state.selectedVideo}/>
                            </div>
                            <div className="five wide column">
                                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            )
    }
}

export default App;