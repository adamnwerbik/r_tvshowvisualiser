import React from "react";

const EpisodeCard = (props) => {
  return (
    <div className="flex flex-col items-center p-2 m-5 bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        class="object-cover w-full rounded-lg md:mid-w-48 h-36"
        src={`https://image.tmdb.org/t/p/w500/${props.epObj.still_path}`}
        alt="AA"
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.epObj.name}
        </h5>
        <h6 class="mb-2 text-l tracking-tight text-gray-900 dark:text-white">
          {`S${props.epObj.season_number}E${props.epObj.episode_number} - ⭐${props.epObj.vote_average}/10`}
        </h6>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
          {props.epObj.overview}
        </p>
      </div>
    </div>
  );
};

export default EpisodeCard;
