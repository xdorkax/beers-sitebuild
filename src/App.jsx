import Card from "./Card"; 
import data from "./data";

function App() {
  return (
    <div>
      <nav className="nav">
        <h1>Best Beers</h1>
        <span className="material-icons menu">menu</span>
      </nav>
      <div className="container">
      <div className="beers">
      


      {data.cards.map((beer, index) => (
        <Card key={index} index={index} {...beer} />
      ))}
      </div>
      </div>
    </div>
  );
}

export default App;
