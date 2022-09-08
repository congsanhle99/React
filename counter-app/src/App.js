import "./App.scss";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1);
    console.log("add", count);
  };

  const onSub = () => {
    setCount(count - 1);
    console.log("sub", count);
  };

  const onReset = () => {
    setCount(0);
  };

  let color = "#fff";
  if (count >= 1) {
    color = "purple";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "#fff";
  }

  return (
    <>
      <section className="counter-sec --flex-center">
        <div className="container counter --card --center-all">
          <h1 className="--text-light">React counter app</h1>
          <p className="count --my2 --flex-center --text-md --text-light --fw-bold" style={{ color: color }}>
            {count}
          </p>
          <div className="buttons --flex-center">
            <button className="--btn --btn-danger" onClick={onSub}>
              Subtract &#45;
            </button>
            <button className="--btn" onClick={onReset}>
              Reset &#33;
            </button>
            <button className="--btn --btn-success" onClick={onAdd}>
              Add &#43;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
