import React, { useState, useEffect } from "react";
import "./Jokes.scss";
function Jokes() {
  const url = "http://api.icndb.com/jokes/random";
  const [isLoading, setIsLoading] = useState(true);
  console.log("111111", isLoading);
  const [joke, setJoke] = useState({});

  const getJoke = async () => {
    // setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setJoke(data.value);
    setIsLoading(false);
  };
  console.log("222222", isLoading);

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
      <section className="jokes-sec --center-all">
        <div className="container joke --card --flex-center --dir-color --bg-light">
          <h2 className="--my2 ">Random Jokes Generate</h2>
          <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`} alt="" />
          <hr />
          {isLoading ? <h3>Loading...</h3> : <p className="--my2">{joke.joke}</p>}
          <button onClick={getJoke} className="--btn --btn-success --my2 --btn-block">
            Random Joke
          </button>
        </div>
      </section>
    </>
  );
}

export default Jokes;
