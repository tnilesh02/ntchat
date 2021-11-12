import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// styles
import './components/sass/main.scss';

//pages
import Homepage from './components/pages/homepage.jsx';
import Otp from './components/pages/otp.jsx';
import ChatList from './components/pages/chatlist.jsx';
import ChatPage from './components/pages/_chatpage.jsx';

// for navigation
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/otp" element={<Otp />} />
    <Route path="/chat-list" element={<ChatList />} />
    <Route path="/chat-page" element={<ChatPage />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
