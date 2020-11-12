import React, { useState, useEffect } from "react";

// CSS
import "./Hooks.css";

function Hooks() {
  const [isActive, setIsActive] = useState(false);
  const [itemActive, setItemActive] = useState(null);

  useEffect(() => {
    console.log("Se ejecuta siempre");
  });

  useEffect(() => {
    console.log("Se ejecuta solo la primera vez");
  }, []);

  useEffect(() => {
    console.log("Se ejecuta solo si actualizas isActive");
  }, [isActive]);

  return (
    <div>
      <h1>{isActive ? "ON" : "OFF"}</h1>
      <button onClick={() => setIsActive(!isActive)}>Click me!</button>

      <ul>
        <li
          onClick={() => setItemActive(1)}
          className={itemActive === 1 ? "active" : null}
        >
          Item 1
        </li>
        <li
          onClick={() => setItemActive(2)}
          className={itemActive === 2 ? "active" : null}
        >
          Item 2
        </li>
        <li
          onClick={() => setItemActive(3)}
          className={itemActive === 3 ? "active" : null}
        >
          Item 3
        </li>
        <li
          onClick={() => setItemActive(4)}
          className={itemActive === 4 ? "active" : null}
        >
          Item 4
        </li>
      </ul>
    </div>
  );
}

export default Hooks;
