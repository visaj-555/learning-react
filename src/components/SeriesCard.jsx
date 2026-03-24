export const SeriesCard = ({ data }) => {
  const { name, img_url, genre, rating, description } = data;

  return (
    <div>
      <img src={img_url} alt={name} width="30%" />

      <h2>Show Name: {name}</h2>
      <h3>Genre: {genre.join(", ")}</h3>
      <h4>Rating: {rating}</h4>
      <p>Story: {description}</p>
    </div>
  );
};
