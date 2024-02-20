# TVShow visualiser

### What is it?

A web-app that allows users to see and compare TV show ratings over time (episodes) using data from The Movie Database (TMDB).

The deployed version of the main branch is available at [HERE](https://r-tvshowvisualiser.vercel.app/)

This product uses the TMDB API but is not endorsed or certified by TMDB.

### Built with

- NextJS
- Tailwind
- GraphJS + plugins
- TMDB API

### Instructions to clone

1. Clone the repo
2. Run `npm install` in the terminal that's open in the root of the repo directory (wherever you cloned it to)
3. Create a TMDB account and [register to access the developer API](https://www.themoviedb.org/settings/api)
4. Create a `.env.local` file with the following:  
   `TMDB_API_KEY = YOUR TMDB API KEY` **(NO QUOTATION MARKS, BRACKETS, ETC...)**
5. Type `npm run` into the terminal that's pointing towards the root directory (as in Step 2) and enjoy!

### Future WIP

- Rewrite with TS
- Episodes to have names and numbers in the charts and maybe links to them in TMDB
