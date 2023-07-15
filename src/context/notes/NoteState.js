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
          localStorage.getItem('token'),
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
          localStorage.getItem('token'),
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
        localStorage.getItem('token'),
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
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
      body: JSON.stringify({title,description,tag}),
    });
   const json= await response.json();

let newnotes=JSON.parse(JSON.stringify(notes))


    for (let index = 0; index < newnotes.length; index++) {
      const element = newnotes[index];
      if (element._id === id) {
        newnotes[index].title = title;
        newnotes[index].description = description;
        newnotes[index].tag = tag;
        break;
      }
    }
    setnotes(newnotes)

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
