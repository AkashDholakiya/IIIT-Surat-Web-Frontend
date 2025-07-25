import React from 'react';

const SSIPPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-custom-red text-center">
        Student Startup and Innovation Policy (SSIP)
      </h1>

      <div className="space-y-6 text-gray-900 text-lg leading-relaxed">
        <p>
          The <strong>Student Startup and Innovation Policy (SSIP)</strong> was launched by the Government of Gujarat in January 2022. The institute has received funds of around <strong>₹1.87 crore</strong> under this policy for a period of 5 years.
          The institute provides funding assistance, mentorship, incubation, and accelerator support to the student startups through this policy.
        </p>
        <p>
          The institute aims to create an innovation-driven ecosystem and develop a culture of entrepreneurship among students. It seeks to foster innovation, creativity, and collaboration among startups, industry, academia, and government.
        </p>
        <p>
          <a
            href="/Report_of_SSIP.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-red font-semibold hover:underline"
          >
            Click here to get details on SSIP 1.0 (Duration: 29/01/2021 to 10/01/2022)
          </a>
        </p>
      </div>
    </div>
  );
};

export default SSIPPage;
