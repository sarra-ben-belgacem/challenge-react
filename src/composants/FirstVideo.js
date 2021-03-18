import React from 'react'

const FirstVideo = () => {
    return (
    
            <div className="App">
            <div className="first video">
                <iframe
                    width="750"
                    height="400"
                    src="https://www.youtube.com/embed/61-PXrbs4MA"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    ></iframe>
                <h3>Darude - Sandstorm (Original Mix)</h3>
            </div>
            
        </div>
    )
}

export default FirstVideo
