import { Link } from "react-router-dom";


const CraftItems = ({craft}) => {
   const {_id,itemName, image,  shortDescription, stockStatus, } = craft;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={image} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title font-poppins font-semibold">{itemName}</h2>
          <p className="font-medium">{shortDescription}</p>
          <p className="font-medium">{stockStatus}</p>
          <div className="card-actions">
            <Link to={`/viewDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default CraftItems;