import { useState } from "react";
import NoteContext from "./noteContext";
import { json } from "react-router-dom";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial =[]

  const [notes, setnotes] = useState(notesInitial);
  const getNote =  async() => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMDlhZmI3YmFhZWNkZWRhYmRiN2JiIn0sImlhdCI6MTY4ODMwMjEzMn0.yc2u972LDd6QWFsxSc100cWa2ubHgQ0QGr0EF_KgXwM",
        },
        
      });
      const json=await response.json()
   console.log(json)
   setnotes(json)
  };

  // Add note
  const addNote =  async(title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMDlhZmI3YmFhZWNkZWRhYmRiN2JiIn0sImlhdCI6MTY4ODMwMjEzMn0.yc2u972LDd6QWFsxSc100cWa2ubHgQ0QGr0EF_KgXwM",
        },
        body: JSON.stringify({title,description,tag}),
      });
   
    const note = {
      _id: "64a1ebaa08256adb213f1f77",
      user: "64a09afb7baaecdedabdb7bb",
      title: title,
      description: description,
      tag: tag,
      date: "2023-07-02T21:27:06.575Z",
      __v: 0,
    };

    setnotes(notes.concat(note));
  };

  // dlete mote
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMDlhZmI3YmFhZWNkZWRhYmRiN2JiIn0sImlhdCI6MTY4ODMwMjEzMn0.yc2u972LDd6QWFsxSc100cWa2ubHgQ0QGr0EF_KgXwM",
      },
     
    });
   const json=response.json();
   console.log(json)
    // console.log("deleting the note" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });

    setnotes(newNotes);
  };

  // edit note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMDlhZmI3YmFhZWNkZWRhYmRiN2JiIn0sImlhdCI6MTY4ODMwMjEzMn0.yc2u972LDd6QWFsxSc100cWa2ubHgQ0QGr0EF_KgXwM",
      },
      body: JSON.stringify({title,description,tag}),
    });
   const json=response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setnotes, addNote, deleteNote, editNote,getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
