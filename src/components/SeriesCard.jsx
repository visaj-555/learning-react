export const SeriesCard = ({ data }) => {
  const { name, img_url, genre, rating, description } = data;

  return (
    <li className="card">
      <img src={img_url} alt={name} />

      <div className="flex flex-col gap-2">
        <h2>{name}</h2>
        <h3>{genre.join(", ")}</h3>
        <p className="rating">⭐ {rating}</p>
        {/* <p className="description">{description}</p> */}
        <p className="text-1xl font-bold underline">{description}</p>
        <button className="btn">Watch Now</button>
      </div>
    </li>
  );
};
