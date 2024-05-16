import "./List.css";

import { useState } from "react";

const ArrayList = ["Thomas", "Zarah", "Antoine", "Yohann", "Jeremy"];

export default function List() {
  const [value, setValue] = useState("");

  return (
    // <div>
    //   {List.map((prenom) => (
    //     <li>{prenom}</li>
    //   ))}
    // </div>
    <div>
      <div>
        {ArrayList.map((prenom, i) => (
          <li
            key={i}
            className={i % 2 === 0 ? "Navy" : "rien"}
            // style={{
            //   color: i % 2 === 0 ? "blue" : "red",
            // }}
          >
            {prenom}
          </li>
        ))}
      </div>
    </div>
  );
}
