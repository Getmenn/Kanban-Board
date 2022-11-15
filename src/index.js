import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import LocalStorageSet from "./localStorage/LocaStorage";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {LocalStorageSet()}
    <App />
  </BrowserRouter>
);

