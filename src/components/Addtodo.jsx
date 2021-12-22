import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handle_add, handle_filter } from '../redux/actions'

const Addtodo = () => {
    const {todo} = useSelector(state => state)
    const donetasks=todo.filter(el=>el.isShown).length
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const handlesubmit=(e)=>{
        e.preventDefault();
        const newtask={
        id:Math.random(),
        action:input,
        isShown:false,
        }
        dispatch(handle_add(newtask))
        setInput('')
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
             <h1>To do List</h1> 
             <p style={{display:'flex',fontSize:20,color:'black'}}>* all tasks:<p style={{color:'red'}}>{todo.length}</p></p>  
             
             <p style={{display:'flex',fontSize:20,color:'black'}}>* done tasks: <p style={{color:'blue'}} >{donetasks}</p></p>
                <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/> 
                <button >addtask</button>
            </form>
            <button onClick={()=>dispatch(handle_filter())}>Filter done task</button>
        </div>
    )
}

export default Addtodo
