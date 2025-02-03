import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Import external CSS for styling
import Header from "./components/Header"; // Import Header Component
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import  Contact  from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";

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
      <Outlet />
      <Footer />
    </div>
  );
};

// Error Component (Make sure you have this or remove `errorElement`)


// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, // ✅ Proper placement of Error
    children: [
      {
        index: true, // ✅ Default child route (Home)
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurantmenu/:resId",
        element: <Restaurantmenu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);


// React component
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render App with RouterProvider
root.render(<RouterProvider router={router} />);
