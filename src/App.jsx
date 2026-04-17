import NetflixSeries from "./components/NetflixSeries";
import "./components/Netflix.css";
import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";

function App() {
  return (
    <section className="container">
      {/* <h1 className="card -heading">Top 10 Netflix Series in 2024</h1> */}
      {/* <NetflixSeries /> */}
      <EventHandling />
      <EventProps />
    </section>
  );
}

export default App;
