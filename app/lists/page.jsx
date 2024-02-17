import React, { Suspense } from "react";
import MyChart from "../components/Chart";
import { fetchAllSeasonsInfo } from "../serverActions/FetchingData";

const page = async () => {
  const myFavShows = {
    1398: { name: "The Sopranos", data: await fetchAllSeasonsInfo("1398") },
    61662: { name: "Schitt's Creek", data: await fetchAllSeasonsInfo("61662") },
    62560: { name: "Mr Robot", data: await fetchAllSeasonsInfo("62560") },
    70523: { name: "Dark", data: await fetchAllSeasonsInfo("70523") },
    1427: { name: "Six Feet Under", data: await fetchAllSeasonsInfo("1274") },
  };

  const myDisappointingShows = {
    1398: { name: "Game of Thrones", data: await fetchAllSeasonsInfo("1399") },
    61662: { name: "House of Cards", data: await fetchAllSeasonsInfo("1425") },
    62560: { name: "Sherlock", data: await fetchAllSeasonsInfo("19885") },
    70523: { name: "Glitch", data: await fetchAllSeasonsInfo("63201") },
    1427: { name: "Altered Carbon", data: await fetchAllSeasonsInfo("68421") },
  };

  // GoT,
  return (
    <div className="min-w-full  flex flex-col items-center text-center">
      <div className=" items-center min-w-[384px] md:min-w-[600px] lg:min-w-[800px] xl:min-w-[1000px]">
        <h1>My Top 5 TV shows of all time</h1>
        <Suspense fallback={<p>Loading graph...</p>}>
          <MyChart tvshowdata={myFavShows} />
        </Suspense>
        <h1>My most 5 most dissapointing ones ;(</h1>
        <Suspense fallback={<p>Loading graph...</p>}>
          <MyChart tvshowdata={myDisappointingShows} />
        </Suspense>
      </div>{" "}
    </div>
  );
};

export default page;
