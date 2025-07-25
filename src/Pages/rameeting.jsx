import React from 'react';

// For gallery images, ensure these files exist in src/assets/research_adv/
const galleryImages = [
  'MOM_Pic1.JPG',
  'MOM_Pic2.JPG',
  'MOM_Pic3.JPG',
  'MOM_Pic4.JPG',
  'MOM_Pic5.JPG',
];

// Dynamic import of all gallery images
const importAllImages = (r) => {
  const images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};
const images = importAllImages(require.context('../assets/research_adv', false, /\.(jpg|png|jpeg|JPG|svg)$/));

const ResearchConsultancyPage = () => (
  <div className="flex flex-col items-center px-4 sm:px-6 lg:px-10 w-full max-w-7xl mx-auto py-12">

    {/* Research Advisory Board Section */}
    <div className="w-full max-w-3xl mx-auto mb-8">
      <h2 className="text-2xl font-bold text-[#003482] mb-4 text-center">Research Advisory Board</h2>
      <p className="mb-4 text-base text-gray-900">
        IIIT Surat Research Advisory Board (RAB) met on the <b>8th January 2025</b> at the Chancery Pavilion Hotel, Bangalore. The following members were present:
      </p>
      <ul className="mb-4 list-disc list-inside">
        <li><b>Prof. Anurag Kumar</b>, former Director, IISc Bangalore</li>
        <li><b>Prof. Uday Desai</b>, former Director, IIT Hyderabad & member BoG, IIIT Surat</li>
        <li><b>Prof. Supratik Mukhopadhyay</b>, Louisiana State University, USA</li>
        <li><b>Prof. Huzur Saran</b>, CSE Department, IIT Delhi & member Senate, IIIT Surat</li>
        <li><b>Mr. Deepak Bansal</b>, Corporate Vice-President, Microsoft, USA</li>
        <li><b>Dr. Rajeev Shorey</b>, Director, IIIT Surat</li>
      </ul>
      <p className="mb-2 text-base text-gray-900">
        The RAB members discussed in detail how to create a research culture at IIIT Surat that sets the institute apart from the other institutions in the country. This was the first meeting of the Research Advisory Board of IIIT Surat.
      </p>
    </div>

    {/* Gallery */}
    <h3 className="text-xl font-semibold text-[#003482] mb-4 mt-10">RAB Meeting Photo Gallery</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
      {galleryImages.map((filename, idx) => (
        <img
          key={idx}
          src={images[filename] ? images[filename].default || images[filename] : ''}
          alt={`RAB Meeting Photo ${idx + 1}`}
          className="w-full rounded-xl"
          loading="lazy"
        />
      ))}
    </div>
  </div>
);

export default ResearchConsultancyPage;
