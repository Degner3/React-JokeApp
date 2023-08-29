import { useEffect, useState } from "react";
import "./App.css";

// Lav en lille app der kan vise en joke. Jeres app skal også indeholde en knap der henter en ny joke.

function App() {
  const [joke, setJoke] = useState([]);


  const newJoke = () => {
    const url = "https://official-joke-api.appspot.com/jokes/random";

      fetch(url)
        .then((res) => res.json())
        .then((data) => setJoke(data));
  }

  useEffect(() => {
    newJoke()
  }, []);

  console.log("Data: ", joke);

  return (
    <>
      <section>
        <h2>Jokes:</h2>
        {/* {joke && joke.map((item) => {
          return (
            <div key={index}>
              <h3>{item.setup}</h3>
              <p>{item.punchline}</p>
            </div>
          );
        })} */}
        <div>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </div>
        <button onClick={() => newJoke()}>New Joke</button>
        <button></button>
      </section>
    </>
  );
}

export default App;
