import kepalaDesa from "/avatar/kepala-desa.png"
import user from "/avatar/user.png"
import struktur from "/struktur.drawio.svg";

export default function Struktur() {
  return (
    <div className="w-full">
      <h1 className="text-red-700 text-3xl text-center font-bold mb-10">
        Struktur Organisasi
      </h1>
      <div className="w-full">
        <img src={struktur} alt="Struktur Organisasi" className="w-full" />
      </div>
      {/* <div className="flex flex-col justify-center items-center gap-5">
          <div className="mx-auto flex justify-center items-center bg-white rounded-xl overflow-hidden shadow-black/20 shadow-md">
            <img src={user} alt="Kepala Desa" className="p-2 w-20" />
            <div className="flex flex-col jusitfy-center items-start p-3">
              <h1 className="text-xl font-bold">Nama Lengkap</h1>
              <p>Kepala Desa</p>
            </div>
          </div>
          <div className="mx-auto flex justify-center items-center bg-white rounded-xl overflow-hidden shadow-black/20 shadow-md">
            <img src={user} alt="Kepala Desa" className="p-2 w-20" />
            <div className="flex flex-col jusitfy-center items-start p-3">
              <h1 className="text-xl font-bold">Nama Lengkap</h1>
              <p>Sekretaris</p>
            </div>
          </div>
          <div className="mx-auto flex justify-center items-center bg-white rounded-xl overflow-hidden shadow-black/20 shadow-md">
            <img src={user} alt="Kepala Desa" className="p-2 w-20" />
            <div className="flex flex-col jusitfy-center items-start p-3">
              <h1 className="text-xl font-bold">Nama Lengkap</h1>
              <p>Bendahara</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="mx-auto flex justify-center items-center bg-white rounded-xl overflow-hidden shadow-black/20 shadow-md">
              <img src={user} alt="Kepala Desa" className="p-2 w-20" />
              <div className="flex flex-col jusitfy-center items-start p-3">
                <h1 className="text-xl font-bold">Nama Lengkap</h1>
                <p>Staff</p>
              </div>
            </div>
            <div className="mx-auto flex justify-center items-center bg-white rounded-xl overflow-hidden shadow-black/20 shadow-md">
              <img src={user} alt="Kepala Desa" className="p-2 w-20" />
              <div className="flex flex-col jusitfy-center items-start p-3">
                <h1 className="text-xl font-bold">Nama Lengkap</h1>
                <p>Staff</p>
              </div>
            </div>
            <div className="mx-auto flex justify-center items-center bg-white rounded-xl overflow-hidden shadow-black/20 shadow-md">
              <img src={user} alt="Kepala Desa" className="p-2 w-20" />
              <div className="flex flex-col jusitfy-center items-start p-3">
                <h1 className="text-xl font-bold">Nama Lengkap</h1>
                <p>Staff</p>
              </div>
            </div>
            <div className="mx-auto flex justify-center items-center bg-white rounded-xl overflow-hidden shadow-black/20 shadow-md">
              <img src={user} alt="Kepala Desa" className="p-2 w-20" />
              <div className="flex flex-col jusitfy-center items-start p-3">
                <h1 className="text-xl font-bold">Nama Lengkap</h1>
                <p>Staff</p>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
}