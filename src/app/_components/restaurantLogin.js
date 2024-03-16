import React, { useState } from "react";
import { useRouter } from "next/navigation";

const restaurantLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        if(!email || !password) {
            setError(true);
            return false;
        }
        else{
            setError(false);
        }
        let response = await fetch("http://localhost:3000/api/restaurant", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
                login: true,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        response = await response.json();
        if(response.success) {
            console.log("Login Successful");
            const { result } = response;
            delete result.password;
            localStorage.setItem("restaurantUser", JSON.stringify(result));
            router.push("/restaurant/dashboard");
        }
        else{
            alert("Invalid email or password");
        }
    }

    return (
        <div className="text-center">
            <h1 className="text-center">Restaurant Login</h1>
            <form className="mt-10 ml-10 border-5 border-solid border-x-black">
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
                <div className="mt-5" onClick={() => handleLogin()}>
                    <button className="button">Login</button>
                </div>
            </form>
        </div>
    );
};

export default restaurantLogin;
