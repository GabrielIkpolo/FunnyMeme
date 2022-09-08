import React from 'react'
import './gif.css';
import gifshot from 'gifshot';


function Gif() {

    const handleVideoGIF = ()=>{
        gifshot.createGIF({}, (obj)=>{
            if(!obj.error){
                var image = obj.image;
                var animatedImage = document.createElement('img');
                animatedImage.src = image;
                document.querySelector('.theGIF').append(animatedImage);
            }
        });
    }

    return (
        <>
        <div className="createGIF">
            <button className='createGIFBtn' onClick={handleVideoGIF}>Create Video GIF</button>
        </div>
         <div className='theGIF'>
                Gif
          </div>
        </>
    )
}



export default Gif
