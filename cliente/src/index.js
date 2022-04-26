import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';
import UseCatContext from './context/UseCatContext';
import NotFound from './Components/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
      <UseCatContext>
          <App>
            <Routes>
              <Route path='/'/>
              <Route path='/items' element={<SearchPage/>}/>
              <Route path='/items/:id' element={<ProductPage/>}/>
              <Route path='/items/:id/description' element={<ProductPage/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </App>
        </UseCatContext>
      </BrowserRouter>
);

reportWebVitals();
