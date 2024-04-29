

const CraftItems = ({craft}) => {
   const {itemName, image, subcategoryName, shortDescription, price, rating, userName, userEmail, stockStatus, customization, processingTime} = craft;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={image} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p>{shortDescription}</p>
          <p>{stockStatus}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default CraftItems;