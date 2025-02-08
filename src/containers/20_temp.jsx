import React, { useState } from 'react';
import PublicationDiv from '../components/cards/publicationComp_card';
import data from '../Data/publicationData';

const Publications = () => {
    const {publications}=data;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = publications.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(publications.length / itemsPerPage);
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <PublicationDiv title={'Publications'} cardsData={currentItems} />
            
            <div className="flex justify-center mt-8 w-full">
                <nav aria-label="Page navigation" className="flex items-center">
                    <ul className="inline-flex -space-x-px">
                        <li>
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={` text-sm py-2.5 px-2 border border-gray-300 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100'}`}
                            >
                                Previous
                            </button>
                        </li>
                        {[...Array(totalPages)].map((_, index) => (
                            <li key={index + 1}>
                                <button
                                    onClick={() => paginate(index + 1)}
                                    className={`py-2 px-2 border border-gray-300 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`text-sm py-2.5 px-2 border border-gray-300 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100'}`}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Publications;
