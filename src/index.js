import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//indexjs rooter example
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavLinksTest from './Components/NavLinksTest'
// import Test from './Components/Test'


// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>

//       <>
//         <BrowserRouter>
//         {/* <Route exact path={["/","/App"]} component={App} /> */}
//         <Routes>
//             <Route path="/" element={<Redirect  to={<Test />}} />
//             <Route
//               exact
//               path="/App"
//               element={<App />}
//             ></Route>
//           </Routes>

//           <Routes>
//             <Route path="/" element={<Navigate to="/Test" />} />
//             <Route
//               exact
//               path="/Test"
//               element={<Test />}
//             ></Route>
//           </Routes>

//           <Routes>
//             <Route path="/" element={<Navigate to="/NavLinksTest" />} />
//             <Route
//               exact
//               path="/NavLinksTest"
//               element={<NavLinksTest />}
//             ></Route>
//           </Routes>
          

//         </BrowserRouter>
//       </>

//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();