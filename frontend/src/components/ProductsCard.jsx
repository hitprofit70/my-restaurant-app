import { Link } from "react-router-dom";

const ProductsCard = ({id,imgP,name,price}) => {
  return (
    <div className="container mt-5">
      <div
        className="row animate__animated animate__fadeInUp animate__repeat-1"
        style={{ animationDuration: "5s" }}
      >
        <div className="col">
          <div
            className="card shadow bg-body rounded"
            style={{ width: "300px", height: "400px", borderRadius: "5px" }}
          >
            <img
              src={imgP}
              style={{ height: "250px", width: "100%", borderRadius: "5px"}}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">R{price}</p>
              <Link to={`/viewproductspage/${id}`}>
              <button className="view-button">View</button>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
