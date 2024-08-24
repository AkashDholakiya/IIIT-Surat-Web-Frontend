import React from 'react'

const Sidebartnp = ({ setContent, activeContent  ,content}) => {
    const links = [
        { key: 'tnpcell', label: `About Tnp cell ` },
        { key: 'tpo', label: `T&P officer`, description: 'Dr. Pradeep Kumar Roy' },
        { key: 'placementTeam', label: 'Placement Team', description: 'Working for better future' },
        { key: 'placementStat', label: 'Placement Statistics', description: 'Well equipped 3 labs' },
        { key: 'achievers', label: 'Our Achievers', description: 'Alumni work in top MNC' },
        { key: 'guide', label: 'Placement Guidelines', description: 'Our Recruiters' },
      ];
  return (
    <div className="h-full w-1/6 ml-4 mb-2">
    <div className="px-4">
      <div className="space-y-4 ml-4 cursor-pointer ">
        {/* <h1 className='text-xl font-semibold text-[#660000]'>Computer Science</h1> */}
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
  )
}

export default Sidebartnp