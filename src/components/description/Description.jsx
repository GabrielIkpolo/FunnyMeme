import React, { useEffect, useState } from 'react'
import './description.css'
import photo from '../../funnyImages/funny1.jpeg';

function Description() {

    const [topInput, setTopInput] = useState("");
    const [leftInput, setLeftInput] = useState("");
    const [rightInput, setRightInput] = useState("");
    const [bottomInput, setBottomInput] = useState("");

    const [surfaceTop, setSurfaceTop] = useState("");
    const [surfaceLeft, setSurfaceLeft] = useState("");
    const [surfaceRight, setSurfaceRight] = useState("");
    const [surfaceButtom, setSurfaceButtom] = useState("");


    useEffect(() => {

    }, []);

    return (
        <>
            <div className="card text-center ">
                <div className="card-header">
                    <ul className="nav nav-pills "  >
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Guide</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Importing Images</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Instructions</h5>
                    <p className="card-text">
                        Click the button below  Button to Generate a random picture  Which will Appear below.
                    </p>
                    <a href="#" className="btn btn-primary">Generate Random Meme </a>
                </div>
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

            <img src={photo} alt="theRandomImage" className='img' />

            <div className='surfaceInputs'>
                <div className="surfaceTop">{topInput}</div>
                <div className='surfaceLeft'>{leftInput}</div>
                <div className="surfaceRight" >{rightInput} </div>
                <div className="surfaceBottom" >{bottomInput}</div>
            </div>


        </>
    )
}

export default Description