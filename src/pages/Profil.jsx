import { useState } from "react";

import Visi from "./profil/Visi";
import Sejarah from "./profil/Sejarah";
import Peta from "./profil/Peta";
import Struktur from "./profil/Struktur";
import Potensi from "./profil/Potensi";
import Produk from "./profil/Produk";
import Fasilitas from "./profil/Fasilitas";

export default function Profil({ halaman, dataDesa, dataProduk }) {
  const [menuProfil, setMenuProfil] = useState("visi");
  function changeMenuProfil(mn) {
    setMenuProfil(mn);
  }

  let profilDisplay;

  if (menuProfil == "visi") {
    profilDisplay = <Visi />;
  } else if (menuProfil == "sejarah") {
    profilDisplay = <Sejarah />;
  } else if (menuProfil == "peta") {
    profilDisplay = <Peta dataDesa={dataDesa} />;
  } else if (menuProfil == "struktur") {
    profilDisplay = <Struktur />;
  } else if (menuProfil == "potensi") {
    profilDisplay = <Potensi />;
  } else if (menuProfil == "produk") {
    profilDisplay = <Produk dataProduk={dataProduk} />;
  } else if (menuProfil == "fasilitas") {
    profilDisplay = <Fasilitas />;
  }
  return (
    <section className="w-full">
      <div
        className="w-full flex flex-col justify-center items-center h-full"
        id="pageHeader"
      >
        <h3 className="text-white text-3xl font-bold uppercase">{halaman}</h3>
        <h1 className="text-white text-6xl font-bold uppercase">
          {dataDesa.nama}
        </h1>
      </div>
      <div className="w-full px-20 flex justify-center items-center">
        <span
          onClick={() => changeMenuProfil("visi")}
          className={`p-5 ${
            menuProfil == "visi"
              ? "cursor-default pointer-events-none text-red-700 bg-red-200"
              : "cursor-pointer transition-all duration-300 text-gray-600 hover:bg-red-100 hover:text-red-700"
          }`}
        >
          Visi & Misi
        </span>
        <span
          onClick={() => changeMenuProfil("sejarah")}
          className={`p-5 ${
            menuProfil == "sejarah"
              ? "cursor-default pointer-events-none text-red-700 bg-red-200"
              : "cursor-pointer transition-all duration-300 text-gray-600 hover:bg-red-100 hover:text-red-700"
          }`}
        >
          Sejarah
        </span>
        <span
          onClick={() => changeMenuProfil("peta")}
          className={`p-5 ${
            menuProfil == "peta"
              ? "cursor-default pointer-events-none text-red-700 bg-red-200"
              : "cursor-pointer transition-all duration-300 text-gray-600 hover:bg-red-100 hover:text-red-700"
          }`}
        >
          Peta Desa
        </span>
        <span
          onClick={() => changeMenuProfil("struktur")}
          className={`p-5 ${
            menuProfil == "struktur"
              ? "cursor-default pointer-events-none text-red-700 bg-red-200"
              : "cursor-pointer transition-all duration-300 text-gray-600 hover:bg-red-100 hover:text-red-700"
          }`}
        >
          Struktur Organisasi
        </span>
        <span
          onClick={() => changeMenuProfil("potensi")}
          className={`p-5 ${
            menuProfil == "potensi"
              ? "cursor-default pointer-events-none text-red-700 bg-red-200"
              : "cursor-pointer transition-all duration-300 text-gray-600 hover:bg-red-100 hover:text-red-700"
          }`}
        >
          Potensi Alam
        </span>
        <span
          onClick={() => changeMenuProfil("produk")}
          className={`p-5 ${
            menuProfil == "produk"
              ? "cursor-default pointer-events-none text-red-700 bg-red-200"
              : "cursor-pointer transition-all duration-300 text-gray-600 hover:bg-red-100 hover:text-red-700"
          }`}
        >
          Produk Desa
        </span>
        <span
          onClick={() => changeMenuProfil("fasilitas")}
          className={`p-5 ${
            menuProfil == "fasilitas"
              ? "cursor-default pointer-events-none text-red-700 bg-red-200"
              : "cursor-pointer transition-all duration-300 text-gray-600 hover:bg-red-100 hover:text-red-700"
          }`}
        >
          Fasilitas Umum
        </span>
      </div>
      <div className="w-full p-20 bg-gray-200">{profilDisplay}</div>
    </section>
  );
}
