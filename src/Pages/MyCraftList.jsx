
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/UseAuth";
import Craftlist from "../Components/Craftlist";
import loader from "../loader.json"
import Lottie from "lottie-react";


const MyCraftList = () => {
  const { user } = useAuth();
  const [item, setItem] = useState([])
  const [ isLoading, setIsLoading] = useState(false)
  const [ control , setControl] = useState(false);
  
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setIsLoading(false)
      });
  }, [user, control]);

  if(isLoading){
    return (
      <div className="flex justify-center items-center h-[80vh]">
      <span><Lottie animationData={loader} /></span>
     </div>
    )
       
    
  }

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
