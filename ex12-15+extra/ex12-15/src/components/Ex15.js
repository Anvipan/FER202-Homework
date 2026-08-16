import React, { useReducer } from 'react';

// ==========================================
// 1. SIMPLE COUNTER COMPONENT
// ==========================================
// Hàm reducer cho Counter: Đánh giá action.type để cập nhật state
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="mb-5 p-4 border border-secondary rounded shadow-sm" style={{ backgroundColor: '#333' }}>
      <h4 className="text-warning mb-4">1. Counter (useReducer)</h4>
      <div className="text-center">
        {/* Render giá trị count hiện tại */}
        <h2 className="display-4 fw-bold mb-4">{count}</h2>
        <div className="d-flex justify-content-center gap-3">
          {/* Dispatch action DECREMENT khi click "-" */}
          <button className="btn btn-danger px-4 fs-5" onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
          {/* Dispatch action RESET khi click "Reset" */}
          <button className="btn btn-secondary px-4 fs-5" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
          {/* Dispatch action INCREMENT khi click "+" */}
          <button className="btn btn-success px-4 fs-5" onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. QUESTION BANK COMPONENT
// ==========================================
const initialQuizState = {
  questions: [
    {
      id: 1,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      answer: 'Canberra',
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
  ],
  currentQuestion: 0,
  selectedOption: '',
  score: 0,
  showScore: false,
};

// Hàm reducer cho Question Bank
const quizReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      // Cập nhật tùy chọn mà người dùng vừa click
      return { ...state, selectedOption: action.payload };
      
    case 'NEXT_QUESTION':
      // Kiểm tra xem đáp án vừa chọn có đúng không
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      // Cộng điểm nếu đúng
      const newScore = isCorrect ? state.score + 1 : state.score;
      
      // Kiểm tra xem đã hết câu hỏi chưa
      const isLastQuestion = state.currentQuestion === state.questions.length - 1;
      
      if (isLastQuestion) {
        // Nếu là câu cuối, hiện màn hình điểm số
        return { ...state, score: newScore, showScore: true };
      } else {
        // Nếu chưa, sang câu tiếp theo và reset lại tùy chọn
        return { 
          ...state, 
          score: newScore, 
          currentQuestion: state.currentQuestion + 1, 
          selectedOption: '' 
        };
      }
      
    case 'RESTART_QUIZ':
      // Khôi phục lại toàn bộ state về trạng thái ban đầu
      return initialQuizState;
      
    default:
      return state;
  }
};

const QuestionBank = () => {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  const { questions, currentQuestion, selectedOption, score, showScore } = state;
  const currentQData = questions[currentQuestion];

  // Các hàm dispatch action
  const handleOptionSelect = (option) => {
    dispatch({ type: 'SELECT_OPTION', payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: 'RESTART_QUIZ' });
  };

  return (
    <div className="mb-5 p-5 border border-secondary rounded shadow-sm text-center" style={{ backgroundColor: '#333' }}>
      
      {/* Hiển thị màn hình kết quả nếu showScore là true */}
      {showScore ? (
        <div>
          <h1 className="display-4 fw-bold mb-4">Your Score: {score}/{questions.length}</h1>
          <button className="btn btn-light btn-lg border border-dark rounded-0 px-4" onClick={handleRestartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        /* Hiển thị màn hình câu hỏi nếu showScore là false */
        <div>
          <h2 className="mb-3">Question {currentQuestion + 1}</h2>
          <h3 className="mb-4">{currentQData.question}</h3>
          
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
            {/* Lặp để hiển thị các nút tùy chọn đáp án */}
            {currentQData.options.map((option, index) => (
              <button
                key={index}
                // Đổi màu nút nếu tùy chọn đó đang được chọn
                className={`btn btn-lg border border-dark rounded-0 ${selectedOption === option ? 'btn-secondary' : 'btn-light text-dark'}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          
          {/* Nút Next chỉ có thể bấm khi người dùng đã chọn 1 đáp án */}
          <button 
            className="btn btn-secondary btn-lg border border-dark rounded-0 px-5"
            onClick={handleNextQuestion}
            disabled={!selectedOption}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default function Ex15() {
  return (
    <div className="p-4" style={{ backgroundColor: '#282c34', minHeight: '100vh', color: 'white' }}>
      <h2 className="text-center mb-5 text-warning fw-bold">Exercise 15: React Hook (useReducer)</h2>
      <Counter />
      <QuestionBank />
    </div>
  );
}