import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18+

const App = () => <h1>Hello, React with Parcel!</h1>;
const Title  = () => (
    <h1 className="head">
        Hello, React with Parcel!
    </h1>
);

const Heading = () =>(
    <div id="container">
        <Title />
        {Title()}
        <h1>Hello</h1>
    </div>
);
// Create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing React element inside root
root.render(<Heading />);
