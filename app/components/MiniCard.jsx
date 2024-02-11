import React from "react";

const MiniCard = ({ name, id, onBtnClick }) => {
  return (
    <div
      className="flex flex-row items-center bg-white border border-gray-300 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-10 p-1 mx-1 my-1"
      data-id={id}
    >
      <div>{name}</div>
      <button
        className=" bg-red-400 rounded-lg px-1 ml-2 text-white font-medium "
        onClick={onBtnClick}
        data-id={id}
      >
        x
      </button>
    </div>
  );
};

export default MiniCard;
