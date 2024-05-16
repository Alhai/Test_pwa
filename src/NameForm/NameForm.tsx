import { useState } from "react";

export default function NameForm() {
  const [value, setValue] = useState("");
  const [colorValue, setValueColor] = useState("");
  
  return (
    <div>
      <div className="NameForm">
        <label>
          Nom :
          <input
            type="text"
            value={value}
            onChange={(prenom) => setValue(prenom.target.value)}
          />
        </label>
        <p> {value}</p>
      </div>
      <div className="ColorForm">
        <label>
          Couleur :
          <input
            type="color"
            value={colorValue}
            onChange={(couleur) => setValueColor(couleur.target.value)}
          />
        </label>
        <p style={{textTransform: 'uppercase'}}> {colorValue}</p>
      </div>
    </div>
  );
}
