import './App.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import WritingPage from './Pages/WritingPage';
import DevPage from './Pages/DevPage';

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/writing" element={<WritingPage />} />
      <Route path="/development/*" element={<DevPage />} />
    </Routes>
    </>
  )
}

export default App