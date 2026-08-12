import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="container-fluid p-0">
      <div className="bg-light p-4 mb-4">
        <div className="row g-0 border-bottom border-dark">
          <div className="col border-end border-dark p-2"> <ProductCard/> </div>
          <div className="col border-end border-dark p-2">col</div>
          <div className="col p-2">col</div>
        </div>
      </div>
    </div>
  );
}
