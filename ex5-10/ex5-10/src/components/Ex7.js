import React from "react";

export default function Ex7() {
  const carImg = "https://placehold.co/600x400/white/black?text=Car+Image";

  return (
    <div className="container mt-5">
      <h3 className="mb-4 fw-bold">Cards Columns</h3>
      
      <div className="row g-4">
        
        <div className="col-md-4">
          <div className="card bg-primary text-white text-center p-3 border-0 rounded-0 shadow-sm">
            <img src={carImg} className="card-img-top rounded-0" alt="Car" />
            <div className="card-body p-2 pt-3">
              <p className="card-text mb-0">Some text inside the first card</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-warning text-dark text-center p-3 border-0 rounded-0 shadow-sm">
            <img src={carImg} className="card-img-top rounded-0" alt="Car" />
            <div className="card-body p-2 pt-3">
              <p className="card-text mb-0">Some text inside the first card</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-danger text-white text-center p-3 border-0 rounded-0 shadow-sm">
            <img src={carImg} className="card-img-top rounded-0" alt="Car" />
            <div className="card-body p-2 pt-3">
              <p className="card-text mb-0">Some text inside the first card</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}