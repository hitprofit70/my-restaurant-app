import React from "react";

const ProductsCard = ({imgP,name,price}) => {
  return (
    <div className="container mt-5 mb-5">
      <div
        className="row animate__animated animate__fadeInUp animate__repeat-2"
        style={{ animationDuration: "5s" }}
      >
        <div className="col-6 col-md-3">
          <div
            className="card shadow bg-body rounded"
            style={{ width: "100%" }}
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

        {/* <div className="col-6 col-md-3">
          <div
            className="card shadow bg-body rounded"
            style={{ width: "100%" }}
          >
            <img
              src={imgP}
              style={{ height: "250px", width: "100%" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{price}</p>
              <button className="btn btn-secondary">View</button>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div
            className="card shadow bg-body rounded"
            style={{ width: "100%" }}
          >
            <img
              src={imgP}
              style={{ height: "250px", width: "100%" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{price}</p>
              <button className="btn btn-secondary">View</button>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div
            className="card shadow bg-body rounded"
            style={{ width: "100%" }}
          >
            <img
              src={imgP}
              style={{ height: "250px", width: "100%" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{price}</p>
              <button className="btn btn-secondary">View</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductsCard;
