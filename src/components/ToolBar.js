import React from 'react'
import SearchBar from './SearchBar'
import './SearchBar.css'

const ToolBar = (props) => {
    console.log("TOOLBAR PROPS", props)
    return(
        <div className="toobar-flexer">
            {/* <div className="logo-bar"> */}
                <img className="image-thumbnail" src="https://bcassetcdn.com/asset/logo/4645dc29-6363-4318-b815-7b500034abfa/logo?v=4&text=Logo+Text+Here" alt="mytube logo"></img>
                <SearchBar onTermSubmit={props.onTermSubmit} />
            {/* </div> */}
            <h3>Welcome, Demo User</h3>
        </div>
        
    )
}

export default ToolBar