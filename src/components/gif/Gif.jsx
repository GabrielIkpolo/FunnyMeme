import React from 'react'
import './gif.css';
import gifshot from 'gifshot';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import {useCallback} from 'react';


function Gif() {

    const handleVideoGIF = () => {
        gifshot.createGIF({
            numFrames: 70,
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

    const downloadGif = useCallback(async () => {
        const theImage = document.querySelector('.theGIF > img');
        if (!theImage) return alert("The image does not exist");
        const canvas = await html2canvas(theImage);
        const dataURL = canvas.toDataURL('media/gif');
        downloadjs(dataURL, 'download.gif', 'media/gif');
    }, []);

    return (
        <>
            <div className="createGIF wrapper">
                <button className='createGIFBtn col-6 offset-3' onClick={handleVideoGIF}>Create GIF</button>
                <span>Click on the image to download gif (It takes some few seconds to capture) </span>
                <hr />
                <div className='theGIF' onClick={downloadGif}>

                </div>
            </div>

        </>
    )
}



export default Gif
