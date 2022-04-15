
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './components/mainPage/Main';
import Creation from './components/creation/Creation';
function App() {
  return (
      <Router>
        
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path="/creation" element={<Creation />} />
        </Routes>
      </Router>    
  );
}
export default App;
