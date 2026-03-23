const NetflixSeries = () => {
  const name = "The Class of Super Monsters";
  const genre = "Comedy";
  const rating = "8.1";
  let age = 19;
  const canWatch = () => {
    if (age >= 18) {
      return "Can Watch";
    } else {
      return "Not available";
    }
  };
  const about = () => {
    const about =
      "Super Monsters (sometimes referred to as “The Class of Super Monsters”) is a colorful animated preschool series created by Avi Arad that follows a group of young children who transform into little monsters when the sun goes down. The show originally premiered on Netflix and is designed for young audiences, teaching friendship, teamwork, and confidence.";

    return about;
  };

  return (
    <div>
      <div>
        <img src="kids.webp" alt="kids.webp" width="30%" height="30%"></img>
      </div>

      <h2> Show Name : {name} </h2>
      <h2> Genre : {genre} </h2>
      <h3> Rating : {rating} </h3>
      <p> Story : {about()} </p>

      <button> {canWatch()} </button>
    </div>
  );
};


export default NetflixSeries; 