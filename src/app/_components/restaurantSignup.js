import React, { useState } from 'react';
import axios from 'axios';

const restaurantSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');

    const SubmitHandler = async () => {
        console.log("Connecting to MongoDB...");
        let result = await fetch('http://localhost:3000/api/restaurant', {
            method : "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                city: city,
                contact: contact,
                address: address,
                password: password,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        result = await result.json();
        console.log(result);

        if(result.success){
            alert("Signup Successful");
        }
    }

    const handleSubmit = (callback) => {
        return (event) => {
            event.preventDefault();
            callback();
        }
    }
    return(
        <div className="content-center">
            {/* <h1 className="text-center">Restaurant Signup</h1> */}
            <form className="mt-10 ml-10 text-center border-2 border-solid border-x-black">
                <div className="mt-5">
                    <input type="text" placeholder="Enter Restaurent name"  className="input-field" value={name} onChange={(event)=>{setName(event.target.value)}}/>
                </div>
                <div className="mt-5">
                    <input type="text" placeholder="Enter your email"  className="input-field" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                </div>
                <div className="mt-5">
                    <input type="text" placeholder="Enter city"  className="input-field" value={city} onChange={(event)=>{setCity(event.target.value)}}/>
                </div>
                <div className="mt-5">
                    <input type="number" placeholder="Enter contact number"  className="input-field" value={contact} onChange={(event)=>{setContact(event.target.value)}}/>
                </div>
                <div className="mt-5">
                    <input type="text" placeholder="Enter your address"  className="input-field" value={address} onChange={(event)=>{setAddress(event.target.value)}}/>
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Enter your password"  className="input-field" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Confirm your password"  className="input-field" value={confirmPassword} onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
                </div>
                <div className="mt-5">
                    <button className="button" onClick={handleSubmit(SubmitHandler)}>SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default restaurantSignup;