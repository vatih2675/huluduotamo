import logoPutih from "/logo-putih.png";

export default function Footer({ dataDesa }) {
  return (
    <footer className="w-full bg-red-900 px-20 py-10 text-white cursor-default">
      <div className="w-full flex justify-center items-start">
        <div className="w-full">
          <div className="w-full flex justify-start items-center gap-2 mb-10">
            <img src={logoPutih} alt="Logo" className="w-10" />
            <div className="flex flex-col justify-center items-start">
              <h1 className="font-bold uppercase text-lg">
                Pemerintah Desa {dataDesa.nama}
              </h1>
              <h3 className="text-sm">
                Kec. {dataDesa.kecamatan}, {dataDesa.kota_kab}
              </h3>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <a
              href={`https://wa.me/62${dataDesa.telpon}`}
              target="_blank"
              className="hover:text-red-300 transition-all duration-300 cursor-pointer"
            >
              <i className="bi-telephone me-2"></i>0{dataDesa.telpon}
            </a>
            <a href={`maiilto:${dataDesa.email}`} target="_blank">
              <i className="bi-envelope-at me-2"></i>
              {dataDesa.email}
            </a>
          </div>
        </div>
        <div className=" w-full">
          <h1 className="font-bold text-end mb-2">MEDIA SOSIAL</h1>
          <div className="w-full flex justify-end items-center gap-5 mb-10">
            <a
              href={`https://facebook.com/${dataDesa.sosmed.facebook}`}
              target="_blank"
              className="bi-facebook text-3xl hover:scale-120 transition-all duration-300"
            ></a>
            <a
              href={`https://instagram.com/${dataDesa.sosmed.instagram}`}
              target="_blank"
              className="bi-instagram text-3xl hover:scale-120 transition-all duration-300"
            ></a>
            <a
              href={`https://tiktok.com/${dataDesa.sosmed.tiktok}`}
              target="_blank"
              className="bi-tiktok text-3xl hover:scale-120 transition-all duration-300"
            ></a>
          </div>
          <iframe
            src={dataDesa.geo}
            className="w-full h-50 rounded-xl shadow-black/20 shadow-lg"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-between items-end mt-10">
        <div className="flex justify-start items-center">
          <p className="pe-3 border-r border-white">
            <i className="bi-c-circle me-1"></i>Copyright 2025
          </p>
          <a
            href="/"
            className="ps-3 font-bold transition-all duration-300 hover:text-red-400"
          >
            Huluduotamo
          </a>
        </div>
        <p className="text-xs text-gray-300">
          Powered by{" "}
          <a
            href="https://hanamiprinting.vercel.app"
            target="_blank"
            className="transition-all duration-300 hover:text-red-400 font-bold"
          >
            花見 Hanami
          </a>
        </p>
      </div>
    </footer>
  );
}
