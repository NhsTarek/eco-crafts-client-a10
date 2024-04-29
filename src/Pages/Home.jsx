import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftItems from "../Components/CraftItems";
import Slider from "../Components/Slider";
import Gallery from "../Components/Gallery";


const Home = () => {
    const crafts = useLoaderData();
    
    return (
        <div className="m-5">
             <Helmet>
            <title>EcoCrafts Hub |   Home</title>
            </Helmet> 
            <Slider></Slider>

            <section className="my-10">
                <h2 className="font-poppins font-bold text-center text-2xl"> Craft Items</h2>
            </section>
           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
           {
                crafts.map(craft => <CraftItems
                key={craft._id}
                craft={craft}
                ></CraftItems>)
            }
           </div>
           <section className="text-2xl font-poppins font-bold text-center my-10">
            <h2>Our Gallery</h2>
           </section>
           <Gallery></Gallery>

        </div>
    );
};

export default Home;