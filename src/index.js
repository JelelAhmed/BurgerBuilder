import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const WebApp = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

ReactDOM.render(WebApp, document.getElementById('root'));
registerServiceWorker();
