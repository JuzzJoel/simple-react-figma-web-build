import Home from './Home';
import Blog from './Blog';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
  )
}

export default App
