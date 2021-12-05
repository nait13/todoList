import {useState} from 'react';
import Stack from '@mui/material/Stack';
import {TextField, Button, Todo} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {getTodos} from '../redux/todoSelectors';
import {addTodo, deleteTodo} from '../redux/todoActions';


export const TodoListPage = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(getTodos); 

    const handleChange = ({target: {value}}) => {
        setTodoText(value);
    };

    const addTodoHandler = () => {
        dispatch(addTodo(todoText));
        setTodoText('');
    };

    const onTodoClick = () => {
        console.log('TODO CLICKED!');
    }

    const onTodoDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    return (<>
        <h1>Todo list</h1>
        <Stack
            spacing={10}
            direction="row"
            justifyContent="center"
            alignItems="center">
                <TextField
                    handleChange={handleChange}
                    id='todo-text-input'
                    hintText='What you are going to do?'
                    fieldName='TODO'
                    value={todoText}
                />
                <Button type='add' text='add' handleClick={addTodoHandler}/>
        </Stack>
        <Stack
            marginTop={10}
            spacing={5}
            justifyContent="center"
            alignItems="center" >
            {todos.map((todoData) => 
                <Todo 
                    {...todoData} 
                    handleClick={onTodoClick}
                    handleDelete={onTodoDelete}                   
                    key={todoData.id} />)}
        </Stack>
    </>)
};