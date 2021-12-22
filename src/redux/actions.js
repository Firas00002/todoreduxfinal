import { HANDLEDELETE, HANDLEDONE, HANDLE_ADD, HANDLE_EDIT, HANDLE_FILTER } from "./actionTypes"

export const handledelete=(id)=>{
    return{
        type:HANDLEDELETE,
        payload:id
    }
}

export const handledone=(id)=>{
    return{
        type:HANDLEDONE,
        payload:id
    }
}

export const handle_add=(newtask)=>{
    return{
        type:HANDLE_ADD,
        payload:newtask
        
    }
}
export const handle_edit=(edittask)=>{
    return{
        type:HANDLE_EDIT,
        payload:edittask
        
    }
}
export const handle_filter=()=>{
    return{
        type:HANDLE_FILTER,
        
        
    }
}