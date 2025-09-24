import React, { useState, useEffect } from 'react'
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'

const cookies = new Cookies();

var cc;
var tt;
toast.configure()

export default function Login(props) {

  const [userid, setId] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = () => {
    if (userid === '') {
      toast.warn('Username can not be blank!', { position: toast.POSITION.TOP_CENTER })
      return;
    }
    if (password === '') {
      toast.warn('Password can not be blank!', { position: toast.POSITION.TOP_CENTER })
      return;
    }
    var ssid = cookies.get('sid');
    axios.post('https://liveapi247.live/api4/MatchManagerLogin', {
      id: userid,
      password: password
    })
      .then(result => {
        if (result.status === 200) {

          cookies.set('sid', result.data, { path: '/' });
          props.checkShowLogin(true);
          //window.location.href = '/';
        }
        else if (result.status === 205) {

          toast.warn('User blocked', { position: toast.POSITION.TOP_CENTER })
          //document.getElementById("errorMsg").innerHTML="Username or password incorrect!";

        }
        else {

          toast.warn('Username or password incorrect!', { position: toast.POSITION.TOP_CENTER })
          //document.getElementById("errorMsg").innerHTML="Username or password incorrect!";
        }
      }
      ).catch(e => {
        //setIsError(true);
      });
  };


  return (
    <React.Fragment>
      {/* <div className="loginnewd">
  <h1>Globe Manager</h1>
  <div>
    <input className="inputttt" type="text" autocomplete="off" value = {userid} onChange ={(e)=>{setId(e.target.value)}} placeholder="Username" required="required" />
    <input className="inputttt" type="password" autocomplete="off" value = {password} onChange ={(e)=>{setPassword(e.target.value)}} placeholder="Password" required="required" />
    <button type="submit" className="btnnnn btnnnn-primary btnnnn-block btnnnn-large" onClick = {()=>{handleLogin()}}>Login</button>
  </div>
</div> */}
      <div class="loginBox"> <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" />
        <h3 style={{ color: "#fff" }}>Sign in here</h3>
        <div >
          <div class="inputBox">
            <input id="uname" type="text" name="Username" placeholder="Username" value={userid} onChange={(e) => { setId(e.target.value) }} />
            <input id="pass" type="password" name="Password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div> <input type="submit" name="" value="Login" onClick={() => { handleLogin() }} />
        </div>



      </div>
    </React.Fragment>
  )
}
