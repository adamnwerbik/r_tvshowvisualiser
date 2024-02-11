import React from "react";

const SearchResultCard = ({
  name,
  givenID,
  image,
  blurb,
  rating,
  firstAired,
  onSearchResultClick,
}) => {
  return (
    <div
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
      data-ajdi={givenID}
      data-name={name}
      onClick={onSearchResultClick}
    >
      <img
        className="object-cover  rounded h-32 pl-2 "
        src={`https://image.tmdb.org/t/p/w200${image}`}
        alt="No image available"
      />
      <div className="flex flex-col justify-between p-4">
        <h5 className="flex mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name} - ({parseFloat(rating).toPrecision(2)})
        </h5>
        <p className="line-clamp-3">{blurb}</p>
        <p className="mb-2 text-right ">{firstAired.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;
