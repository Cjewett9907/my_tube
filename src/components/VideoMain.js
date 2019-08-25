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
           
            {video.snippet.title}
       </div> 
    )
}


export default VideoMain;