import React,{useState} from 'react'

import { Link } from 'react-router-dom'
import {auth} from './Firebase'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import './Style.css'


const Login = () => {

const [email , setEmail] = useState('');
const [password, setPassword ] =  useState('');


const handleSubmit = async(e)=>{

e.preventDefault()
try {
// app.auth().createUserWithEmailAndPassword( auth,email , password)

await createUserWithEmailAndPassword(auth, email, password);
console.log("Account Created");

}
catch(err){

    console.log(err);
}

}




  return (
    <div className='sign-container'>

    <form className='signup-form' onClick={handleSubmit}   >
    <h2>Sign Up</h2>
    <label htmlFor='email'>
    Email: 
    <input type='text'  onChange={(e) => setEmail(e.target.value)} placeholder='Email'  />
    </label>
    
    <label htmlFor='password'>
    
    Password:
    <input type='password'     onChange={(e) => setPassword(e.target.value)}  placeholder='Password' />
    </label>
    
    <button type='submit'  >Login</button>
    <p>Already Registered?<Link to='/' style={{textDecoration:'none', color:'red' , marginLeft:'5px'}} >Home</Link></p>
    
    </form>
    
        </div>
  )
}

export default Login