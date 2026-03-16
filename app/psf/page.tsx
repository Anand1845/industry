import React from 'react';

const FermenterProductPage = () => {
  const technicalSpecs = [
    { label: "Model No", value: "PS-5" },
    { label: "Type", value: "Mechanical Cup Filler With  Gear" },
    { label: "Diamention", value: "2.5x3x7 Feet" },
    { label: "Weight", value: "250Kg ( Approx )" },
    { label: "Power Supply", value: "230 Vac Single Phase, 3Kw" },
    { label: "Motar", value: "0.5 Hp Single Phase (Crompton Or Godrej)" },
    { label: "PIc", value: "Digital Controller" },
    { label: "Temp.Count", value: "Multispan" },
    { label: "I-mark", value: "Multispan" },
    { label: "Gearbox", value: "Alluminium Warm Gear" },
    { label: "M/C Part", value: "Ms Fabricated With Powder Coated (Da Grey)" },
    { label: "Side Cover", value: "Ss 202" },
    { label: "Contact Part", value: "Ss 304" },
    { label: "Plastic Weidth", value: "Min. 120 Mm To Max. 220 Mm" },
    { label: "Filling System", value: "Valumatric (Fidding With round hopper)" },
    { label: "Speed", value: "30-40 Ppm (According To Product Flow)" },
    { label: "Sealing Type", value: "Side or Center Seal" },
    { label: "Capacity", value: "1 Gm To 5 Gm" },
    { label: "Price", value: "1,15,000" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 text-gray-800">
       
      {/* Top Section: Image and Description */}
      <section className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row mb-10">
        <div className="md:w-1/2 p-4 flex items-center justify-center bg-gray-100">
          {/* Replace src with your actual image path */}
          <img 
            src="/c4.jpeg" 
            alt="Fermenter Machine" 
            className="rounded-lg shadow-sm object-cover max-h-125"
          />
        </div>
        
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">PS-5</h1>
          <p className="text-lg font-semibold text-slate-600 mb-4">Capacity: 1 Gm To 5 Gm</p>
          
          <div className="space-y-4 leading-relaxed text-gray-700">
            <p>
              A Fermenter Machine provides a clean and controlled environment used to grow and maintain 
              microbial or cell cultures under controlled conditions, playing a crucial role in various 
              industrial and research applications.
            </p>
            
            <p>
              Typically made of stainless steel or borosilicate glass, fermenter machines are available in 
              a range of sizes—from small <span className="text-blue-600 font-medium">laboratory units</span> to large-scale industrial systems.
            </p>
            <p>
              These <span className="text-blue-600 font-medium">industrial fermenter tanks</span> are equipped with essential components like 
              agitators, spargers for gas exchange, and advanced sensors. Modern fermenters feature 
              automated control systems such as PLC or SCADA for real-time monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Section: Technical Specifications */}
      <section className="bg-white rounded-lg shadow-md p-8 border-t-4 border-orange-500">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Technical Specifications:</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody>
              {technicalSpecs.map((spec, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-700 w-1/3 md:w-1/4">{spec.label}:</td>
                  <td className="py-3 px-4 text-gray-600">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded shadow-lg transition duration-300">
            Get a Free Quote Now
          </button>
        </div> */}
      </section>
    </div>
    
  );
};

export default FermenterProductPage;