import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import TweetsPage from './pages/TweetsPage/TweetsPage';

import './App.css';


function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/tweets' element={<TweetsPage />} />
        </Route>
    </Routes>
  );
}

export default App;
