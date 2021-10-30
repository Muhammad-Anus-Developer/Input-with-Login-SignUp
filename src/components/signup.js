import React, { useState } from "react";
import "../App.css"
import firebase from "firebase";
function Signup(){

  

const [your_name, setYour_Name] = useState("")
const [father_name, setFather_name] = useState("")
const [phone_number, setPhone_number] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [values, setValues] = useState("")



const firebaseConfig = {
    apiKey: "AIzaSyBjM5nFrxaCq6pXePLpDJ2kHl7GOaf_rtY",
    authDomain: "inputdatas.firebaseapp.com",
    databaseURL: "https://inputdatas-default-rtdb.firebaseio.com",
    projectId: "inputdatas",
    storageBucket: "inputdatas.appspot.com",
    messagingSenderId: "1056710307820",
    appId: "1:1056710307820:web:f3028bb1b40e52ed75dac9",
    measurementId: "G-0HC7FE3SZ2"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }

 
    // Initialize variables
    const auth = firebase.auth()
    const database = firebase.database()
    


function Created(){
    
auth.createUserWithEmailAndPassword(email, password)
      .then(function() {
        
        var user = auth.currentUser
    
     
        var database_ref = database.ref()
    

   
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + "time ==>" + "" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
    
        var user_data = {
            name : your_name,
            fatherName : father_name,
            phoneNumber : phone_number,
            e_mail : email,
            passwords : password,
            dates : date
        }
        setValues(user_data);
  
      
        database_ref.child('users/' + user.uid).set(user_data)
    
       
        alert('User Created!!')
  window.location.replace("/")
  
      })
      .catch(function(error) {
        
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message + error_code)
      })
    }



    return(
            <div>
                <div id="content_containeras App">
              
                       <br />
                       <br />
                <div id="form_containeras">
                    <div id="form_header_containeras">
                        <h2 id="form_header">Sign Up </h2>
                    </div>
    
                    <div id="form_content_containeras">
                        <div id="form_content_inner_containeras">
                            <input type="text" id="your_name"  className="my-2" onChange={(e)=>setYour_Name(e.target.value)} placeholder="Enter Your Name" />
                            <input type="text" id="father_name"  className="my-2" onChange={(e)=>setFather_name(e.target.value)}  placeholder="Enter Your Father's Name" />
                            <input type="number" id="phone_number"  className="my-2" onChange={(e)=>setPhone_number(e.target.value)}  placeholder="Enter Your Phone Number" />
                            <input type="email" required id="email"  className="my-2" onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Your Email Address" />
                            <input type="password" id="password"  style={{marginBottom:"40px"}}  onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter Password" />
                            
                            <div className="text-center">
                            <button className="btn btn-danger px-5 py-2" style={{marginBottom:"20px"}} onClick={()=>Created()}>Register</button>
                        </div>
                       
    
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    
  
export default Signup;