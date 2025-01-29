import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import external CSS for styling
import Header from "./components/Header"; // Import Header Component
import Body from "./components/Body";
// Header Component

// Restaurant Card Component




// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Your Restaurant. All rights reserved.</p>
      <div className="social-links">
        <a href="#facebook">Facebook</a>
        <a href="#instagram">Instagram</a>
        <a href="#twitter">Twitter</a>
      </div>
    </footer>
  );
};

// Main App Layout
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};



// React component
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing React element inside root
root.render(<AppLayout />);
