
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/UseAuth";
import Craftlist from "../Components/Craftlist";
import loader from "../loader.json"
import Lottie from "lottie-react";


const MyCraftList = () => {
  const { user } = useAuth();
  const [item, setItem] = useState([]);
  const [filteredItems, setFilteredItems] = useState([item]);

  const [isLoading, setIsLoading] = useState(false)
  const [control, setControl] = useState(false);

  

  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setFilteredItems(data);
        setIsLoading(false)
      });
  }, [user, control]);


  const handleFilterItem = e => {
    const selectedOption = e.target.value;
    console.log(selectedOption);
    if(selectedOption === "Yes"){
     const filteredNewItems = item.filter( it => it.customization === "Yes");
     setFilteredItems(filteredNewItems);
    }
   

    else if(selectedOption === "No"){
      const filteredNewItems = item.filter( it => it.customization === "No");
     setFilteredItems(filteredNewItems);
    }
};





  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <span><Lottie animationData={loader} /></span>
      </div>
    )


  }

  return (
    <div>

      <div className="text-center my-10" onClick={handleFilterItem}>
        <select className="select select-info w-full max-w-xs" name="customization" id="customization">
          <option disabled selected>Filter by Customization</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
         
        </select>
      </div>
      <Helmet>
        <title>EcoCrafts Hub | My Art&Craft List</title>
      </Helmet>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 ">
        {
          filteredItems.map(i => <Craftlist

            key={i._id}
            i={i}
            setControl={setControl}
            control={control}
          >

          </Craftlist>)
        }
      </div>

    </div>
  );
};

export default MyCraftList;
