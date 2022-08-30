import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { addPost, updateNewPost } from './Redux/State';


  const root = ReactDOM.createRoot(document.getElementById('root'));
  export let renderEntireTree = (state) => {

  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPost={updateNewPost}
      />
    </React.StrictMode>
  ); 
}


