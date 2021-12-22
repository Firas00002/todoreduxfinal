import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handledelete, handledone } from '../redux/actions'
import Edit from './Edit'

const Todo = () => {
    const {todo,filter} = useSelector (state => state)
    const dispatch = useDispatch()
    return (
        <div>
            {
                !filter?
            
            todo.map((el,i)=> <li id={el.isShown?"Appp":""} key={i}>
             {el.action} 
             <div>
                 <button onClick={()=>dispatch(handledelete(el.id))}>Delete</button> 
             <button onClick={()=>dispatch(handledone(el.id))}>Done</button> 
            <Edit todo={el}/>
            </div>
             
            </li>):todo.filter(todo=>!todo.isShown).map((el,i)=> <li id={el.isShown?"Appp":""} key={i}>
             {el.action} 
             <div>
                 <button onClick={()=>dispatch(handledelete(el.id))}>Delete</button> 
             <button onClick={()=>dispatch(handledone(el.id))}>Done</button> 
            <Edit todo={el}/>
            </div>
             
            </li>)
            }
        </div>
    )
}

export default Todo
