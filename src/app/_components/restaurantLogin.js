const restaurantLogin = () => {
    return (
        <div className="items-center">
            <h1 className="text-center">Restaurant Login</h1>
            <form className="mt-10 ml-10">
                <div className="mt-5">
                    <input type="text" placeholder="Enter your email"  className="input-field"/>
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Enter your password"  className="input-field"/>
                </div>
                <div className="mt-5">
                    <button className="button">Login</button>
                </div>
            </form>
        </div>
    );
};

export default restaurantLogin;