import {useState} from 'react';
import {FilterButton} from './FilterButton';
import ButtonGroup from '@mui/material/ButtonGroup';

const FILTER_TYPE = {
    ALL: "ALL",
    DONE: "DONE",
    UNDONE: "UNDONE"
};

export const Filter = () => {
    const [filterState, setFilterState] = useState(FILTER_TYPE.DONE);

    const changeFilter = (filterType) => {
        setFilterState(filterType);
    }

    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            {
                Object.keys(FILTER_TYPE).map((filterType) => (
                    <FilterButton 
                        label={filterType[0] + filterType.slice(1).toLowerCase()}
                        onClick={changeFilter}
                        filterType={filterType}/>      
                ))
            }
        </ButtonGroup>)
};

