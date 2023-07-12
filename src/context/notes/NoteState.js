
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
                "_id": "64a1ebaa08256adb213f1f77",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaa08256adb213f1f77",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaa08256adb213f1f77",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaa08256adb213f1f77",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaa08256adb213f1f77",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaa08256adb213f1f77",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,    {
                "_id": "64a1ebaa08256adb213f1f77",
                "user": "64a09afb7baaecdedabdb7bb",
                "title": "terimaka",
                "description": "nikal lawde",
                "tag": "personal",
                "date": "2023-07-02T21:27:06.575Z",
                "__v": 0
            } ,
             {
                "_id": "64a1ebaa08256adb213f1f77",
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
const deleteNote=()=>{

}


// edit note
const editNote=()=>{

}


return <NoteContext.Provider value={{notes,setnotes,addNote,deleteNote,editNote}}>
    {props.children}
  </NoteContext.Provider>;
};
export default NoteState;
