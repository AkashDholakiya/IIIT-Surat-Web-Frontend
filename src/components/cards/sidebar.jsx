import React from 'react';

const SideBar = ({ setContent, activeContent  ,content}) => {
  const links = [
    { key: 'about', label: `About Department` },
    { key: 'head', label: `Head of Department`, description: 'Dr. Pradeep Kumar Roy' },
    { key: 'faculty', label: 'Faculty', description: 'Working for better future' },
    { key: 'lab', label: 'Laboratory', description: 'Well equipped 3 labs' },
    { key: 'syllabus', label: 'Curriculum', description: 'Syllabus' },
    { key: 'seminar', label: 'Seminar Workshops', description: 'Research Highlights' },
  ];

  return (
    <div className="h-full w-1/6 ml-4 mb-2">
      <div className="p-4">
        <div className="space-y-4 ml-4 cursor-pointer ">
          {links.map(link => (
            <div key={link.key} className="flex  items-center space-x-1 ">
              {activeContent === link.key ? (
                <div className="w-1 bg-blue-700 h-8 rounded"></div>
              ) : (
                <div className="w-1 h-8"></div>
              )}
              <div>
                <button
                  onClick={() => setContent(link.key)}
                  className={`text-blue-700 text-base font-semibold ${activeContent === link.key ? 'hover:text-blue-800' : 'hover:text-black'}`}
                >
                  {link.label}
                </button>
                {link.description && (
                  <p className="text-sm text-gray-500">{link.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
