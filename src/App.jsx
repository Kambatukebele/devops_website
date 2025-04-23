import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cookies from './pages/Cookies';
import Home from "./pages/Home";
import Privacy from './pages/Privacy';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
