export const SeriesCard = ({ data }) => {
  const { name, img_url, genre, rating, description } = data;

  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} width="30%" />

        <div className="card-content">
          <h2>Show Name: {name}</h2>
          <h3>Genre: {genre.join(", ")}</h3>
          <h4>Rating: {rating}</h4>
          <p>Story: {description}</p>
          <button className="btn">Watch Now</button>
        </div>
      </div>
    </li>
  );
};
