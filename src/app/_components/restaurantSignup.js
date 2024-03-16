import React, { useState } from "react";
import { useRouter } from "next/navigation";

const restaurantSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [contact, setContact] = useState("");
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const router = useRouter();

    const SubmitHandler = async () => {
        console.log("Connecting to MongoDB...");
        if (password !== confirmPassword) {
            setPasswordError(true);
            return;
        }
        else{
            setPasswordError(false);
        }
        if(!email || !password || !confirmPassword || !address || !name || !city || !contact){
            setError(true);
            alert("Please fill all the fields");
            return;
        }
        else{
            setError(false);
        }

        let response = await fetch("http://localhost:3000/api/restaurant", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                city: city,
                contact: contact,
                address: address,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        response = await response.json();
        console.log(response);

        if (response.success) {
            console.log("Signup Successful");
            const { result } = response;
            delete result.password;
            localStorage.setItem("restaurantUser", JSON.stringify(result));
            router.push("/restaurant/dashboard");
        }
    };

    const handleSubmit = (callback) => {
        return (event) => {
            event.preventDefault();
            callback();
        };
    };
    return (
        <div className="content-center">
            <h1 className="text-center">Restaurant Signup</h1>
            <form className="mt-10 ml-10 text-center">
                <div className="mt-5">
                    <input
                        type="text"
                        placeholder="Enter Restaurent name"
                        className="input-field"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                    {
                        error && !name && <div className="mt-5 text-red-500">Please enter your name</div>
                    }
                </div>
                <div className="mt-5">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="input-field"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                    {
                        error && !email && <div className="mt-5 text-red-500">Please enter your email</div>
                    }
                </div>
                <div className="mt-5">
                    <input
                        type="text"
                        placeholder="Enter city"
                        className="input-field"
                        value={city}
                        onChange={(event) => {
                            setCity(event.target.value);
                        }}
                    />
                    {
                        error && !city && <div className="mt-5 text-red-500">Please enter your city</div>
                    }
                </div>
                <div className="mt-5">
                    <input
                        type="number"
                        placeholder="Enter contact number"
                        className="input-field"
                        value={contact}
                        onChange={(event) => {
                            setContact(event.target.value);
                        }}
                    />
                    {
                        error && !contact && <div className="mt-5 text-red-500">Please enter your contact number</div>
                    }
                </div>
                <div className="mt-5">
                    <input
                        type="text"
                        placeholder="Enter your address"
                        className="input-field"
                        value={address}
                        onChange={(event) => {
                            setAddress(event.target.value);
                        }}
                    />
                    {
                        error && !address && <div className="mt-5 text-red-500">Please enter your address</div>
                    }
                </div>
                <div className="mt-5">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="input-field"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                    {
                        error && !password && <div className="mt-5 text-red-500">Please enter your password</div>
                    }
                </div>
                {passwordError && (
                    <div className="mt-5 text-red-500">
                        Password and Confirm Password do not match
                    </div>
                )}
                <div className="mt-5">
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        className="input-field"
                        value={confirmPassword}
                        onChange={(event) => {
                            setConfirmPassword(event.target.value);
                        }}
                    />
                    {   
                        error && !confirmPassword && <div className="mt-5 text-red-500">Please confirm your password</div>
                    }
                </div>
                {passwordError && (
                    <div className="mt-5 text-red-500">
                        Password and Confirm Password do not match
                    </div>
                )}
                <div className="mt-5">
                    <button
                        className="button"
                        onClick={handleSubmit(SubmitHandler)}
                    >
                        SignUp
                    </button>
                </div>
            </form>
        </div>
    );
};

export default restaurantSignup;
