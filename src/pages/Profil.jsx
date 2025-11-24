import sawah from "/sawah.jpg"

export default function Profil({ halaman, dataDesa }) {
  return (
    <section>
      <div
        className="w-full flex flex-col justify-center items-center h-full"
        id="pageHeader"
      >
        <h3 className="text-white text-3xl font-bold uppercase">{halaman}</h3>
        <h1 className="text-white text-6xl font-bold uppercase">{dataDesa.nama}</h1>
      </div>
    </section>
  );
}