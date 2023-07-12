import React,{useContext} from 'react'

// import Note from '../../Backend/modules/Note';
import noteContext from "../context/notes/noteContext";
const Noteitem = (props) => {
  const context = useContext(noteContext)
  const { notes } = props;
  const { deleteNote } = context;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <p className="card-text">{notes.description}</p>
          <i className="fa-regular fa-trash-can" onClick={()=>{deleteNote(notes._id)}}></i>
          <i className="fa-regular fa-pen-to-square mx-3" ></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
