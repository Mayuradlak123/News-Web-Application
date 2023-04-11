import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './register.css'

export default class Register extends Component {

  render() {
  
    const singup=()=>{
      var name=document.getElementById('name').value; 
      var email=document.getElementById('email').value;
      var password=document.getElementById('pass').value;
      if(name.length===0 || email.length===0 || password.length===0){
          document.getElementById('warning').innerText="Please fill all details ";
      }
      else{
        alert("Registered Successfully!!")
        window.location.reload();
      }
          }
    return (
      
      <div >
     
            <div className="usercontainer">
              <h3>Sign Up </h3>
                 <input type="text" name='name' placeholder='Name' /> <br />
                 <input type="email" name='email' placeholder='Email' /> <br />

                 <input type="number" name='phone' placeholder='Contact No.' /> <br />

                 <input type="password" name='password' placeholder='create new password' /> <br />

                 <input type="password" name='password' placeholder='Confirm password' /> <br /> <br />
<button>Register</button>
            </div>
    </div>
    
    )
  }
}
