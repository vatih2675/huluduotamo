import sawah from "/sawah.jpg";
import bukit from "/bukit.jpg";

export default function Potensi() {
  return (
    <div className="w-full">
      <h1 className="text-red-700 text-3xl text-center font-bold mb-10">
        Potensi Alam
      </h1>
      <div className="flex justify-center items-start gap-5 flex-wrap">
        <div className="w-4/12 rounded-xl shadow-black/20 shadow-md cursor-pointer transition-all duration-300 hover:scale-120 overflow-hidden">
            <img src={sawah} alt="Potensi 1" className="w-full" />
        </div>
        <div className="w-4/12 rounded-xl shadow-black/20 shadow-md cursor-pointer transition-all duration-300 hover:scale-120 overflow-hidden">
            <img src={bukit} alt="Potensi 1" className="w-full" />
        </div>
      </div>
    </div>
  );
}
