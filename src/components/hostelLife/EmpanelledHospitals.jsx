

import React from "react";

const hospitals = [
  {
    name: "Dinbandhu Charitable Hospital",
    address:
      "Dadabhai Nagar, N.H. No. 48, B/H Tapti River, Kholwad, Kamrej, Surat - 394190, Gujarat, India.",
    emergencyContacts: ["+91 7575081024", "+91 7209141024"],
  },
  {
    name: "Shri B. D. Mehta Mahavir Heart Institute",
    address: "Athwagate, Nanpura, Surat - 395001, Gujarat, India.",
    emergencyContacts: ["+91 8980021041"],
  },
];

const EmpanelledHospitals = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center mb-2">
        <div className="w-1 bg-red-800 h-6 rounded mr-4"></div>

        <div className="w-full mx-auto">
          <h1 className="text-2xl font-semibold text-red-800">
            Empanelled Hospital
          </h1>
        </div>
      </div>

      <div className="flex gap-10">
        {hospitals.map((hospital, index) => (
          <div key={index} className="w-1/2 border-b pb-4">
            <h3 className="text-lg font-bold text-blue-800">{hospital.name}</h3>
            <p className="text-gray-700">
              <strong>Address:</strong> {hospital.address}
            </p>
            <p className="text-gray-700">
              <strong>Emergency Contact No:</strong>{" "}
              {hospital.emergencyContacts.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmpanelledHospitals;
