import EpisodeCard from "./EpisodeCard";
import React from "react";

function getTopEpisodesFromData(InputData) {
  const all_eps = [];
  Object.keys(InputData).forEach((k) => {
    Object.keys(InputData[k].data).forEach((szn) => {
      InputData[k].data[szn].episodes.forEach((e) => {
        all_eps.push(e);
      });
    });
  });
  return all_eps;
}

const TopEpisodes = ({ data, showTop = 3 }) => {
  try {
    const episodesArr = getTopEpisodesFromData(data);
    const sortedEpisodesArr = episodesArr.toSorted(
      (a, b) => b.vote_average - a.vote_average
    );

    function displaySearchResults(sortedEps, showTop) {
      try {
        return sortedEps
          .slice(0, showTop)
          .map((ep) => <EpisodeCard epObj={ep} />);
      } catch (error) {}
    }
    return (
      <div className="py-8">
        <h1 className="text-center">Top-rated episodes</h1>
        {console.log(sortedEpisodesArr)}
        <div className="flex flex-col xl:flex-row">
          {displaySearchResults(sortedEpisodesArr, showTop)}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
  }
};

export default TopEpisodes;
