import React from 'react'


const VideoMain = ({video}) => {

    if (!video){
        return <div>Loading...</div>
    }

    const vidSrc = "https://www.youtube.com/embed/" + video.id.videoId
    const decodeSnippetTitle = decodeURI(video.snippet.title)
    const decodeSnippetDescription = decodeURI(video.snippet.description)
    console.log("title is", decodeSnippetTitle, "decript is", decodeSnippetDescription)
    return(
       <div>
           <div className="ui embed">
               <iframe src={vidSrc} title={video.snippet.title} />  
            </div>
            <h2>{decodeSnippetTitle}</h2>
            <h3>{decodeSnippetDescription}</h3>
            <h3>Published by: {video.snippet.channelTitle}</h3>
       </div> 
    )
}


export default VideoMain;