import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/UseAuth";

const MyCraftList = () => {
  const { user } = useAuth() || {};
  const [craftItems, setCraftItems] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/myList/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setCraftItems(data);
        })
        .catch(error => {
          console.error("Error fetching craft items:", error);
        });
    }
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>EcoCrafts Hub | My Art&Craft List</title>
      </Helmet>
      <div>
        <h2>My Art & Craft List</h2>
        <ul>
          {craftItems.map(item => (
            <li key={item._id}>
              <img src={item.image} alt={item.itemName} />
              <p>{item.itemName}</p>
              <p>{item.price}</p>
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyCraftList;
