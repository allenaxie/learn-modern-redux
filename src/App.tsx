import reactLogo from "./assets/react.svg";
import { useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counterSlice";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const [numDogs, setNumDogs] = useState(10);
  const dispatch = useAppDispatch();

  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  const [countAmount, setCountAmount] = useState(0);

  const handleIncrement = () => {
    dispatch(incremented());
  };

  const handleSubmitAmount = (e: any) => {
    e.preventDefault();
    dispatch(amountAdded(countAmount));
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleIncrement}>Increment</button>
        count is {count}
        <form onSubmit={(e) => handleSubmitAmount(e)}>
          <input
            type="number"
            value={countAmount}
            onChange={(e) => setCountAmount(parseInt(e.target.value))}
          />
        </form>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
