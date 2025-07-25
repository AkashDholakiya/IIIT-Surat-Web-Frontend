import React from 'react';

const committees = [
  {
    name: 'Prevention of Sexual Harassment of Women - Committee',
    email: 'pshwc@iiitsurat.ac.in',
    members: [
      'Dr. Reemaben Patel',
      'Ms. Shraddha Patel',
      'Ms. Sejal Rathod',
      'Deputy Registrar (Admin)',
    ],
  },
  {
    name: 'Student Grievances Committee',
    email: 'grievances@iiitsurat.ac.in',
    members: [
      'Dr. Pradeep Kumar Roy',
      'Dr. Sachin D. Patil',
      'Dr. Dhiraj Patel',
      'Dr. Reemaben Patel',
      'Deputy Registrar (Admin)',
    ],
  },
  {
    name: 'BoG Sub-committee for Redressal of Grievances',
    email: 'grievances@iiitsurat.ac.in',
    members: [
      'Prof. C. D. Modhera',
      'Ms. Asha Ramnarayan Dave',
      'Shri Nitin Patel (Members of BoG, IIIT Surat)',
    ],
  },
  {
    name: 'SC-ST Cell',
    email: null,
    members: [
      'Dr. Ritesh Kumar',
      'Deputy Registrar (Admin)',
    ],
  },
  {
    name: 'Officer In-charge of Hindi',
    email: null,
    members: ['Dr. Ritesh Kumar'],
  },
  {
    name: 'Physical Literacy Committee',
    email: null,
    members: [
      'Dr. Shriman Narayana',
      'Dr. Ritesh Kumar',
      'Dr. Dhiraj Patel',
      'Ms. Sejal Rathod',
    ],
  },
  {
    name: 'Extra-Curricular Activity Committee',
    email: null,
    members: [
      'Dr. Reemaben Patel',
      'Dr. Shriman Narayana',
      'Dr. Sivavenkateswara Rao',
      'Dr. Dhiraj Patel',
      'Mr. Rahul Patel',
      'Ms. Shraddha Patel',
      'Ms. Sejal Rathod',
    ],
  },
];

const InstituteCommittees = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mt-10 mb-10 text-custom-red text-center">
        Committees of the Institute
      </h1>

      <div className="space-y-10">
        {committees.map(({ name, email, members }) => (
          <section
            key={name}
            className="border border-gray-300 rounded-lg p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-[#003482] mb-3">
              {name}
            </h2>

            {email && (
              <p className="mb-4">
                <span className="font-semibold">Email: </span>
                <a
                  href={`mailto:${email}`}
                  className="text-custom-red hover:underline break-words"
                >
                  {email}
                </a>
              </p>
            )}

            <div>
              <p className="font-semibold mb-1">Faculty Members Assigned:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                {members.map((member, idx) => (
                  <li key={idx}>{member}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default InstituteCommittees;
