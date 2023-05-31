const ProductsCard = () => {
  return (
    <div className="container mt-5">
      <div className="row g-4 animate__animated animate__fadeInUp animate__repeat-2" style={{animationDuration: "5s"}}>
        <div className="col-6 col-md-3">
        <div className="card shadow bg-body rounded" style={{ width: "100%" }}>
          <img src="https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOHx4alBSNGhsa0JHQXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" style={{ height: "250px", width: "100%" }} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Lunch</h5>
            <p className="card-text">R100
            </p>
            <button className="btn btn-secondary">View</button>
          </div>
        </div>
        </div>
        
        <div className="col-6 col-md-3">
        <div className="card shadow bg-body rounded" style={{ width: "100%" }}>
          <img src="https://images.unsplash.com/photo-1678124620664-8b86d2b7de36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MHx4alBSNGhsa0JHQXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" style={{ height: "250px", width: "100%" }} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Lunch</h5>
            <p className="card-text">R100
            </p>
            <button className="btn btn-secondary">View</button>
          </div>
        </div>
        </div>

        <div className="col-6 col-md-3">
        <div className="card shadow bg-body rounded" style={{ width: "100%" }}>
          <img src="https://images.unsplash.com/photo-1675790944856-ef756a57dd89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5Nnx4alBSNGhsa0JHQXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" style={{ height: "250px", width: "100%" }} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Lunch</h5>
            <p className="card-text">R100
            </p>
            <button className="btn btn-secondary">View</button>
          </div>
        </div>
        </div>

        <div className="col-6 col-md-3">
        <div className="card shadow bg-body rounded" style={{ width: "100%" }}>
          <img src="https://images.unsplash.com/photo-1675914850327-87b816de133e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyMnx4alBSNGhsa0JHQXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" style={{ height: "250px", width: "100%" }} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Lunch</h5>
            <p className="card-text">R100
            </p>
            <button className="btn btn-secondary">View</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
