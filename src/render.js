import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { addPost, updateNewPost } from './Redux/State';

export let renderEntireTree = (state) => {

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    dataState={state}  
    addPost = {addPost}
    updateNewPost = {updateNewPost}
    />
  </React.StrictMode>
);
}


