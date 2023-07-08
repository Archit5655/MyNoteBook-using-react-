import React from 'react'
// import Note from '../../Backend/modules/Note';

const Noteitem = (props) => {
     const {notes}=props;
  return (
    <div className='col-md-3'>
      
      <div className="card my-3" >
  <div className="card-body">
    <h5 className="card-title">{notes.title}</h5>
    <p className="card-text">{notes.description}</p>
    <i className="fa-regular fa-trash-can"></i>
    <i className="fa-regular fa-pen-to-square mx-3" ></i>
  </div>
</div>
    </div>
  )
}

export default Noteitem
