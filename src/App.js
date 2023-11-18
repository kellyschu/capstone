import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from "../src/components/SideBar/SideBar";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import CategoryPage from './pages/CategoryPage/CategoryPage';
import EpisodePage from './pages/EpisodePage/EpisodePage';
import HomePage from './pages/HomePage/HomePage';
import MostCommentedPage from './pages/MostCommentedPage/MostCommentedPage';
import MostLovedPage from './pages/MostLovedPage/MostLovedPage';
import MostPlayedPage from './pages/MostPlayedPage/MostPlayedPage';
import SearchPage from './pages/SearchPage/SearchPage';
import SomethingNewPage from './pages/SomethingNewPage/SomethingNewPage';
import YourLibraryPage from './pages/YourLibraryPage/YourLibraryPage';

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <BrowserRouter>
        <Routes>
          <Route path="/category" component={CategoryPage} />
          <Route path="/episode/:channel/:id" component={EpisodePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/mostcommented" component={MostCommentedPage} />
          <Route path="/mostloved" component={MostLovedPage} />
          <Route path="/mostplayed" component={MostPlayedPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/somethingnew" component={SomethingNewPage} />
          <Route path="/:username" component={YourLibraryPage} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
