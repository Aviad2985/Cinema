import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RangeSlider from 'react-bootstrap-range-slider';

const SliderFilter = ({ name, updateOnChange, min, max, step }) => {

const [operator, setOperator] = useState("<");
const [sliderVal, setSliderVal] = useState(0);

function handleOnChange(e) {
    setOperator(e.target.value);
    updateOnChange(name, operator, sliderVal);
}

function onSliderChange(e) {
    setSliderVal(e.target.value);
    updateOnChange(name, operator, sliderVal);
}

    return (
        <div  className="slider-filter-container">
                <span>{`Filter by ${name}`}</span>
                <select name="runtime" onChange={handleOnChange} value={operator}>
                    <option value="<">LESS THAN</option>
                    <option value=">">MORE THAN</option>
                </select>
                <RangeSlider min={min} max={max} step={step} value={sliderVal} onChange={onSliderChange} />
        </div>
    )
}

SliderFilter.propTypes = {

}

export default SliderFilter;
