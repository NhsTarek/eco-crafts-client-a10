import { Link } from "react-router-dom";


const CraftsTable = ({craft, index}) => {

    const {_id,itemName,  price, rating,  stockStatus} = craft;
    return (
        <tr>
        <th>{index+1}</th> 
        <td>{itemName}</td> 
        <td>{price}</td> 
        <td>{rating}</td> 
        <td>{stockStatus}</td>
        <Link to={`/viewDetails/${_id}`}><td>View Details</td></Link>
      </tr>
    );
};

export default CraftsTable;