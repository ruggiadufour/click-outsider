import { ClickOutsiderWrapper } from "click-outsider-react";
import { useState } from "react";

export default function Docs() {
  const [l, sl] = useState([1]);
  return (
    <div>
      <h1 onClick={() => sl((l) => [...l, l.length + 1])}>Docs</h1>
      {l.map((l) => (
        <ClickOutsiderWrapper
          key={l}
          style={{ backgroundColor: "red", padding: "5rem" }}
          onClickOutside={() => console.log("Outside brah")}
        >
          <p className="1">Hello world</p>
        </ClickOutsiderWrapper>
      ))}
    </div>
  );
}
