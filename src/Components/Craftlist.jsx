
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Craftlist = ({ i, control, setControl }) => {
    const { _id, itemName, image, price, rating, stockStatus, customization, } = i;

   

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://ecocrafts-hub-server.vercel.app/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            setControl(!control)
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft has been deleted.",
                                icon: "success"
                              });
                        }
                    })
            }
        });
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
                   <Link to={`/updatepage/${_id}`}>
                   <button className="btn btn-primary">Update</button>
                   </Link>
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