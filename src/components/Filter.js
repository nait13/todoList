import {useState} from 'react';
import {FilterButton} from './FilterButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import {FILTER_TYPE} from '../constants/filterConstants';
import {useSelector} from 'react-redux'; // TODO

export const Filter = () => {
    const [filterState, setFilterState] = useState(FILTER_TYPE.ALL);

    const changeFilter = (filterType) => {
        setFilterState(filterType);
    }

    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            {
                Object.keys(FILTER_TYPE).map((filterType) => (
                    <FilterButton 
                        disabled={filterType === filterState}
                        clickHandler={changeFilter}
                        filterType={filterType}
                        key={filterType}/>      
                ))
            }
        </ButtonGroup>)
};
