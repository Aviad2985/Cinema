import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FreeText = ({ name, updateOnChange }) => {

const [txtVal, setTxtVal] = useState("");

function handleOnChange(e) {
    setTxtVal(e.target.value);
    updateOnChange(name, null, txtVal);
}
    return (
        <div className="freeText-container">
            <span>Free Search by movie name</span>
            <input autoComplete="off" name={name} onChange={handleOnChange} value={txtVal}></input>
        </div>
    )
}

FreeText.propTypes = {

}

export default FreeText;
