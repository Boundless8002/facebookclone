import React from 'react' ;
import "./CSS/login.css";
import { auth,provider } from './firebase';
import {useStateValue} from "./StateProvider" ;

function Login() {

  const [{},dispatch]=useStateValue();
  const signIn=()=>{
    auth.signInWithPopup(provider).then(result=>{
    // console.log(result);
    var credential=result.credential ;

    const photoURL=`${result.user.photoURL}?access_token=${credential.accessToken}` ;
    
    dispatch({
      type:"SET_USER",
      user:{
        displayName : result.user.displayName,
        photoURL:photoURL
      }
    })
    }).catch(error=>console.log(error))
  }
 
  return (
    <div className="login_wrapper">
        <div className="login">
        <h2 style={{color:'blue'}}>facebook</h2>
      <h3>Sign in with facebook</h3>
      <form>
      <input  class="loginid" type="text" placeholder="Enter email" required/><br/>
      <input  class="loginid" type="password" placeholder="password" required/>
      </form>
      <button onClick={signIn}>Login with facebook</button>
      </div>
    </div>
  )
}

export default Login  ;
