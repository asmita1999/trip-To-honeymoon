import React from "react";
import { useNavigate } from "react-router-dom";

const states = [
  "Kerala",
  "Goa",
  "Kashmir",
  "Meghalaya",
  "Udaipur",
  "Andaman",
  "Ladakh",
  "North East",
  "Kedarnath",
  "Himachal",
  "Uttarakhand",
];

const DestinationDropdown = () => {
  const navigate = useNavigate();

  const handleClick = (state) => {
    const slug = state.toLowerCase().replace(/\s+/g, "-");
    navigate(`/destination/${slug}`);
  };

  return (
    <div className="w-64 border rounded-lg shadow bg-white">
      <ul className="max-h-60 overflow-y-auto">
        {states.map((state, index) => (
          <li
            key={index}
            onClick={() => handleClick(state)}
            className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
          >
            {state}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationDropdown;
