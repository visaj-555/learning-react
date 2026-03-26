import NetflixSeries from "./components/NetflixSeries";
import "./components/Netflix.css";

function App() {
  return (
    <section className="container">
      <h1 className="card -heading">Top 10 Netflix Series in 2024</h1>
      <NetflixSeries />
    </section>
  );
}

export default App;
