import React from 'react';
import ReactDOM from 'react-dom/client';
//integration de bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDisplay from './product/ProductDisplay';
import ProductTable from './product/ProductTable';
import ProductFormWithHook from './product/ProductFormWithHook';
import { Provider } from 'react-redux';
import Store from './redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='products' element={<ProductDisplay />}>
              <Route index element={<ProductTable />} />
              <Route path='add' element={<ProductFormWithHook />} />
              <Route path='update/:productId' element={<ProductFormWithHook />} />
              <Route path='*' element={<p>404</p>} />
            </Route>
            <Route path='*' element={<p>404</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
