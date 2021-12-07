import {useState} from "react";
import "./SignUpCss.css";

function SignUp(){

    let [isName,setIsName]=useState("");
    let [isEmail,setIsEmail]=useState("");
    let [isPassword,setIsPassword]=useState("");
    let [isSignedUp,setIsSignedUp]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        let obj={isName,isEmail,isPassword};

        fetch("http://localhost:8000/details",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(obj)
        })
        setIsSignedUp(true);
    }

    if(isSignedUp==false){
        return (
            <div id="SignUp">
                <form onSubmit={handleSubmit}>
                    <label>Enter the student's name:</label>
                    <br/><br/>
                        <input
                        type="text"
                        value={isName}
                        onChange={(object)=>{setIsName(object.target.value)}}
                        placeholder="Student's Name Surname" 
                        required/>
                    <br/><br/><br/>
                    <label>Enter the Email:</label>
                    <br/><br/>
                        <input
                        type="email"
                        value={isEmail}
                        onChange={(object)=>{setIsEmail(object.target.value)}}
                        placeholder="abcdef@gmail.com"
                        required/>
                    <br/><br/><br/>
                    <label>Password:</label>
                    <br/><br/>
                        <input 
                        type="password"
                        value={isPassword}
                        onChange={(object)=>{setIsPassword(object.target.value)}}
                        required/>
                    <br/><br/><br/>
                    <button id="dun">Submit</button>
                </form>
            </div>
        );
        }
    else
    {
        return (
            <div>
                <p>Signed Up Successfully.</p>
            </div>
        );
    }
}
export default SignUp;

//Fetching data from the server.
/*
    function submission(){
        fetch("http://localhost:3000")
        .then((res)=>{
            return res.json;
        })
        .then((data)=>{
            return data;
        })
        console.log(data);
        if(err){
            console.log(err);
            console.log("Error in fetching the data from the server.");
        }
    }
    */