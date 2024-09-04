import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Получите корневой элемент
const rootElement = document.getElementById('root');

// Если корневой элемент существует, создайте корневой рендерер и отрендерите приложение
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>

  );
}

// Если вы хотите начать измерять производительность в приложении, передайте функцию
// reportWebVitals(console.log)