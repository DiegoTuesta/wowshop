import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewsDetail from "./pages/NewsDetail";
import Nabvar from "./components/Nabvar";
import Loader from "./components/Loader";
import {useSelector} from "react-redux"

function App() {
  const isLoading = useSelector( state => state.loader )
  return (
    <HashRouter>
    { isLoading && < Loader /> }
    <Nabvar />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<NewsDetail />} path="/news/:id" />
     
    </Routes>
  </HashRouter>
  );
}

export default App;
