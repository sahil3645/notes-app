import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

const element = <App />;
root.render(element);