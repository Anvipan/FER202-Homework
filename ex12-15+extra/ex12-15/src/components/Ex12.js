import React, { useState } from "react";

// ==========================================
// 1. Counter Component
// ==========================================
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mb-4 p-3 border rounded">
      <h4>1. Counter</h4>
      {/* Tăng giá trị count lên 1 mỗi khi click */}
      <button
        className="btn btn-light border mb-3"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <h2 className="text-white">Count: {count}</h2>
    </div>
  );
};

// ==========================================
// 2. Controlled Input Field
// ==========================================
const ControlledInput = () => {
  const [text, setText] = useState("");
  return (
    <div className="mb-4 p-3 border rounded">
      <h4>2. Controlled Input</h4>
      {/* Cập nhật state text mỗi khi người dùng gõ phím */}
      <input
        type="text"
        className="form-control w-50 mb-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3 className="text-white">Input text: {text}</h3>
    </div>
  );
};

// ==========================================
// 3. Toggle Visibility
// ==========================================
const ToggleVisibility = () => {
  // State quản lý cờ ẩn/hiện, mặc định là false (ẩn)
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="mb-4 p-3 border rounded">
      <h4>3. Toggle Visibility</h4>
      {/* Nút bấm đảo ngược trạng thái isVisible */}
      <button
        className="btn btn-light border mb-3"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {/* Chỉ render thẻ h2 nếu isVisible là true */}
      {isVisible && <h2 className="text-white">Toggle me!</h2>}
    </div>
  );
};

// ==========================================
// 4. Todo List
// ==========================================
const TodoList = () => {
  // State mảng chứa danh sách các công việc
  const [todos, setTodos] = useState([
    "Học lập trình .NET",
    "Học lập trình Java",
  ]);
  // State chuỗi chứa nội dung input nhập vào
  const [task, setTask] = useState("");

  // Hàm thêm việc mới
  const handleAdd = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask(""); // Xóa ô input sau khi thêm
    }
  };

  // Hàm xóa việc dựa theo index
  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="mb-4 p-3 border rounded">
      <div className="mb-5">
        <h4 className="mb-4">4. Todo List</h4>
        {/* Dùng Row để chia layout sang 2 bên */}
        <div className="row">
          {/* CỘT TRÁI: Ô Input và nút Add Todo */}
          <div className="col-md-6 mb-3 d-flex gap-2 align-items-start">
            <input
              type="text"
              className="form-control"
              placeholder="Please input a Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn btn-danger text-nowrap" onClick={handleAdd}>
              Add Todo
            </button>
          </div>

          {/* CỘT PHẢI: Khung hiển thị danh sách nền trắng */}
          <div className="col-md-5">
            <div className="bg-white text-dark p-4 rounded shadow">
              <h5 className="text-center fw-bold mb-4">Todo List</h5>
              {todos.map((todo, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center border p-2 mb-2 rounded bg-white shadow-sm"
                >
                  <span className="fs-6">{todo}</span>
                  <button
                    className="btn btn-danger btn-sm px-3"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. Color Switcher
// ==========================================
const ColorSwitcher = () => {
  // State quản lý màu sắc, mặc định là blue
  const [color, setColor] = useState("blue");
  return (
    <div className="mb-4 p-3 border rounded">
      <div className="mb-5">
        <h4 className="mb-3">5. Color Switcher</h4>
        {/* Ép chiều rộng dropdown bằng đúng chiều rộng cái hộp màu (150px) */}
        <select
          className="form-select mb-0 text-dark"
          style={{ width: "150px", borderRadius: "4px 4px 0 0" }}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        {/* Hộp màu gắn sát ngay bên dưới */}
        <div
          style={{ width: "150px", height: "150px", backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

// ==========================================
// 6. Search Filter
// ==========================================
const SearchFilter = () => {
  // State quản lý từ khóa tìm kiếm
  const [search, setSearch] = useState("");
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  // Mảng chứa các item đã được lọc qua search
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mb-4 p-3 border rounded">
      <h4>6. Search Filter</h4>
      <input
        type="text"
        className="form-control w-25 mb-3"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="text-white">
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// ==========================================
// 7. Drag and Drop List
// ==========================================
const DragDropList = () => {
  // State quản lý mảng dữ liệu danh sách
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  // State lưu trữ index của phần tử đang được kéo
  const [draggingItem, setDraggingItem] = useState(null);

  // Kích hoạt khi bắt đầu kéo phần tử
  const handleDragStart = (e, index) => {
    setDraggingItem(index);
  };

  // Kích hoạt khi phần tử được kéo lướt qua một phần tử khác để hoán đổi vị trí
  const handleDragEnter = (e, index) => {
    // Tránh lỗi khi đang kéo lơ lửng bên ngoài
    if (draggingItem === null) return;

    // Tạo mảng mới copy từ mảng hiện tại
    const newItems = [...items];
    // Dùng splice để cắt item đang kéo ra khỏi mảng
    const itemContent = newItems.splice(draggingItem, 1)[0];
    // Chèn item vừa cắt vào vị trí index mới
    newItems.splice(index, 0, itemContent);

    // Cập nhật lại state
    setDraggingItem(index);
    setItems(newItems);
  };

  // Kích hoạt khi thả chuột kết thúc kéo
  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div className="mb-4 p-3 border rounded">
      <h4>7. Drag and Drop List</h4>
      <ul className="text-white fs-4" style={{ listStyleType: "disc" }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable // Thuộc tính HTML cho phép kéo thả
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => e.preventDefault()} // Cần preventDefault để onDrop/DragEnter hoạt động mượt
            style={{
              cursor: "grab",
              opacity: draggingItem === index ? 0.5 : 1, // Làm mờ item đang bị nắm kéo
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// ==========================================
// COMPONENT CHÍNH TỔNG HỢP (Main Component)
// ==========================================
export default function Ex12() {
  return (
    <div
      className="p-4"
      style={{ backgroundColor: "#282c34", minHeight: "100vh", color: "white" }}
    >
      <h2 className="text-center mb-5 text-warning fw-bold">
        Exercise 12: React Hook (useState)
      </h2>
      <Counter />
      <ControlledInput />
      <ToggleVisibility />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragDropList />
    </div>
  );
}
