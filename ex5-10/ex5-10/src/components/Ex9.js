import React, { useState } from "react";

const Greeting = () => (
  <div className="mb-4">
    <h2 className="text-primary">Hello, World!</h2>
    <p>tôi là An, hiện đang hoàn thiện tí bài tập của FER202 - BL5 ý mà.</p>
  </div>
);

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mb-4 p-3 border rounded bg-light" style={{ maxWidth: '300px' }}>
      <h4>Counter: {count}</h4>
      <button onClick={() => setCount(count + 1)} className="btn btn-success me-2">+</button>
      <button onClick={() => setCount(count - 1)} className="btn btn-danger">-</button>
    </div>
  );
};

const Image = ({ url }) => (
  <div className="bg-warning bg-opacity-25 d-flex align-items-center justify-content-center p-2" style={{ width: '150px', borderRight: '2px solid #e0e0e0' }}>
    <img src={url} alt="card-img" className="img-fluid" style={{ maxHeight: '80px', objectFit: 'contain' }} />
  </div>
);

const Title = ({ text }) => (
  <h5 style={{ color: '#e67e22', borderBottom: '2px solid #e0e0e0' }} className="p-2 mb-0 fw-bold">
    {text}
  </h5>
);

const Description = ({ text }) => (
  <p className="p-2 mb-0 text-secondary">
    {text}
  </p>
);

const SimpleCard = ({ item }) => (
  <div className="d-flex border mb-4 shadow-sm" style={{ maxWidth: '500px', borderColor: '#0000ff !important', borderWidth: '2px !important' }}>
    <Image url={item.imageUrl} />
    <div className="d-flex flex-column w-100">
      <Title text={item.title} />
      <Description text={item.description} />
    </div>
  </div>
);

const SimpleWebsite = () => (
  <div className="border shadow-sm">
    <div style={{ backgroundColor: '#f37021' }} className="text-center py-4 text-white">
      <div className="bg-white d-inline-block p-3 mb-2">
        <img src="images/fpt.png" alt="FPT Logo" height="60" />
      </div>
      <div>
        <span className="mx-2 cursor-pointer">Home</span>
        <span className="mx-2 cursor-pointer">About</span>
        <span className="mx-2 cursor-pointer">Contact</span>
      </div>
    </div>
    
    <div className="container text-center py-5">
      <h2 className="fw-bold mb-3">About</h2>
      <p className="mb-5">This is the about section of the website.</p>
      
      <h2 className="fw-bold mb-3">Contact</h2>
      <p>For any inquiries, please contact us at example@example.com.</p>
    </div>
    
    <div style={{ backgroundColor: '#f8c87b' }} className="text-center py-4 text-white">
      © 2023 Website. All rights reserved.
    </div>
  </div>
);

export default function Ex9() {
  const cardData = {
    title: "Hoai Nguyen - FPT DaNang",
    description: "Mobile: 0982827763",
    imageUrl: "images/fpt-logo.png"
  };

  return (
    <div className="container my-5">
      <h1 className="mb-5 text-center">Exercise 9: React Components</h1>
      <Greeting />
      <hr className="my-4"/>
      <Counter />
      <hr className="my-4"/>
      <h4 className="mb-3">Simple Card Component</h4>
      <SimpleCard item={cardData} />
      <hr className="my-4"/>
      <h4 className="mb-3">Simple Website Component</h4>
      <SimpleWebsite />
    </div>
  );
}