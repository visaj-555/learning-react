export const SeriesCard = (props) => {
  const { series } = props;

  const canWatch = () => {
    return series.rating >= 8 ? "Watch Now" : "Not Recommended";
  };

  return (
    <div>
      <img src={series.img_url} alt={series.name} width="30%" height="30%" />

      <h2>Show Name: {series.name}</h2>
      <h3>Genre: {series.genre.join(", ")}</h3>
      <h4>Rating: {series.rating}</h4>
      <p>Story: {series.description}</p>

      <button>{canWatch()}</button>

      <br />
      <br />
    </div>
  );
};