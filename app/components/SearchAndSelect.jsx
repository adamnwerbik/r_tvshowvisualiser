import React from "react";
import SearchForm from "./SearchForm";
import SearchResultCard from "./SearchResultCard";

const SearchAndSelect = ({
  onInputChange,
  searchResults,
  onSearchResultClick,
  shouldBeRendered,
}) => {
  function displaySearchResults() {
    if (!shouldBeRendered) {
      return;
    }
    try {
      if (searchResults.results.length > 0) {
        {
          return searchResults.results
            .slice(0, 3)
            .map((r) => (
              <SearchResultCard
                key={r.id}
                givenID={r.id}
                name={r.name}
                image={r.poster_path}
                blurb={r.overview}
                rating={r.vote_average}
                firstAired={r.first_air_date}
                onSearchResultClick={onSearchResultClick}
              ></SearchResultCard>
            ));
        }
      } else {
      }
    } catch (error) {
      //return error.toString();
    }
  }

  return (
    <>
      <SearchForm onInputChange={onInputChange} />
      <>{displaySearchResults()}</>
    </>
  );
};

export default SearchAndSelect;
