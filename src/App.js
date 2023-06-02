import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/helcim' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes> 
    </Router>
  );
}

export default App;
