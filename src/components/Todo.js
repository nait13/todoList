import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';

// color 'primary' 'error'

export const Todo = () => {
    return <Chip
        clickable
        label='todo item'
        deleteIcon={<DeleteIcon/>}
        sx={{fontSize: 16, padding: 2.2}}
        icon={<CheckCircleIcon/>}
        onClick={()=>{console.log('click')}}
        onDelete={()=>{console.log('delete')}}
    />
};