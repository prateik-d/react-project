import { Button, List, ListItem, ListItemText, makeStyles, Modal } from '@material-ui/core';
import React, {useState} from 'react';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete'; 
import EditIcon from '@material-ui/icons/Edit';
import './Todo.css';
// import { makeStyles } from '@material-ui/core/styles'; 


const useStyles = makeStyles((theme) => ({
    paper: {
        position:'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
}));

function Todo(props) {

    // console.log(props.todo.timestamp);
    // console.log(props.todo.timestamp['seconds']);
    
    // var myDate = props.todo.timestamp['seconds'];
    // myDate = Date(myDate._seconds * 1000);

    // console.log(new Date(props.todo.timestamp.seconds*1000))
    // var myDate = (props.todo.timestamp.seconds*1000);

    // var myDate = new Date(props.todo.timestamp.seconds*1000).toString();    




    // console.log(myDate);


    const classes = useStyles();
    const [open, setOpen] =  useState(false);

    const [input, setInput] = useState();

    const handleOpen = () => 
    {
        setOpen(true);
    };

    // const handleClose = () => 
    // {
    //     setOpen(false);
    // };

    const updateTodo = () =>
    {
        
        db.collection('todos').doc(props.todo.id).set({
            todo:input
        }, { merge:true })
        
        setOpen(false);



    }

    return (
        <div className="todo__box">
            <Modal 
                open={open}
                onClose={e => setOpen(false)}
                >
                    <div className={classes.paper}>
                        {/* <h1>In model</h1> */}
                        <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                        <Button onClick={updateTodo}>Update Todo</Button>
                    </div> 
            </Modal>
            <List>
                <ListItem>
                    <ListItemText  className="todo__list" primary={props.todo.todo} />
                </ListItem>
                <EditIcon onClick={e => setOpen(true)} title="Edit"></EditIcon>
                <DeleteIcon onClick={event => {db.collection('todos').doc(props.todo.id).delete()}} title="Delete"></DeleteIcon>
            </List>
        </div>
    )
}

export default Todo
