import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftItems from "../Components/CraftItems";
import Slider from "../Components/Slider";
import Gallery from "../Components/Gallery";
import ClientsReview from "../Components/ClientsReview";
import { Bounce } from "react-awesome-reveal";


const Home = () => {
    const crafts = useLoaderData();

    return (
        <div className="m-5">
            <Helmet>
                <title>EcoCrafts Hub |   Home</title>
            </Helmet>
            <Slider></Slider>

            <Bounce>
                <section className="my-10">
                    <h2 className="font-poppins font-bold text-center text-2xl"> Craft Items</h2>
                </section>
            </Bounce>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    crafts.map(craft => <CraftItems
                        key={craft._id}
                        craft={craft}
                    ></CraftItems>)
                }
            </div>
            <Bounce>
                <section className="text-3xl font-poppins font-bold text-center my-10">
                    <h2>Our Gallery</h2>
                </section>
            </Bounce>
            <Gallery></Gallery>
            <section className="text-center font-poppins my-10 ">
                <Bounce><h2 className="text-2xl font-extrabold mb-5">Recent Reviews</h2></Bounce>
                <p className="text-xl">Here are our valuable client reviews. Their lovely reviews always motivate us to provide decent services.</p>
            </section>
            <ClientsReview></ClientsReview>

        </div>
    );
};

export default Home;