import React, {useState} from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import "./todo.css";
import {addItem, deleteItem, removeAll, testAlert} from "../Actions/index";

const ToDo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state)=>state.todoReducers.list);
    const dispatch = useDispatch();

    // , console.log("flag"), setInputData(' ')
    // dispatch(addItems(inputData))

    const test = () => {
        alert(inputData);
        setInputData(' ');
    }

    return ( 
    <>
       <figure>
           <figcaption>Add Items Here: </figcaption>
       </figure>
       <div className="addItems">
            <input 
                type="text" 
                placeholder="What to do ?" 
                value={inputData} 
                onChange={(event) =>{setInputData(event.target.value)}}
                >
                </input>
            <i className="fa fa-plus add-btn" onClick = {() =>  dispatch(addItem(inputData), setInputData(''))}></i> 
       </div>
       <div className="showItems">
           <h3>Things to do:</h3>
           {
               list.map(item => {
                   return(
                   <div key={item.id}>
                        <td>
                            {item.data}
                            <button>
                             <i className="far fa-trash-alt add-btn" onClick = {() =>  dispatch(deleteItem(item.id))}></i> 
                            </button>
                        </td>
                   </div>
                   )
               })
           }
       </div>
    </>
    )
}

export default ToDo;