import React from "react";

export default function Ex6() {
  return (
    <div className="container-fluid p-0">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <a className="navbar-brand" href="#!">Navbar</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link active" href="#!">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" data-bs-toggle="dropdown">Dropdown</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-info" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <div id="ex6Carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://placehold.co/1920x530?text=1920+x+530" className="d-block w-100" alt="Banner" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#ex6Carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#ex6Carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <div className="container my-5">
        <h3 className="fw-normal text-secondary">NEW PRODUCT</h3>
        <p className="text-muted">List product description</p>

        <div className="row g-4 mt-2">
          {[1, 2, 3, 4].map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden">
                
                {index === 3 && (
                  <div 
                    className="position-absolute bg-warning text-white text-center fw-bold" 
                    style={{ 
                      top: '15px', right: '-25px', width: '100px', 
                      transform: 'rotate(45deg)', zIndex: 1 
                    }}
                  >
                    Sale
                  </div>
                )}

                <img src="https://placehold.co/280x280?text=280+x+280" className="card-img-top rounded-0" alt="Product" />
                
                <div className="card-body">
                  <h6 className="card-title text-secondary">Product</h6>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <small className="text-muted text-decoration-line-through" style={{fontSize: '0.75rem'}}>100.000 vnd</small>
                    <small className="text-warning fw-bold" style={{fontSize: '0.85rem'}}>80.000 vnd</small>
                  </div>
                  
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary btn-sm"><i className="fa fa-shopping-cart"></i></button>
                    <button className="btn btn-outline-secondary btn-sm" style={{fontSize: '0.8rem'}}>Xem chi tiết</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}