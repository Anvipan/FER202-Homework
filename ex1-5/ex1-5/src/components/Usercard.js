//props: data được truyền từ component cha sang component con
// state: data được quản lý bên trong component, có thể thay đổi theo thời gian.

function ProductCard({ product }) {
  const isStocked = product.stock > 0;
  return (
    <div className="card h-100">
      <img
        src={`https://placehold.co/600x400/EEE/31343C?text=${encodeURIComponent(
          product.name
        )}`}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Giá bán: {product.outPrice.toLocaleString()} VNĐ</p>
        <p className="card-text">Tồn kho: {product.stock}</p>
        <span className={`badge ${isStocked ? "bg-success" : "bg-danger"}`}>
          {isStocked ? "Còn hàng" : "Hết hàng"}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
