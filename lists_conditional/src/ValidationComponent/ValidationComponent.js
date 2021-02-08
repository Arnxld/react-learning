import React from 'react';

const Validation = (props) => {
    let validationText = ''

    if (props.lengthValidation < 5) {
        validationText = "text too short"
    } else {
        validationText = "text long enough"
    }

    return (
        <p>{validationText}</p>
    )
}

export default Validation;