// import logo from '/vite.svg'
import { dataDesa, dataGaleri, dataProduk } from "./constants/Data.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [halaman, setHalaman] = useState("Beranda");
  function changeHalaman(hal) {
    setHalaman(hal);
  }

  return (
    <BrowserRouter>
      <Header
        dataDesa={dataDesa}
        halaman={halaman}
        changeHalaman={changeHalaman}
      />
      <Routes>
        <Route
          path={"/"}
          element={
            <Home
              halaman={halaman}
              dataDesa={dataDesa}
              dataGaleri={dataGaleri}
              dataProduk={dataProduk}
            />
          }
        />
        <Route
          path={"/profil-desa"}
          element={
            <Profil
              halaman={halaman}
              dataDesa={dataDesa}
              dataProduk={dataProduk}
            />
          }
        />
      </Routes>
      <Footer dataDesa={dataDesa} />
    </BrowserRouter>
  );
}

export default App
