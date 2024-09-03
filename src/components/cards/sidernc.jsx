import React from 'react';

const SideRnc = ({ setContent, activeContent, content }) => {
    const links = [
        { key: 'about', label: `About R&c cell` },
        { key: 'head', label: `R&c Officer`, description: 'Dr. Vijaykumar Radadiya' },
        { key: 'patents', label: 'Patents & Research', description: 'Working for better future' },
        { key: 'publication', label: 'Publiications', description: 'Well equipped 3 labs' },
        { key: 'entrepreneurship', label: 'Entrepreneurship', description: 'Syllabus' },
        { key: 'startups', label: 'Startups', description: 'Research Highlights' },
        { key: 'mou', label: 'Mou', description: 'Research Highlights' },
    ];

    return (
        <div className="h-full w-1/6 ml-4 mb-2">
            <div className="px-4">
                <div className="space-y-4 ml-4 cursor-pointer ">
                    <h1 className='text-xl font-semibold text-[#660000]'></h1>
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

export default SideRnc;
