import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={HomePage} />
        {/* <Route path="" component={} /> */}
        {/* <Route path="" component={} /> */}
        {/* <Route path="" component={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
