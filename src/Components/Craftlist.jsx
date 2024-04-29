

const Craftlist = ({ i }) => {
    const { _id, itemName, image, price, rating, stockStatus, customization, } = i;

    const handleDelete = _id => {
       console.log(_id);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{itemName}</h2>

                <ul>
                    <li className="font-poppins font-medium">Price : {price}</li>
                    <li className="font-poppins font-medium">Rating: {rating}</li>
                    <li className="font-poppins font-medium">Customization: {customization}</li>
                    <li className="font-poppins font-medium">Stock Status: {stockStatus}</li>

                </ul>


                <div className="card-actions">
                    <button className="btn btn-primary">Update</button>
                    <button
                     onClick={() => handleDelete(_id)}
                     className="btn btn-primary">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Craftlist;