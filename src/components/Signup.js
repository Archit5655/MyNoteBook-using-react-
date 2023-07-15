import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
    let history=useNavigate()
    const [credentials, setcredentials] = useState({ name:"",email: "", password: "" ,cpassword:""});
    const handleSumbit = async (e) => {
        e.preventDefault();
        const{name,email,password}= credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password
      }),
    });
    const json = await response.json();
    console.log(json);
        // redirecr 
        if(json.success){

            localStorage.setItem('token',json.jwtdata)
            history("/home")
            props.showAlert("Accout created Successfullly","success")
        }
        else{
           props.showAlert("Invalid Credentials","danger")

        }


  };
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (

    <div className="container">
      <h2>Please Create a accoutt Before Loging In</h2>
   
      <form onSubmit={handleSumbit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          {" "}
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          aria-describedby="emailHelp"
onChange={onChange}
        />
      </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" required minLength={5}id="password" onChange={onChange} name="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            {" "}
            Confirm Password
          </label>
          <input type="password" className="form-control"required minLength={5} id="cpassword" name="cpassword" onChange={onChange} />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
