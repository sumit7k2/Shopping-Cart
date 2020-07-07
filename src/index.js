import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKQlMQEut0Mw2L1tSMIF6xT8PCSkt-LtA",
  authDomain: "cart-d4441.firebaseapp.com",
  databaseURL: "https://cart-d4441.firebaseio.com",
  projectId: "cart-d4441",
  storageBucket: "cart-d4441.appspot.com",
  messagingSenderId: "898179427100",
  appId: "1:898179427100:web:a4439112eb4674140be8d9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

