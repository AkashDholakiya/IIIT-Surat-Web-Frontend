import React from 'react';

const NavBar = ({ setContent, activeContent  ,content}) => {
  const links = [
    { key: 'about', label: `About ${content}` },
    { key: 'team', label: `Fest Team`, description: 'Dr. Vijaykumar Radadiya' },
    { key: 'events', label: 'Events hosted', description: 'Working for better future' },
    { key: 'gallery', label: 'Memories glimpse', description: 'Well equipped 3 labs' },
  ];

  return (
    <div className="h-full w-1/6 ml-2 mb-1">
      <div className="p-2">
        <div className="space-y-4 ml-4 cursor-pointer ">
          {links.map(link => (
            <div key={link.key} className="flex items-center space-x-2 ">
              {activeContent === link.key ? (
                <div className="w-1 bg-blue-700 h-6 rounded"></div>
              ) : (
                <div className="w-1 h-6"></div>
              )}
              <div>
                <button
                  onClick={() => setContent(link.key)}
                  className={`text-blue-700 text-base font-semibold ${activeContent === link.key ? 'hover:text-red-800' : 'hover:text-black'}`}
                >
                  {link.label}
                </button>
                {link.description && (
                  <p className="text-gray-500 text-sm">{link.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
