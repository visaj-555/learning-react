export const SeriesCard = ({ data }) => {
  const { name, img_url, genre, rating, description } = data;

  return (
    <li className="card">
      <img src={img_url} alt={name} />

      <div className="card-content">
        <h2>{name}</h2>
        <h3>{genre.join(", ")}</h3>

        <p className="rating">⭐ {rating}</p>

        <p className="description">{description}</p>

        <button className="btn">Watch Now</button>
      </div>
    </li>
  );
};
