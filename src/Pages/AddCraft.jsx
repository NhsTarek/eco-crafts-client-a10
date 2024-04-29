import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAuth from "../hooks/UseAuth";




const AddCraft = () => {

    const {user} = useAuth() || {};
    // console.log(user);

    const handleAddCraft = event =>{
        event.preventDefault()
        
        const form = event.target;
        const itemName = form.itemName.value;
        const image = form.image.value;
        const subcategoryName = form.subcategoryName.value;
        const shortDescription = form.shortDescription.value;
        const price = form.price.value;
        const processingTime = form.processingTime.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const rating = form.rating.value;
        const userName = form.userName.value;
        const email = user.email;
    console.log(email);

        const newCraft = {itemName, image, subcategoryName, shortDescription, price, rating, userName, email, stockStatus, customization, processingTime};
        console.log(newCraft);


        // send data to ther server
        fetch('http://localhost:5000/craft', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCraft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data?.insertedId){
                toast.success('Craft item added successfully');
                return;
            }
            
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-5">

            <div className="max-w-lg mx-auto ">
            <section className="font-poppins font-semibold text-center my-10">
                <h2> Share Your Artistic Creations by adding craft items</h2>
                </section>
                <Helmet>
            <title>EcoCrafts Hub | Add Craft Item</title>
            </Helmet>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleAddCraft}>
                    {/* Image */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image URL
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="image" type="text" placeholder="Image URL" />
                    </div>
                    {/* Item Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
                            Item Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="itemName" type="text" placeholder="Item Name" />
                    </div>
                    {/* Subcategory Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subcategoryName">
                            Subcategory Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="subcategoryName" type="text" placeholder="Subcategory Name" />
                    </div>
                    {/* Short Description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortDescription">
                            Short Description
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="shortDescription" placeholder="Short Description"></textarea>
                    </div>
                    {/* Price */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="price" type="text" placeholder="Price" />
                    </div>
                    {/* Rating */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                            Rating
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="rating" type="text" placeholder="Rating" />
                    </div>
                    {/* Customization */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customization">
                            Customization
                        </label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="customization" id="customization">
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    {/* Processing Time */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="processingTime">
                            Processing Time
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="processingTime" type="text" placeholder="Processing Time" />
                    </div>
                    {/* Stock Status */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stockStatus">
                            Stock Status
                        </label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="stockStatus" id="stockStatus">
                            <option>In stock</option>
                            <option>Made to Order</option>
                        </select>
                    </div>
                    {/* User Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userEmail">
                            User Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="userEmail" type="email" placeholder="User Email" />
                    </div>
                    {/* User Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
                            User Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="userName" type="text" placeholder="User Name" />
                    </div>
                    {/* Add Button */}
                    <div className="text-center">
                       
                        <input type="submit" value="Add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCraft;
