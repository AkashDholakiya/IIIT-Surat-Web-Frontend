import React from "react";

export default function Bar8({ select, selectSub, first, second }) {
  const handleClick = (category, subCategory) => {
    first(category);
    second(subCategory);
  };

  const renderButton = (label, category, subCategory) => {
    return (
      <div
        className={`mr-1 ml-1 px-2 py-1 rounded text-base cursor-pointer ${select === category && "focus:ring-1 bg-blue-800 text-white focus:ring-blue-800"}`}
        onClick={() => handleClick(category, subCategory)}
      >
        {label}
      </div>
    );
  };

  const renderSubMenu = (category) => {
    const submenu = [
      "Postgraduate",
      "Undergraduate",
      "Alumini Relation",
      "Career Service",
      "PR Unit",
      "Support And Utility",
    ];

    return (
      <div className="mt-5 flex second">
        {submenu.map((label, index) => (
          <React.Fragment key={index}>
            {renderButton(`${label}${category ? category : ""}`, category, index)}
            <span className="border-r-2 border-current"></span>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="w-3/4">
      <div className="flex first">
        {renderButton("Administration", 0, 0)}
        <span className="border-r-2 border-current"></span>
        {renderButton("Academics", 1, 0)}
        <span className="border-r-2 border-current"></span>
        {renderButton("Administrative", 2, 0)}
        <span className="border-r-2 border-current"></span>
        {renderButton("Legal Cell", 3, 0)}
      </div>

      {select === 0 && renderSubMenu(0)}
      {select === 1 && renderSubMenu(1)}
      {select === 2 && renderSubMenu(2)}
      {select === 3 && renderSubMenu(3)}
    </div>
  );
}
