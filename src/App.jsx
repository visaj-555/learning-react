import NetflixSeries from "./components/NetflixSeries";
import "./components/Netflix.css";
import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";
import { EventPropagation } from "./components/EventPropogation";

function App() {
  return (
    <section className="container">
      {/* <h1 className="card -heading">Top 10 Netflix Series in 2024</h1> */}
      {/* <NetflixSeries /> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      <EventPropagation />
    </section>
  );
}

export default App;
