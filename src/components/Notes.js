
import React,{useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
// import Notes from './Notes';
const Notes = () => {
    const context = useContext(noteContext)
    const{notes,setnotes}=context;
  return (
   
    <div className='row my-3'>
      
    <h1>Your Notes</h1>
    {notes.map((notes)=>{
      return <Noteitem notes={notes}/>
    })}
    </div>
  )
}

export default Notes
