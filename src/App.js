import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './style/app.css';

function App() {
  //Tasks (Todo List) State
  const [toDo, setTodo] = useState ([
    {
      id: 1,
      title: "Create Coffee",
      status: true
    },
    {
      id: 2,
      title: "Code until you die",
      status: false
    },
  ]);

  //Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //Add task
  const addTask = () => {
    //
  }

  //Delete Task
  const deleteTask = (id) => {
    //
  }

  //Mark Task as done
  const markDone = (id) => {
    //
  }

  //cancel update
  const cancelUpdate = () => {
    //
  }

  
  //change/task e fro event
  const changeTask = (e) => {
    //
  }

   //Update task
   const updateTask = (id) => {
    //
  }
  
  return (
    <div className="container App">
      <br /> <br />
      <h2>Listahan</h2>
      <br /> <br />

      {toDo && toDo.length ?
          toDo.map( (task, index)  => {
            return(
              <React.Fragment key={task.id} class="taskBorder">
                
                <div className="col taskBg">
                  <div className={task.status ? 'done' : ''} >
                    <span className="taskNumber">{index + 1 + " "}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                </div>
              </React.Fragment>
            )
          })
        :
         <p>No tasks</p>
      }
    </div>
      
  );
}

export default App;
