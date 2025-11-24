import { NavLink } from "react-router-dom"
import logoMerah from "/logo-merah.png";

export default function Header({ dataDesa, halaman, changeHalaman }) {
  return (
    <header className="w-full bg-white/75 sticky top-0 left-0 right-0 px-20 py-3 flex justify-between items-center cursor-default z-99 shadow-black/10 shadow-lg">
      <a
        href="/"
        className="flex justify-center items-center gap-2 cursor-pointer"
      >
        <img src={logoMerah} alt="Logo" className="w-10" />
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-bold uppercase text-lg">
            Pemerintah Desa{" "}
            <span className="text-red-500">{dataDesa.nama}</span>
          </h1>
          <h3 className="text-sm">
            Kec. {dataDesa.kecamatan}, {dataDesa.kota_kab}
          </h3>
        </div>
      </a>
      <div className="flex justify-center items-center gap-10 text-lg">
        <NavLink
          to="/"
          onClick={() => changeHalaman("Beranda")}
          className={
            halaman == "Beranda"
              ? "text-red-500 font-bold cursor-default pointer-events-none"
              : "hover:text-red-500 transition-all duration-300 cursor-pointer"
          }
        >
          Beranda
        </NavLink>
        <NavLink
          to="/profil-desa"
          onClick={() => changeHalaman("Profil Desa")}
          className={
            halaman == "Profil Desa"
              ? "text-red-500 font-bold cursor-default pointer-events-none"
              : "hover:text-red-500 transition-all duration-300 cursor-pointer"
          }
        >
          Profil Desa
        </NavLink>
        {/* <NavLink
          to="/layanan"
          onClick={() => changeHalaman("Layanan")}
          className={
            halaman == "Layanan"
              ? "text-red-500 font-bold cursor-default pointer-events-none"
              : "hover:text-red-500 transition-all duration-300 cursor-pointer"
          }
        >
          Layanan
        </NavLink>
        <NavLink
          to="/informasi"
          onClick={() => changeHalaman("Informasi")}
          className={
            halaman == "Informasi"
              ? "text-red-500 font-bold cursor-default pointer-events-none"
              : "hover:text-red-500 transition-all duration-300 cursor-pointer"
          }
        >
          Informasi
        </NavLink>
        <NavLink
          to="/potensi-desa"
          onClick={() => changeHalaman("Potensi Desa")}
          className={
            halaman == "Potensi Desa"
              ? "text-red-500 font-bold cursor-default pointer-events-none"
              : "hover:text-red-500 transition-all duration-300 cursor-pointer"
          }
        >
          Mari Jo Ka {dataDesa.nama}
        </NavLink> */}
      </div>
    </header>
  );
}