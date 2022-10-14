import React from 'react'
import './gif.css';
import gifshot from 'gifshot';


function Gif() {

    const handleVideoGIF = () => {
        gifshot.createGIF({
            numFrames: 90,
        }, (obj) => {
            if (!obj.error) {
                var image = obj.image;
                var animatedImage = document.createElement('img');
                animatedImage.src = image;
                document.querySelector('.theGIF').append(animatedImage);
            }
        });

        gifshot.stopVideoStreaming();
    }

    return (
        <>
            <div className="createGIF wrapper">
                <button className='createGIFBtn col-6 offset-3' onClick={handleVideoGIF}>Create Video GIF</button>
                <hr />
                <div className='theGIF'>

                </div>
            </div>

        </>
    )
}



export default Gif
