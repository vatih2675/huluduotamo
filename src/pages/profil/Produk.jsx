import umkm1 from "/umkm/1.jpg"

export default function Produk({dataProduk}) {
    return (
        <div className="w-full">
            <h1 className="text-red-700 text-3xl text-center font-bold mb-10">Produk UMKM</h1>
            <div className="flex justify-center items-start flex-wrap">
                {dataProduk.map(({judul, harga, owner, telpon, gambar}, index) => (
                    <div key={index} className="w-3/12 p-3">
                        <div className="w-full rounded-xl overflow-hidden hover:shadow-black/20 hover:shadow-lg hover:scale-110 transition-all duration-300">
                            <img src={gambar} alt={judul} className="w-full" />
                            <div className="bg-white w-full p-3 flex justify-between items-center">
                                <div className="flex flex-col cursor-default">
                                    <h1 className="font-bold">{judul}</h1>
                                    <p>Rp. {harga}</p>
                                </div>
                                <a href={`https://wa.me/62${telpon}`} target="_blank" className="text-xs bg-red-500 hover:bg-red-700 transition-all duration-300 text-white px-2 py-1 rounded-sm" title={`Hubungi WA ${owner} - 0${telpon}`}>Beli</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}