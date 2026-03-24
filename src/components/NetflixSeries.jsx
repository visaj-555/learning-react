import seriesData from "../api/movies.json";

const NetflixSeries = () => {
  return (
    <div>
      {seriesData.map((series) => {
        const canWatch = () => {
          return parseFloat(series.rating) >= 8
            ? "Recommended"
            : "Average";
        };

        return (
          <div key={series.id}>
            <img
              src={series.img_url}
              alt={series.name}
              width="30%"
              height="30%"
            />

            <h2>Show Name: {series.name}</h2>
            <h3>Genre: {series.genre.join(", ")}</h3>
            <h4>Rating: {series.rating}</h4>
            <p>Story: {series.description}</p>

            <button>{canWatch()}</button>

            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default NetflixSeries;

