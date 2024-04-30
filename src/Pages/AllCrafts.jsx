import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftsTable from "../Components/CraftsTable";


const AllCrafts = () => {
    const crafts = useLoaderData(); 

   

    return (
        <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th> 
              <th>Name</th> 
              <th>Price</th> 
              <th>Rating</th> 
              <th>Stock Status</th>
              <th>Details</th>
            </tr>
          </thead> 
          <tbody>
            {
                crafts.map((craft, index) => <CraftsTable 
                key={craft._id}
                craft={craft}
                index={index}
                ></CraftsTable>)
            }
          
        
          </tbody> 
        </table>
      </div>
    );
};

export default AllCrafts;