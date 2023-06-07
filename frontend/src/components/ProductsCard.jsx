import React from "react";

const ProductsCard = ({imgP,name,price}) => {
  return (
    <div className="container mt-5">
      <div
        className="row animate__animated animate__fadeInUp animate__repeat-2"
        style={{ animationDuration: "5s" }}
      >
        <div className="col">
          <div
            className="card shadow bg-body rounded"
            style={{ width: "300px", height: "400px" }}
          >
            <img
              src={imgP}
              style={{ height: "250px", width: "100%" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">R{price}</p>
              <button className="btn btn-secondary">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
