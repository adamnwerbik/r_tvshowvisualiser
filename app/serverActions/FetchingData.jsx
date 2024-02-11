"use server";
import { escape } from "html-escaper";

// fetch results of search query
export async function fetchResultsOfSearch(str) {
  if (!str || str.length < 1) {
    return;
  }
  const options = {
    next: { revalidate: 604800 }, // cache for a week
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.TMDB_API_KEY,
    },
  };

  const req = await fetch(
    `https://api.themoviedb.org/3/search/tv?query=${escape(
      str
    )}&include_adult=false&language=en-US&page=1`,
    options
  );

  if (req.ok) {
    const tvshows = await req.json();
    //console.log(tvshows);
    return tvshows;
  } else {
    return;
  }
}

// fetch number seasons for given showID
export async function fetchNumOfSeasons(id) {
  const options = {
    next: { revalidate: 604800 }, // cache for a week
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.TMDB_API_KEY,
    },
  };
  const req = await fetch(`https://api.themoviedb.org/3/tv/${id}`, options);
  if (req.ok) {
    const tvShowInfo = await req.json();
    //console.log(tvShowInfo.number_of_seasons);
    return tvShowInfo.number_of_seasons;
  } else {
  }
}

// fetch season info
export async function fetchSeasonInfoForASeries(id, season) {
  const options = {
    next: { revalidate: 604800 }, // cache for a week
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.TMDB_API_KEY,
    },
  };
  const req = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${season}`,
    options
  );
  if (req.ok) {
    console.log(`Checking season ${season} for ${id}`);
    const seriesInfo = await req.json();
    return seriesInfo;
  } else {
  }
}

// fetch all seasons info for a given TV show
export async function fetchAllSeasonsInfo(id) {
  const numberOfSeasons = parseInt(await fetchNumOfSeasons(id));
  const allSeasonInfo = [];
  for (let i = 1; i < numberOfSeasons + 1; i++) {
    allSeasonInfo.push(await fetchSeasonInfoForASeries(id, i.toString()));
  }
}
