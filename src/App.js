import React, {useEffect, useState} from 'react';
import Todo from './Todo';
import { 
          Button, 
          FormControl ,
          Input,
          InputLabel
        }
        from "@material-ui/core";
import './App.css';

import db from './firebase';
import firebase from 'firebase';

function App() 
{

  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState('');

  useEffect(()=> {

      db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        
        // setTodos(snapshot.docs.map(doc => doc.data().todo))

        setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo, timestamp: doc.data().timestamp})))
      })

  }, []);  

  const addTodo = (event) => {
    // this will call when we click the button

    event.preventDefault();

    // console.log('in fun');

    db.collection('todos').add({
       todo: input,
       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput('');
  }

  


  return (
    <div className="App">

      <h1>hello world</h1>

      <form>

            <FormControl>
              <InputLabel>Add To Do</InputLabel>
              <Input value={input} onChange={event => setInput(event.target.value)} />
            </FormControl>
          
            <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>
              Add To Do
            </Button>
            
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
      
    </div>
  );
}

export default App;
