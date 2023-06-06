import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Nabvar";
import Loader from "./components/Loader";
import {useSelector} from "react-redux"
import Purchases from "./pages/Purchases"
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const isLoading = useSelector( state => state.loader )
  return (
    <HashRouter>
    { isLoading && < Loader /> }
    <Navbar />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={ <ProtectedRoutes /> } >
        <Route element={<Purchases />} path="/purchases" />
      </Route>
      <Route element={<ProductDetail />} path="/product/:id" />
      <Route element={"no se encontro"} path="*" />
    </Routes>
  </HashRouter>
  );
}

export default App;
