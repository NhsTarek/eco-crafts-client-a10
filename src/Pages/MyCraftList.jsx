import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/UseAuth";


const MyCraftList = () => {

    const {user} = useAuth() || {};
  

    useEffect(() =>{
      fetch(`http://localhost:5000/myList/${user?.email}`)
      .then(res => res.json())
      .then(data =>{
        console.log(data)
      })
    },[user])
    return (
        <div>
             <Helmet>
            <title>EcoCrafts Hub | My Art&Craft List</title>
            </Helmet>
        </div>
    );
};

export default MyCraftList;