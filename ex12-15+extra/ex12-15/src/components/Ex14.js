import React, { useState, useContext, createContext } from "react";

// ==========================================
// TÍNH NĂNG 1: THEME CONTEXT
// ==========================================
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#000000",
  },
};

// 2. Tạo ThemeContext
const ThemeContext = createContext();

// 3. ThemeProvider để bọc các component con và cung cấp state
const ThemeProvider = ({ children }) => {
  // Mặc định chọn theme light
  const [theme, setTheme] = useState(themes.light);

  // Hàm đảo ngược theme
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light,
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Component hiển thị nút bấm thay đổi Theme
const ThemeToggleButton = () => {
  // Lấy dữ liệu từ Context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="mb-5 p-4 rounded shadow border border-secondary"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        transition: "all 0.3s ease",
      }}
    >
      <h4 className="mb-3">1. Theme Context Switcher</h4>{" "}
      {/* Nút bấm thay đổi màu sắc dựa trên theme đang chọn */}
      <button
        onClick={toggleTheme}
        className="btn fw-bold rounded shadow-sm border border-dark"
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
          padding: "10px 20px",
          fontSize: "1.2rem",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

// ==========================================
// TÍNH NĂNG 2: CART CONTEXT (Giỏ hàng)
// ==========================================
const dishesData = [
  {
    id: 0,
    name: "Uthappizza",
    image: "https://placehold.co/100x100/FF6347/FFF?text=Pizza", // Thay link ảnh tĩnh để dễ nhìn
    category: "mains",
    label: "Hot",
    price: "4.99",
    featured: true,
    description: "A unique combination of Indian Uthappam and Italian pizza...",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "https://placehold.co/100x100/32CD32/FFF?text=Zucchi",
    category: "appetizer",
    label: "",
    price: "1.99",
    featured: false,
    description:
      "Deep fried Zucchini coated with mildly spiced Chickpea flour...",
  },
  {
    id: 2,
    name: "Vadonut",
    image: "https://placehold.co/100x100/FFA500/FFF?text=Donut",
    category: "appetizer",
    label: "New",
    price: "1.99",
    featured: false,
    description:
      "A quintessential ConFusion experience, is it a vada or a donut?",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "https://placehold.co/100x100/FFD700/FFF?text=Cake",
    category: "dessert",
    label: "",
    price: "2.99",
    featured: false,
    description: "A delectable, semi-sweet New York Style Cheese Cake...",
  },
];

// 1. Tạo CartContext
const CartContext = createContext();

// 2. CartProvider cung cấp dữ liệu giỏ hàng
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Hàm thêm món vào giỏ
  const addToCart = (dish) => {
    setCartItems([...cartItems, dish]);
  };

  // Hàm xóa một món cụ thể khỏi giỏ dựa vào index
  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  // Hàm làm trống giỏ hàng
  const clearCart = () => {
    setCartItems([]);
  };

  // Tính toán tổng số lượng và tổng tiền (Real-time)
  const totalItems = cartItems.length;
  const totalValue = cartItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Component hiển thị danh sách món ăn
const DishesList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="col-md-7">
      <div className="bg-white text-dark p-4 rounded shadow border">
        <h4 className="fw-bold mb-4 border-bottom pb-2">Menu Dishes</h4>
        {dishesData.map((dish) => (
          <div
            key={dish.id}
            className="d-flex mb-3 p-3 border rounded shadow-sm align-items-center bg-light"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="rounded me-3"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <div className="flex-grow-1">
              <h5 className="fw-bold mb-1">
                {dish.name}{" "}
                {dish.label && (
                  <span className="badge bg-danger fs-6">{dish.label}</span>
                )}
              </h5>
              <p
                className="text-muted mb-1 small"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {dish.description}
              </p>
              <h6 className="fw-bold text-success mb-0">${dish.price}</h6>
            </div>
            <button
              className="btn btn-primary text-nowrap rounded ms-3 shadow-sm"
              onClick={() => addToCart(dish)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component hiển thị chi tiết Giỏ hàng
const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalItems, totalValue } =
    useContext(CartContext);

  return (
    <div className="col-md-5">
      <div
        className="bg-white text-dark p-4 rounded shadow border sticky-top"
        style={{ top: "20px" }}
      >
        <h4 className="fw-bold mb-4 border-bottom pb-2 text-primary">
          Your Cart
        </h4>

        {/* Vùng hiển thị các item trong giỏ */}
        <div
          style={{ maxHeight: "350px", overflowY: "auto" }}
          className="mb-3 pe-2"
        >
          {cartItems.length === 0 ? (
            <p className="text-muted text-center my-4">Cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center mb-2 p-2 border-bottom"
              >
                <div>
                  <span className="fw-bold">{item.name}</span>
                  <div className="text-success small">${item.price}</div>
                </div>
                <button
                  className="btn btn-sm btn-outline-danger rounded"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Tổng kết giỏ hàng */}
        <div className="border-top pt-3">
          <div className="d-flex justify-content-between mb-2 fs-5">
            <span>Total Items:</span>
            <span className="fw-bold">{totalItems}</span>
          </div>
          <div className="d-flex justify-content-between mb-4 fs-5">
            <span>Total Value:</span>
            <span className="fw-bold text-success">
              ${totalValue.toFixed(2)}
            </span>
          </div>

          <button
            className="btn btn-danger w-100 rounded fw-bold shadow-sm"
            onClick={clearCart}
            disabled={cartItems.length === 0}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// COMPONENT CHÍNH TỔNG HỢP (Main Component)
// ==========================================
export default function Ex14() {
  return (
    // Bọc toàn bộ ứng dụng bằng các Provider
    <ThemeProvider>
      <CartProvider>
        <div
          className="p-4"
          style={{
            backgroundColor: "#282c34",
            minHeight: "100vh",
            color: "white",
          }}
        >
          <h2 className="text-center mb-5 text-warning fw-bold">
            Exercise 14: React Hook (useContext)
          </h2>

          <ThemeToggleButton />

          <h4 className="text-warning mb-3">
            2 & 3. Shopping Cart Application
          </h4>
          <div className="row">
            <DishesList />
            <Cart />
          </div>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}
