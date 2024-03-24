import { useState } from "react";

const AddFoodItem = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [path, setPath] = useState("");
    const [description, setDescription] = useState("");

    const handleAddFoodItem = async () => {
        if (!name || !price || !path || !description) {
            alert("Please fill all the fields");
            return;
        }
        let resto_id = "";
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
        if (restaurantData) {
            resto_id = restaurantData._id;
        }
        let response = await fetch("http://localhost:3000/api/restaurant/foods", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                price: price,
                img_path: path,
                description: description,
                resto_id: resto_id,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        response = await response.json();
        console.log("Response:", response);
        if (response.success) {
            alert("Food Item Added Successfully");
        }
    }
    return (
        <div className="">
            <h1 className="font-bold">Add New Food Item</h1>
            <div className="text-center">
                <div className="mt-5">
                    <input
                        type="text"
                        placeholder="Enter Food Item Name"
                        className="input-field"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </div>
                <div className="mt-5">
                    <input
                        type="number"
                        placeholder="Enter Price"
                        className="input-field"
                        value={price}
                        onChange={(event) => {
                            setPrice(event.target.value);
                        }}
                    />
                </div>
                <div className="mt-5">
                    <input
                        type="text"
                        placeholder="Enter Image Path"
                        className="input-field"
                        value={path}
                        onChange={(event) => {
                            setPath(event.target.value);
                        }}
                    />
                </div>
                <div className="mt-5">
                    <input
                        type="text"
                        placeholder="Enter Description"
                        className="input-field"
                        value={description}
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                    />
                </div>
                <div className="mt-5">
                    <button className="button" onClick={handleAddFoodItem}>Add Item</button>
                </div>
            </div>
        </div>
    );
};

export default AddFoodItem;
