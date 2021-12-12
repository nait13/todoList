import Button from '@mui/material/Button';

export const FilterButton = ({filterType, clickHandler, label}) => {
    return (<Button onClick={() => clickHandler(filterType)} >
                {label}
            </Button>)
};