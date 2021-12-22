import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { handle_edit } from '../redux/actions';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');


const Edit = ({todo}) => {
    const [modalIsOpen, setIsOpen] = React.useState (false);
    
    const [edit, setEdit] = useState(todo.action)
const dispatch = useDispatch()
  function openModal() {
    setIsOpen(true);
  }
const handleedit= ()=>{
  const edittask={
    id:todo.id,
    action:edit,
    isShown:todo.isShown
  }
dispatch(handle_edit(edittask))
closeModal()
}
  

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
            <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          
              <label >Edit task:</label>
              <input type="text" value={edit} onChange={(e)=>setEdit(e.target.value)}/>
              <button onClick={handleedit}>confirme</button>
              <button onClick={()=>closeModal()}>cancel</button>
          
      </Modal>
        </div>
    )
}

export default Edit
