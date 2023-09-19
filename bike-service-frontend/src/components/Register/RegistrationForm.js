import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  function handlelogin(event){
    event.preventDefault()
    var first_name=document.getElementById("firstName").value
    var last_name=document.getElementById("lastName").value
    var phone=document.getElementById("phone").value
    var email=document.getElementById("email").value
    var city=document.getElementById("city").value
    var state=document.getElementById("state").value
    var password=document.getElementById("password").value

    var key = {
        first_name:first_name,
        last_name:last_name,
        phone:phone,
        email:email,
        city:city,
        state:state,
        password:password
    }

    if(first_name === ''){
        alert ("Enter First name")
    }
    else if(last_name === ''){
        alert ("Enter Last name")
    }
    else if(phone === ''){
        alert ("Enter Phone")
    }
    else if(email === ''){
        alert ("Enter Email")
    }
    else if(city === ''){
        alert ("Enter City")
    }
    else if(state === ''){
        alert ("Enter State")
    }
    else if(password === ''){
        alert ("Enter Password")
    }
    else{
        axios.post("http://localhost:3008/register",key)
        .then((res)=>{
            if(res.data.status==="empty_set"){
                alert("data are not inserted")
                window.location.reload()
            }
            else if(res.data.status==="success"){
                alert("data are inserted successfully")
                window.location.href='/login'
            }
            else if(res.data.status==="error"){
                alert("username and password in valid")
            }
            else{
                alert("register first")
            }
        })
    }
    
}

return (
    <>

        {/* {
            getdata.map((value, index) => (
                <>
                    <table class="rwd-table">
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>email</th>
                        </tr>
                        <tr>
                            <td data-th="Movie Title">{value.name}</td>
                            <td data-th="Genre">{value.email}</td>
                            <td data-th="Year">{value.age}</td>
                        </tr>
                    </table>
                </>
            ))
        } */}


<div class="container m-5">
    <h1 className='text-center'>Create an account</h1>
    <form onSubmit={handlelogin}>
        <div className="form ">
            <label for="firstName">First Name</label>
            <input type="text" className="col-auto form-control" id="firstName" name="firstName" required/>
        </div>
        <div className="form">
            <label for="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" required/>
        </div>
        <div className="form">
            <label for="phone">Phone</label>
            <input type="tel" className="form-control" id="phone" name="phone" required/>
        </div>
        <div className="form">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" required/>
        </div>
        <div className="form ">
            <label for="city">City</label>
            <input type="text" className="form-control" id="city" name="city" required/>
        </div>
        <div className="form ">
            <label for="state">State</label>
            <input type="text" className="form-control" id="state" name="state" required/>
        </div>
        <div className="form">
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" required/>
        </div>
        <button type="submit" className="btn btn-dark mt-3">Register</button>
        <div>
								<a href='/login' className="text-danger createAct">Already have an account</a>
							</div>
    </form>

</div>
</>
);
}

export default RegistrationForm;
