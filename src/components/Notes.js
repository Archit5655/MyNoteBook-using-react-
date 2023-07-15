import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import { redirect, useNavigate } from "react-router-dom";
// import Notes from './Notes';
const Notes = (props) => {
  let history=useNavigate()
  const context = useContext(noteContext);
  const { notes, getNote,editNote } = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNote();

    }
    else{
      history("/login")

    }
  }, []);
  const ref = useRef(null);
  const refclose = useRef(null);
  const [note, setnote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const updateNote = (currentnote) => {
    ref.current.click();
    setnote({
      id: currentnote._id,
      etitle: currentnote.title,
      edescription: currentnote.description,
      etag: currentnote.tag,
    });
   
  };
  const handleclick = (e) => {
    console.log("updting the note", note);
    editNote(note.id,note.edescription,note.etitle,note.etag)
    refclose.current.click();
    props.showAlert("Updated Successfully","success")
  };
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Addnote showAlert={props.showAlert}/>

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-8 mx-8 ">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    value={note.etitle}
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onchange}
                  />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="edescription" className="form-label">
                    description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={note.edescription}
                    id="edescription"
                    name="edescription"
                    onChange={onchange}
                  />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={note.etag}
                    id="etag"
                    name="etag"
                    onChange={onchange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refclose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleclick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((notes) => {
          return <Noteitem notes={notes} showAlert={props.showAlert} updateNote={updateNote} />;
        })}
      </div>
    </>
  );
};

export default Notes;
