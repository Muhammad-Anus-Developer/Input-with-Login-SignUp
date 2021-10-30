import React, { useState } from "react";
import "../App.css"
import firebase from "firebase";

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


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
        
        function Login () {
            
           let e_mail = email;
           let passwords = password;
          
          
            auth.signInWithEmailAndPassword(e_mail, passwords)
            .then(function() {
              // Declare user variable
              var user = auth.currentUser
          
              // Add this user to Firebase Database
              var database_ref = database.ref()
          
         
        
              // Create User data
              var user_data = {
                last_login : Date.now()
              }
          
              // Push to Firebase Database
              database_ref.child('users/' + user.uid).update(user_data)
          
            //redirect
            window.location.replace("/alisonsinputdata")


              // DOne
            alert('User Logged In Successfully!!');
            
        
          
            })
            .catch(function(error) {
              // Firebase will use this to alert of its errors
              var error_code = error.code
              var error_message = error.message
          
              alert(error_message)
            })
          }
          

    return(
        <div>

<div id="content_container">
            <br />

    <br />
    <br />
            <div id="form_container">
                <div id="form_header_containeras">
                    <h2 id="form_header">Login </h2>
                    
                </div>
                

                <div id="form_content_containeras">
                    <div id="form_content_inner_containeras">
                      
                        <input type="email" required id="email" className="my-2" onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Your Email Address" />
                        <input type="password"  style={{marginBottom:"40px"}} onChange={(e)=>setPassword(e.target.value)} id="password" placeholder="Enter Password" />

                        <div className="text-center">
                            <button className="btn btn-danger px-5 py-2" style={{marginBottom:"20px"}}  onClick={()=>Login()}>Login</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Login;