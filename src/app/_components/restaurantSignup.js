// const e = require("express")

const restaurantSignup = () => {
    return(
        <div className="content-center">
            <h1 className="text-center">Restaurant Signup</h1>
            <form className="mt-10 ml-10">
                <div className="mt-5">
                    <input type="text" placeholder="Enter Restaurent name"  className="input-field"/>
                </div>
                <div className="mt-5">
                    <input type="text" placeholder="Enter your email"  className="input-field"/>
                </div>
                <div className="mt-5">
                    <input type="text" placeholder="Enter city"  className="input-field"/>
                </div>
                <div className="mt-5">
                    <input type="number" placeholder="Enter contact number"  className="input-field"/>
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Enter your password"  className="input-field"/>
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Confirm your password"  className="input-field"/>
                </div>
                <div className="mt-5">
                    <button className="button">SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default restaurantSignup;