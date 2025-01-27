npm init 

npm install -D parcel 

parcel bundler 

=============================================================

dev dependency 

normal dependency 

==============================================================

^ -- caret ==> auto upgrade by parcel when new version 

caret is good 

~ tilde  => it will auto update major version 

package lock.json : keep record exact version of pacapackagege

=======================================================
npm init -y

npm install react react-dom
npm install --save-dev parcel


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Parcel React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./index.jsx"></script>
  </body>
</html>
=========================

import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18+

const App = () => <h1>Hello, React with Parcel!</h1>;

// Create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing React element inside root
root.render(<App />);

==========================================

"scripts": {
  "start": "parcel src/index.html",
  "build": "parcel build src/index.html"
}
=================================

npm start
==================================


npm run build
