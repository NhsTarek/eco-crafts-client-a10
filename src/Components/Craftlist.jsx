

const Craftlist = ({ i }) => {
    const { itemName, image, subcategoryName, shortDescription, price, rating, userName, userEmail, stockStatus, customization, processingTime } = i;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{itemName}</h2>
                <div className="flex gap-20">
                <p>Price : {price}</p>
                <p>{rating}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Craftlist;