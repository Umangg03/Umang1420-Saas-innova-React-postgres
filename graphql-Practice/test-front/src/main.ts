import React from 'react';
import { createRoot } from 'react-dom/client';
import 'primeflex/primeflex.css';
import './style.css';
import App from './app';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Could not find the app root element.');

createRoot(rootElement).render(React.createElement(React.StrictMode, null, React.createElement(App)));
