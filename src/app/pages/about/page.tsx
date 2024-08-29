import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centers items horizontally
        justifyContent: "normal", // Centers items vertically
        height: "200vh", // Ensures the container takes full height
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "blue", margin: "10px" }}>
        <strong>GO-TRIP</strong>
      </h1>
      <h2
        style={{ fontSize: "2.5rem", color: "black", margin: "10px" }}
        className="px-60 text-center"
      >
        We believe that getting where you need to go should not be a hassle
        That is why we created a convenient, user-friendly app that lets you
        book bus tickets quickly, easily, and securely.
      </h2>
      <h2 style={{ fontSize: "3rem", color: "blue", margin: "px20" }} className="px-11 font-bold text-left justify-start">
        Our mission
      </h2>
      <p style={{ fontSize: "3rem", color: "black", margin: "px20" }} className="px-60 py-10 justify-start">
      • To simplify bus travel: We connect you to a wide range of bus operators, making it easy to compare prices, routes, and schedules – all in one place.<br/>
• To empower you with choice: You have complete control over your travel plans, with the flexibility to book tickets anytime, anywhere. <br />
• To make travel affordable: We strive to offer competitive prices and transparent booking fees.<br />
• To offer a seamless experience: We are committed to providing real-time updates, easy-to-use features, and 24/7 customer support. 

      </p>
      <p style={{ fontSize: "3rem", color: "blue", margin: "px20" }} className="px-11 font-bold text-left justify-start">
      Our team
      </p>
      <p style={{ fontSize: "3rem", color: "black", margin: "px20" }} className="px-60 text-left justify-start">
      We are a passionate group of tech-savvy travel enthusiasts, driven by a desire to revolutionize the bus travel experience. We are constantly working to improve our app and offer new features that make your journey smoother and more enjoyable. Thank
      </p>
    </div>
  );
};

export default AboutPage;
