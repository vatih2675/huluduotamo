export default function Peta({dataDesa}) {
    return (
      <div className="w-full">
        <div className="w-full mb-10">
          <table className="w-full">
            <tbody>
              <tr>
                <td className=" w-[13%]">Nama Desa</td>
                <td className=" w-[1%]">:</td>
                <th className=" w-[10%] text-start">{dataDesa.nama}</th>
                <td className=""></td>
                <td className=" w-[13%]">Kecamatan</td>
                <td className=" w-[1%]">:</td>
                <th className=" w-[14%] text-start">{dataDesa.kecamatan}</th>
              </tr>
              <tr>
                <td>Kode Kemendagri</td>
                <td>:</td>
                <th className="text-start">{dataDesa.kode_kemendagri}</th>
                <td></td>
                <td>Kota / Kabupaten</td>
                <td>:</td>
                <th className="text-start">{dataDesa.kota_kab}</th>
              </tr>
              <tr>
                <td>Kode Pos</td>
                <td>:</td>
                <th className="text-start">{dataDesa.kode_pos}</th>
                <td></td>
                <td colSpan={3} className="">
                  <a href={dataDesa.maps} target="_black" className="transition-all duration-300 hover:text-red-700">
                    <i className="bi-geo-alt me-1"></i>Google Maps
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <iframe
          src={dataDesa.geo}
          className="w-full h-100 rounded-xl shadow-black/20 shadow-lg mb-20"
        ></iframe>
        <h1 className="text-red-700 text-3xl text-center font-bold mb-10">
          Batas Wilayah
        </h1>
        <div className="flex justify-center items-center gap-10 cursor-default pointer-events-none">
          <div className="w-3/12 bg-red-900 rounded-xl p-5 shadow-black/20 shadow-md flex flex-col justify-center items-center gap-1 text-white">
            <i className="bi-arrow-up-circle-fill text-5xl"></i>
            <p>Utara</p>
            <h1 className="font-bold text-xl">Desa Konohagakure</h1>
          </div>
          <div className="w-3/12 bg-red-900 rounded-xl p-5 shadow-black/20 shadow-md flex flex-col justify-center items-center gap-1 text-white">
            <i className="bi-arrow-right-circle-fill text-5xl"></i>
            <p>Barat</p>
            <h1 className="font-bold text-xl">Desa Amegakure</h1>
          </div>
          <div className="w-3/12 bg-red-900 rounded-xl p-5 shadow-black/20 shadow-md flex flex-col justify-center items-center gap-1 text-white">
            <i className="bi-arrow-down-circle-fill text-5xl"></i>
            <p>Selatan</p>
            <h1 className="font-bold text-xl">Desa Kirigakure</h1>
          </div>
          <div className="w-3/12 bg-red-900 rounded-xl p-5 shadow-black/20 shadow-md flex flex-col justify-center items-center gap-1 text-white">
            <i className="bi-arrow-left-circle-fill text-5xl"></i>
            <p>Timur</p>
            <h1 className="font-bold text-xl">Desa Sunagakure</h1>
          </div>
        </div>
      </div>
    );
}