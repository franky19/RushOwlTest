import './App.css';
import LoginComponent from './component/LoginComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
  </Router>
  );
}

export default App;
