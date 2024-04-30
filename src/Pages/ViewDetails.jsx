import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const craft = useLoaderData();
    const { itemName, image, subcategoryName, shortDescription, price, rating, userName,  stockStatus, customization, processingTime } = craft;
    return (
        <div className="">
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className=" w-full rounded h-52 dark:bg-gray-500" src={image} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-poppins font-semibold group-hover:underline group-focus:underline">{itemName}</h3>
                    <span className="text-xs dark:text-gray-600 font-poppins font-semibold">By : {userName}</span>
                    <p className="font-poppins text-sm font-normal">{shortDescription}</p>
                    <ul>
                        <li className="font-poppins font-medium">Price : {price}</li>
                        <li className="font-poppins font-medium">Rating : {rating}</li>
                        <li className="font-poppins font-medium">Subcategory Name: {subcategoryName}</li>
                        <li className="font-poppins font-medium">Stock Status : {stockStatus}</li>
                        <li className="font-poppins font-medium">Customization : {customization}</li>
                        <li className="font-poppins font-medium">Processing Time: {processingTime}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;