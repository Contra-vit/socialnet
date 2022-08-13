import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: 'Mike' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Adam' },
  { id: 4, name: 'Peter' }];
let messagersData = [
  { id: 1, message: 'How' },
  { id: 2, message: 'what is good' },
  { id: 3, message: 'Ku-ku' },
  { id: 4, message: 'Google, Peter' }]
let postsData = [
  { id: 1, post: 'How', likesCount: 12 },
  { id: 2, post: 'I loose my mind', likesCount: 12 },
  { id: 3, post: 'You gotta see it', likesCount: 10 },
  { id: 4, post: 'Have a nice flight', likesCount: 7 }];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dataIndexDialog={dialogsData} dataIndexMessage={messagersData}  dataIndexPosts={postsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
