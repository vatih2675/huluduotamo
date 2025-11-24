import { NavLink } from "react-router-dom";
import kantorDesa from "/kantor-desa.jpg";
import logoPutih from "/logo-putih.png";
import kepalaDesa from "/avatar/kades.jpeg";

export default function Home({ halaman, dataDesa, dataGaleri, dataProduk }) {
  return (
    <section className="w-full">
      <div
        className="w-full overflow-auto flex justify-center items-center shadow-black/20 shadow-xl"
        id="hero"
      >
        <div className="rounded-4xl p-10 bg-black/50 text-white flex flex-col justify-between shadow-black/20 shadow-lg">
          <img src={logoPutih} alt="Logo" className="w-30 mx-auto mb-5" />
          <h1 className="text-center text-6xl uppercase font-bold">
            Desa {dataDesa.nama}
          </h1>
          <p className="text-center text-2xl">
            Kec. {dataDesa.kecamatan}, {dataDesa.kota_kab}
          </p>
        </div>
      </div>
      {/* <div className="w-full px-20 py-10 flex justify-center items-center">
                <NavLink to="/" className="w-3/12 flex flex-col justify-center items-center transition-all duration-300 hover:scale-120 text-gray-700 hover:text-red-500">
                    <i className="bi-person-rolodex text-6xl text-red-500"></i>
                    <p className="text-sm mt-3">Layanan Masyarakat</p>
                </NavLink>
                <NavLink to="/" className="w-3/12 flex flex-col justify-center items-center transition-all duration-300 hover:scale-120 text-gray-700 hover:text-red-500">
                    <i className="bi-clipboard-data text-6xl text-red-500"></i>
                    <p className="text-sm mt-3">Potensi Desa</p>
                </NavLink>
                <NavLink to="/" className="w-3/12 flex flex-col justify-center items-center transition-all duration-300 hover:scale-120 text-gray-700 hover:text-red-500">
                    <i className="bi-easel2 text-6xl text-red-500"></i>
                    <p className="text-sm mt-3">Pembangunan Desa</p>
                </NavLink>
                <NavLink to="/" className="w-3/12 flex flex-col justify-center items-center transition-all duration-300 hover:scale-120 text-gray-700 hover:text-red-500">
                    <i className="bi-graph-up-arrow text-6xl text-red-500"></i>
                    <p className="text-sm mt-3">Keuangan Desa</p>
                </NavLink>
            </div> */}
      <div className="w-full p-20 cursor-default pointer-events-none">
        <h1 className="text-center text-3xl font-black text-red-700 mb-10">
          SELAMAT DATANG
        </h1>
        <div className="w-full flex justify-center items-start gap-10 px-30">
          <div className="w-full">
            <h3 className="text-xl font-bold mb-5">
              Sambutan Kepala Desa {dataDesa.nama}
            </h3>
            <p className="text-justify mb-3">
              Assalamu’alaikum warahmatullahi wabarakatuh,
            </p>
            <p className="text-justify mb-3">
              Salam sejahtera bagi kita semua,
            </p>
            <p className="text-justify mb-3">
              Dengan penuh rasa syukur, saya menyambut seluruh warga dan
              pengunjung di website resmi{" "}
              <span className="text-red-700">Desa {dataDesa.nama}</span>.
              Website ini kami hadirkan sebagai wujud keterbukaan informasi dan
              upaya dalam memajukan desa menuju kemandirian berbasis teknologi.
            </p>
            <p className="text-justify mb-3">
              Sebagai Kepala Desa, saya bersama seluruh perangkat desa
              berkomitmen untuk membangun{" "}
              <span className="text-red-700">Desa {dataDesa.nama}</span> yang
              mandiri, maju, dan berdaya saing dengan memanfaatkan teknologi
              sebagai pilar utama pembangunan.
            </p>
            <p className="text-justify mb-3">
              Melalui platform ini, kami berharap dapat memberikan kemudahan
              akses informasi, pelayanan yang lebih baik, serta menjadi jembatan
              komunikasi antara pemerintah desa dan masyarakat. Mari
              bersama-sama membangun desa yang lebih maju, sejahtera, dan
              berdaya saing di era digital ini.
            </p>
            <p className="text-justify">
              Wassalamu’alaikum warahmatullahi wabarakatuh.
            </p>
          </div>
          <div className="w-4/12">
            <img
              src={dataDesa.avatar}
              alt="Kepala Desa"
              className="w-full shadow-black/20 shadow-lg"
            />
            <div className="w-full">
              <h3 className="text-lg text-end font-bold text-red-700 uppercase mt-3 underline">
                {dataDesa.kepala}
              </h3>
              <p className="text-end">Kepala Desa {dataDesa.nama}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-20 bg-gray-200">
        <h1 className="text-center text-3xl font-black text-red-700 mb-10">
          GALERI
        </h1>
        <div className="flex flex-wrap justify-center items-center px-20">
          {dataGaleri.map(({ judul, keterangan, gambar }, index) => (
            <div key={index} className="w-4/12 p-2">
              <div className="w-full rounded-xl overflow-auto transition-all duration-300 hover:scale-110 cursor-pointer hover:shadow-black/20 hover:shadow-lg bg-[url('/public/galeri/1.jpg)] bg-origin-content bg-center bg-no-repeat bg-auto">
                <img
                  src={gambar}
                  alt=""
                  className="h-full bg-origin-content bg-center bg-no-repeat bg-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full p-20 bg-white">
        <h1 className="text-center text-3xl font-black text-red-700 mb-10">
          INFORMASI TERKINI
        </h1>
      </div>
      <div className="w-full p-20 bg-gray-200">
        <h1 className="text-center text-3xl font-black text-red-700 mb-10">
          AGENDA
        </h1>
        <div className="w-8/12 bg-white border border-gray-300 rounded-xl mx-auto overflow-hidden shadow-black/10 shadow-lg">
          <h1 className="px-3 py-2 font-bold text-gray-600 border-b border-gray-200">
            Kegiatan Mendatang
          </h1>
          <div className="p-3">
            <p className="p-5 italic text-center text-gray-500">
              Agenda belum tersedia
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-20 bg-white">
        <h1 className="text-center text-3xl font-black text-red-700 mb-10">
          PRODUK UMKM
        </h1>
        <div className="flex justify-center items-start flex-wrap">
          {dataProduk.map(({ judul, harga, owner, telpon, gambar }, index) => (
            <div key={index} className="w-3/12 p-3">
              <div className="w-full rounded-xl border border-gray-200 overflow-hidden shadow-black/20 shadow-md hover:scale-110 transition-all duration-300">
                <img src={gambar} alt={judul} className="w-full" />
                <div className="bg-white w-full p-3 flex justify-between items-center">
                  <div className="flex flex-col cursor-default">
                    <h1 className="font-bold">{judul}</h1>
                    <p>Rp. {harga}</p>
                  </div>
                  <a
                    href={`https://wa.me/62${telpon}`}
                    target="_blank"
                    className="text-xs bg-red-500 hover:bg-red-700 transition-all duration-300 text-white px-2 py-1 rounded-sm"
                    title={`Hubungi WA ${owner} - 0${telpon}`}
                  >
                    Beli
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}