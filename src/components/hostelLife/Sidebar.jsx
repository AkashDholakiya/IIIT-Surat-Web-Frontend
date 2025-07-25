import React from "react";
import Button from "./utils/Button.jsx";

export default function Sidebar({ onSelect, selectedIndex }) {
  const buttons = [
    { id: 0, title: "Hostel Facilities" },
    { id: 1, title: "Hostel Committee" },
    { id: 2, title: "Student Committee" },
    { id: 3, title: "Hostel rules" },
    { id: 4, title: "Medical facility" },
    { id: 5, title: "Hostel Fees" },
  ];
  return (
    <aside className="w-3/12 h-screen pl-28 bg-white">
      {buttons.map((button) => (
        <Button
          key={button.id}
          onClick={() => onSelect(button.id)}
          className={
            selectedIndex === button.id
              ? "bg-gray-200 rounded-md px-2 py-2 border-l-4 border-blue-500"
              : ""
          }
          title={button.title}
        >
          {button.title}
        </Button>
      ))}
    </aside>
  );
}
