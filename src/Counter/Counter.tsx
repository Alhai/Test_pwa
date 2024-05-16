import { useCallback, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <button onClick={handleClick}>
        <p>is count {count}</p>
      </button>
    </div>
  );
}
