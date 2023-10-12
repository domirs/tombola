import { useState } from "react";
import "./App.css";

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const clickHandler = () => {
    const rnd = Math.round(Math.random() * 2200);

    if (numbers.includes(rnd) || rnd === 0) {
      clickHandler();
    } else {
      setNumbers((numbers) => [rnd, ...numbers]);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Tombola 2023</h1>
      <div className="current">
        <button onClick={clickHandler}>Ziehen</button>

        <div className="number">{numbers[0]}</div>
      </div>
      <ul className="list">
        {numbers.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
