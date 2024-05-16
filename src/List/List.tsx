import "./List.css";

const ArrayList = ["Thomas", "Zarah", "Antoine", "Yohann", "Jeremy"];

export default function List() {

  return (

    <div>
      <div>
        {ArrayList.map((prenom, i) => (
          <li
            key={i}
            className={i % 2 === 0 ? "Navy" : "rien"}>
            {prenom}
          </li>
        ))}
      </div>
    </div>
  );
}
