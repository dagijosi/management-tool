import { Close } from "@mui/icons-material";
import React from "react";

const Cards = () => {
  return (
    <div className="p-2 w-full bg-white mt-3">
      <div className="flex flex-row w-full">
        <img
          src="/image/Profile_pic.png"
          className="w-12 h-12 rounded-full mr-2"
        />
        <div className="w-full p-2">
          <div className="flex flex-row justify-between">
            <p className="text-gray-900 text-sm not-italic font-normal w-64">
              Sucking at something is the step towards being sorta good at
              something.
            </p>
            <button>
              <Close className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-row justify-between mt-2">
            <p className="text-gray-700 text-xs not-italic font-semibold bg-yellow-100 p-1">
              Jake
            </p>
            <p className="text-gray-700 text-xs not-italic font-semibold ">
              id:1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
