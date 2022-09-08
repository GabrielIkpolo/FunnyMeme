import './message.css';

import React from 'react'
import Description from '../description/Description';
import Gif from '../gif/Gif';

function Message() {
    return (
        < >
            <div className="wrapper">
                <Description />
                {/* <Gif /> */}
            </div>
        </>
    )
}

export default Message