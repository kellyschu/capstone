import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from "../src/components/SideBar/SideBar";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" component={HomePage} />
          {/* <Route path="" component={} /> */}
          {/* <Route path="" component={} /> */}
          {/* <Route path="" component={} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
