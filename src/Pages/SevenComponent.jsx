import React from "react";
const publications = [
  {
    authors: "Anand P. Singh, S.P. Tiwari, I. Perfilieva",
    title: "\"L-fuzzy transforms: an operator-oriented approach\"",
    source: "Soft Computing, Springer Nature, pp. 1-13, 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rqt7CrwY52Qlq2MP4A7gf-mwh-qi9BzUe8IXkOj8IzDC2pPj",
  },
  // Repeat the same object for each publication
  {
    authors: "Anand P. Singh, S.P. Tiwari, I. Perfilieva",
    title: "\"L-fuzzy transforms: an operator-oriented approach\"",
    source: "Soft Computing, Springer Nature, pp. 1-13, 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rqt7CrwY52Qlq2MP4A7gf-mwh-qi9BzUe8IXkOj8IzDC2pPj",
  },
  {
    authors: "Anand P. Singh, S.P. Tiwari, I. Perfilieva",
    title: "\"L-fuzzy transforms: an operator-oriented approach\"",
    source: "Soft Computing, Springer Nature, pp. 1-13, 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rqt7CrwY52Qlq2MP4A7gf-mwh-qi9BzUe8IXkOj8IzDC2pPj",
  },
  {
    authors: "Anand P. Singh, S.P. Tiwari, I. Perfilieva",
    title: "\"L-fuzzy transforms: an operator-oriented approach\"",
    source: "Soft Computing, Springer Nature, pp. 1-13, 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rqt7CrwY52Qlq2MP4A7gf-mwh-qi9BzUe8IXkOj8IzDC2pPj",
  },
  {
    authors: "Anand P. Singh, S.P. Tiwari, I. Perfilieva",
    title: "\"L-fuzzy transforms: an operator-oriented approach\"",
    source: "Soft Computing, Springer Nature, pp. 1-13, 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rqt7CrwY52Qlq2MP4A7gf-mwh-qi9BzUe8IXkOj8IzDC2pPj",
  },
  {
    authors: "Anand P. Singh, S.P. Tiwari, I. Perfilieva",
    title: "\"L-fuzzy transforms: an operator-oriented approach\"",
    source: "Soft Computing, Springer Nature, pp. 1-13, 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rqt7CrwY52Qlq2MP4A7gf-mwh-qi9BzUe8IXkOj8IzDC2pPj",
  },
  {
    authors: "Anand P. Singh, S.P. Tiwari, I. Perfilieva",
    title: "\"L-fuzzy transforms: an operator-oriented approach\"",
    source: "Soft Computing, Springer Nature, pp. 1-13, 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rqt7CrwY52Qlq2MP4A7gf-mwh-qi9BzUe8IXkOj8IzDC2pPj",
  }
];

const SevenComponent = () => {
  return (
    <div className="w-full sm:w-1/2 p-4" style={{ width: '85%' }}>
      {publications.map((pub, index) => (
        <div
          key={index}
          className="p-4 border-2 border-blue-500 rounded-lg mt-4"
          style={{ borderRadius: '10px', borderColor: '#2F80F9' }}>
          <div className="flex items-center">
            {/* Image Container */}
            <div className="flex-shrink-0" style={{ width: '50px', height: '50px', overflow: 'hidden' }}>
              <img
                src={pub.image}
                alt="Description"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text Container */}
            <div className="flex-1 p-4">
              <h2 className="text-lg font-bold" style={{ color: '#08BD7E', top: "0%" }}>{pub.authors}</h2>
              <p className="text-gray-700">{pub.title}, {pub.source}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SevenComponent;