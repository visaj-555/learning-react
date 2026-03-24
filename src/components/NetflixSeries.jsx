import seriesData from "../api/movies.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((currElem) => (
        <SeriesCard key={currElem.id} series={currElem} />
      ))}
    </ul>
  );
};

export default NetflixSeries;