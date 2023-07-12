
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
   
    const notesInitial=[

        
            {
                "_id": "64a1ebaa08256adb213f1f77",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaa08256adb213fwefa1f77",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaa08256adb213f1f7greger7",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaa08256adb213f1f77tegte",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaa08256adb213f1f77gteg",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaa08256adb213f1f77rgr",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaaefwef08256adb213f1f77",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaawfwfwef08256adb213f1f77",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,
             {
                "_id": "64a1ebaa0fwf8256adb213f1f77",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            }
        
    
]



const [notes, setnotes] = useState(notesInitial)

// Add note 
const addNote=(title,description,tag)=>{
    
 const note={
    "_id": "64a1ebaa08256adb213f1f77",
    "user": "64a09afb7baaecdedabdb7bb",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2023-07-02T21:27:06.575Z",
    "__v": 0
 
}

setnotes(notes.concat(note))
}

// dlete mote
const deleteNote=(id)=>{
console.log ("deleting the note"+ id )
const newNotes=notes.filter((note)=>{ return note._id!==id})

setnotes(newNotes)
}


// edit note
const editNote=(id,title,description,tag)=>{
    

}


return <NoteContext.Provider value={{notes,setnotes,addNote,deleteNote,editNote}}>
    {props.children}
  </NoteContext.Provider>;
};
export default NoteState;
