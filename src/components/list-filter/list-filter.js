import React, { useState } from 'react';
import { updateFiltersList } from '../../infrastructure/movies-actions-creators';
import SliderFilter from './filters/slider-filter';
import FreeText from './filters/free-text';
import { useDispatch } from 'react-redux';
import './list-filter.scss';

    const ListFilter = ({ itemsList }) => {
    const dispatch = useDispatch();
    const [filtersList, setFiltersList] = useState([]);

    function onFilterUpdate(name, operator, value) {
        const newFiltersList = [...filtersList];
        const filterIndex = newFiltersList.findIndex(f=> f.name === name);
        filterIndex !== -1 ?  newFiltersList[filterIndex] = { name , operator, value } : newFiltersList.push({ name , operator, value });
        setFiltersList(newFiltersList);
        dispatch(updateFiltersList(newFiltersList));
    }

    return (
        <div  className="filter-container">
            <SliderFilter min={0} max={10} name="rating" step={0.5} updateOnChange={onFilterUpdate} />
            <SliderFilter min={ Math.min(...itemsList.map(o => parseInt(o.released)))} max={ Math.max(...itemsList.map(o => parseInt(o.released)))} name="released" step={1} updateOnChange={onFilterUpdate} />
            <FreeText name="title" updateOnChange={onFilterUpdate} />
        </div>
    )
}

ListFilter.propTypes = {

}

export default ListFilter;
