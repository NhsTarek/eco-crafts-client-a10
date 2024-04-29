
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/UseAuth";
import Craftlist from "../Components/Craftlist";


const MyCraftList = () => {
  const { user } = useAuth();
  const [item, setItem] = useState([])
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>EcoCrafts Hub | My Art&Craft List</title>
      </Helmet>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 ">
        {
          item.map(i => <Craftlist

            key={i._id}
            i={i}
          >

          </Craftlist>)
        }
      </div>

    </div>
  );
};

export default MyCraftList;
