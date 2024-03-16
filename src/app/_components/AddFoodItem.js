const AddFoodItem = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [path, setPath] = useState("");
    const [description, setDescription] = useState("");
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
            </div>
        </div>
    );
};

export default AddFoodItem;