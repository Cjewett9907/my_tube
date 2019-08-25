import React from 'react'


const VideoMain = ({video}) => {

    if (!video){
        return <div>Loading...</div>
    }

    const vidSrc = "https://www.youtube.com/embed/" + video.id.videoId
    return(
       <div>
           <div className="ui embed">
               <iframe src={vidSrc} title={video.snippet.title} />  
            </div>
            <h2>{video.snippet.title}</h2>
            <h3>{video.snippet.description}</h3>
            <h3>Published by: {video.snippet.channelTitle}</h3>
            
            

       </div> 
    )
}


export default VideoMain;