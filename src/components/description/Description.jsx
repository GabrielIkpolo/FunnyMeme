import React, { useCallback, useEffect, useState } from 'react'
import './description.css'
import photo from '../../funnyImages/funny1.jpeg';
import photo1 from '../../funnyImages/funny2.jpeg';
import photo2 from '../../funnyImages/funny3.jpeg';
import photo3 from '../../funnyImages/funny4.jpeg';
import photo4 from '../../funnyImages/funny5.jpeg';
import photo5 from '../../funnyImages/funny6.jpeg';
import photo6 from '../../funnyImages/funny7.jpeg';

import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

const allPhotos = [photo, photo1, photo2, photo3, photo4, photo5, photo6];

function Description() {

    const [topInput, setTopInput] = useState("");
    const [leftInput, setLeftInput] = useState("");
    const [rightInput, setRightInput] = useState("");
    const [bottomInput, setBottomInput] = useState("");

    const [display, setDisplay] = useState("none");
    const [guide, setGuide] = useState("block");

    const [randomisedPhoto, setRandomisedPhoto] = useState([photo]);
    const [file, SetFile] = useState();


    const importImage = () => {
        setDisplay("block");
        setGuide("none");
    }

    const guideClicked = () => {
        setDisplay("none");
        setGuide("block");
    }

    const getrandomPhotos = (items) => {
        return items[Math.floor(Math.random() * items.length)];
    }

    const generateRandomMeme = () => {
        const result = getrandomPhotos(allPhotos);
        setRandomisedPhoto(result);
    }

    const downloadMeme = useCallback(async () => {
        const theImage = document.querySelector('.surfaceInputs');
        if (!theImage) return console.log("image does not exist");
        const canvas = await html2canvas(theImage);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'download.png', 'image/png');
    }, []);

    const previewPhoto = (e)=>{
        SetFile(URL.createObjectURL(e.target.files[0]));
    };


    useEffect(() => {

    }, []);

    return (
        <>
            <div className="card text-center ">
                <div className="card-header">
                    <ul className="nav "  >
                        <li className="navItemOne ">
                            <a className="nav-link active" onClick={guideClicked}>Guide</a>
                        </li>
                        <li className="navItemOne">
                            <a className="nav-link" onClick={importImage} >Import Image</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='importingImages' style={{ display: display }} >
                <input type="file" className='imageUpload' 
                onChange={previewPhoto}
                />
            </div>

            <div className="card-body text-center " style={{ display: guide }} >
                <h5 className="card-title">Instructions</h5>
                <p className="card-text">
                    Click the button below button to generate a random
                    picture which will appear below.
                </p>
                <a onClick={generateRandomMeme} className="btn randomMemeBtn">Generate Random Meme </a>
            </div>

            <div className='textInputs container'>
                <input className='row offset-3 col-6 offset-3 topInput'
                    type="text" placeholder='Top Text ... '
                    onChange={(e) => setTopInput(e.target.value)}
                />
                <div className='row'>
                    <input className='col-5 leftInput' type="text"
                        placeholder='Left Text ... '
                        onChange={(e) => setLeftInput(e.target.value)}
                    />
                    <input className='col-5 rightInput' type="text"
                        placeholder='Right Text ... '
                        onChange={(e) => setRightInput(e.target.value)}
                    />
                </div>
                <input className='row offset-3 col-6 offset-3 bottomInput'
                    type="text" placeholder='Buttom Text ... '
                    onChange={(e) => setBottomInput(e.target.value)}
                />
            </div>

            <div className='surfaceInputs'>
                <img src={file ? file: randomisedPhoto} alt="theRandomImage" className='img' />
                <div className="surfaceTop">{topInput}</div>
                <div className='surfaceLeft'>{leftInput}</div>
                <div className="surfaceRight" >{rightInput} </div>
                <div className="surfaceBottom" >{bottomInput}</div>
            </div>

            <div className="downloadBtnDiv">
                <button onClick={downloadMeme} className="downloadBtn" >Download</button>
            </div>
        </>
    )
}

export default Description