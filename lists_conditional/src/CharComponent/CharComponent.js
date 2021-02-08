import React from 'react';

import './CharComponent.css'

const CharComponent = (props) => {
    return (
        <div className="charBlock" onClick={props.click}>
            <p>{props.letterProp}</p>
        </div>
    )
}

export default CharComponent