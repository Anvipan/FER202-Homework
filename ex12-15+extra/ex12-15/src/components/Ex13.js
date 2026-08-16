import React, { useState, useEffect } from 'react';

// ==========================================
// 1. Data Fetching
// ==========================================
const UserPosts = ({ userId }) => {
  // Khởi tạo state posts với một mảng rỗng
  const [posts, setPosts] = useState([]);

  // Gọi API mỗi khi component mount hoặc khi prop userId thay đổi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Lỗi khi fetch data:", error);
      }
    };
    fetchData();
  }, [userId]); // Đưa userId vào mảng phụ thuộc (dependency array)

  return (
    <div className="mb-4 p-3 border border-secondary rounded shadow-sm">
      <h4 className="text-warning mb-3">1. Data Fetching (User ID: {userId})</h4>
      {/* Giới hạn chiều cao và tạo thanh cuộn cho danh sách gọn gàng */}
      <div style={{ maxHeight: '300px', overflowY: 'auto' }} className="pe-2">
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="mb-3 pb-2 border-bottom border-secondary">
              <h5 className="fw-bold fs-6 text-info">{post.title}</h5>
              <p className="mb-0 text-light" style={{ fontSize: '0.9rem' }}>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// ==========================================
// 2. Countdown Timer
// ==========================================
const CountdownTimer = ({ initialValue }) => {
  // Gán giá trị ban đầu cho bộ đếm
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    // Nếu thời gian <= 0 thì dừng không tạo interval nữa
    if (timeRemaining <= 0) {
      return;
    }
    
    // Cập nhật timer mỗi giây
    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function: xóa interval khi unmount hoặc khi thời gian thay đổi
    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining]);

  return (
    <div className="mb-4 p-3 border border-secondary rounded shadow-sm">
      <h4 className="text-warning mb-3">2. Countdown Timer</h4>
      <h3 className={timeRemaining === 0 ? "text-danger" : "text-white"}>
        Time Remaining: {timeRemaining}
      </h3>
    </div>
  );
};

// ==========================================
// 3. Window Resize Listener
// ==========================================
const WindowSize = () => {
  // Khởi tạo state bằng kích thước hiện tại của trình duyệt
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Hàm cập nhật kích thước
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Gắn sự kiện lắng nghe khi mount
    window.addEventListener('resize', handleResize);

    // Cleanup: gỡ bỏ sự kiện khi unmount để tránh tràn bộ nhớ (memory leak)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mb-4 p-3 border border-secondary rounded shadow-sm">
      <h4 className="text-warning mb-3">3. Window Resize Listener</h4>
      <p className="fs-5">
        Window size: <span className="fw-bold text-success">{windowSize.width}</span> x <span className="fw-bold text-success">{windowSize.height}</span>
      </p>
    </div>
  );
};

// ==========================================
// 4. Form Input Validation
// ==========================================
const ValidatedInput = ({ validationFunction, errorMessage }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Kích hoạt hàm kiểm tra mỗi khi input thay đổi
  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div className="mb-4 p-3 border border-secondary rounded shadow-sm">
      <h4 className="text-warning mb-3">4. Form Input Validation</h4>
      <input
        type="text"
        placeholder="Type at least 5 characters..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // Đổi viền input thành màu đỏ nếu không hợp lệ
        className={`form-control w-50 ${!isValid && value.length > 0 ? 'is-invalid border-danger' : ''}`}
      />
      {/* Hiển thị lỗi nếu người dùng đã gõ gì đó nhưng vi phạm điều kiện */}
      {!isValid && value.length > 0 && <p className="text-danger mt-2 mb-0">{errorMessage}</p>}
      {isValid && value.length > 0 && <p className="text-success mt-2 mb-0">Input hợp lệ!</p>}
    </div>
  );
};

export default function Ex13() {
  // State điều khiển chức năng 1 để test việc thay đổi prop userId
  const [currentUserId, setCurrentUserId] = useState(1);
  
  // Hàm validate cho chức năng 4 (yêu cầu chuỗi dài hơn hoặc bằng 5 ký tự)
  const myValidation = (val) => val.length >= 5;

  return (
    <div className="p-4" style={{ backgroundColor: '#282c34', minHeight: '100vh', color: 'white' }}>
      <h2 className="text-center mb-5 text-warning fw-bold">Exercise 13: React Hook (useEffect)</h2>
      
      {/* Khối điều khiển nhỏ để thay đổi ID, giúp ông thấy rõ API được fetch lại như thế nào */}
      <div className="mb-4 d-flex align-items-center gap-3">
        <label className="fw-bold mb-0">Change User ID to test Fetching:</label>
        <select 
          className="form-select w-auto" 
          value={currentUserId} 
          onChange={(e) => setCurrentUserId(Number(e.target.value))}
        >
          <option value={1}>User 1</option>
          <option value={2}>User 2</option>
          <option value={3}>User 3</option>
        </select>
      </div>

      <UserPosts userId={currentUserId} />
      <CountdownTimer initialValue={10} />
      <WindowSize />
      <ValidatedInput 
        validationFunction={myValidation} 
        errorMessage="Error: Mật khẩu/Chuỗi phải dài ít nhất 5 ký tự!" 
      />
    </div>
  );
}