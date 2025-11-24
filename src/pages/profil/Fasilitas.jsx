import fasilitas from "/fasilitas/fasilitas.png"

export default function Fasilitas() {
    return (
        <div className="w-full">
            {/* <h1 className="text-red-700 text-3xl text-center font-bold mb-10">Fasilitas Umum</h1> */}
            <img src={fasilitas} alt="Fasilitas Umum" className="mx-auto w-[50%] rounded-xl shadow-black/20 shadow-lg pointer-events-none" />
        </div>
    )
}