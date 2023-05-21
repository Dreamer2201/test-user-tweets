import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</HashRouter>
	</React.StrictMode>
);


reportWebVitals();
