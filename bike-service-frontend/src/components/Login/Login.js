import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
function Login() {
	function handleLogin(event){
        event.preventDefault()
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value

        var key ={
            username:username,
            password:password
        }

        if(username === ''){
            alert("enter user name")
        }
        else if(password === ''){
            alert("enter password")
        }
        else{
            axios.post("http://localhost:3008/login",key)
            .then((res)=>{
            if(res.data.status==="empty_set"){
                alert("no user found plz register")
            }
            else if(res.data.status==="success"){
                alert("user login successfull")
                window.location.href='/owner-dashboard'
            }
            else if(res.data.status === "invalid_user"){
                alert("invalid password")
            }
            else{
                alert("invalid username")
            }

            })
        }
    }
return (
		<div id="loginbg" className="d-flex">
			<div id="inDiv" className="m-auto row container">
				<div className="col-12 col-lg-5 d-flex">
					<div id="loginImg" className="m-auto p-3">
					<img src='https://www.pngall.com/wp-content/uploads/8/Ducati-Logo-PNG-Free-Image.png'/>
					</div>
				</div>
				<div className="col-12 col-lg-5 m-auto">
					<div id="form" className="p-2 text-center">
						<h3 className="p-3">Login</h3>
						<form className="container" onSubmit={handleLogin}>
							<div className="inputForm p-1">
							 <FontAwesomeIcon icon={faEnvelope} className="text-danger col-2"/><input type="email"
									name="email"
								 className="eName p-2 col-8" placeholder="Email" id='username' />
							</div><br />
							<div className="inputPassword">
							<FontAwesomeIcon icon={faLock} className="text-danger col-2"/><input type="password"
									name="password"
									 className="password p-2 col-8" placeholder="Password" id='password' />
							</div><br />
							<div>
								<button className='button p-2 col-8' type='submit'>Login</button>
							
					
								
							</div><br />
							<div className='pt-4'>
								<p>Forgot <a href="#" className="text-danger forgot ">Username/Password</a></p>
							</div><br />
							<div>
								<a href='/register' className="text-danger createAct">Create your account</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
