import React,{useContext,useState} from 'react'
import noteContext from "../context/notes/noteContext"
const Addnote = (props) => {
  const context = useContext(noteContext)
  const{addNote}=context;


  const  [note, setnote] = useState({title: "",description:"",tag: "default"})
  const handleclick=(e)=>{
    e.preventDefault()
addNote(note.title,note.description,note.tag)
props.showAlert("Note Added Successfully","success")
  }
  const onchange=(e)=>{
setnote({...note,[e.target.name]: e.target.value})

  }
  return (
    <div >
    <h1>Add A Note</h1>
    <div className="container">
    <form >
  <div className="mb-8 mx-8 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp"  onChange={onchange}/>
  
  </div>
  <div className="mb-3 ">
    <label htmlFor="description" className="form-label">description</label>
    <input type="text" className="form-control" id="description" name='description' onChange={onchange}  />
  </div> 
   <div className="mb-3 ">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' onChange={onchange}  />
  </div>

  <button type="submit" className="btn btn-primary" onClick={handleclick}>AddNote</button>
</form>
      
    </div>

    </div>
   
  )
}

export default Addnote
