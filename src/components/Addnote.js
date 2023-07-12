import React,{useContext,useState} from 'react'
import noteContext from "../context/notes/noteContext"
const Addnote = () => {
  const context = useContext(noteContext)
  const{addNote}=context;


  const  [note, setnote] = useState({title: "",description:"",tag: "default"})
  const handleclick=(e)=>{
    e.preventDefault()
addNote(note.title,note.description,note.tag)

  }
  const onchange=(e)=>{
setnote({...note,[e.target.name]: e.target.value})
  }
  return (
    <div >
    <h1>Add A Note</h1>
    <div className="container">
    <form>
  <div className="mb-8 mx-8">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp"  onChange={onchange}/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">description</label>
    <input type="text" className="form-control" id="description" name='description' onChange={onchange} />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    {/* <label className="form-check-label" for="exampleCheck1">Check me out</label> */}
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
</form>
      
    </div>

    </div>
   
  )
}

export default Addnote
