import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App.tsx';

let root = document.getElementById("root");

if (!root) {
	root = document.createElement("div");
}

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
