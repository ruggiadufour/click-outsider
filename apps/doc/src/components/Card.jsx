import { ClickOutsiderWrapper } from "click-outsider-react";

export default function Card() {
  return (
    <div onClick={() => console.log("Click div")}>
      dale capo
      <ClickOutsiderWrapper
        onClick={() => console.log("Click ClickOutsiderWrapper")}
        onClickOutside={() => console.log("Outside brah")}
        style={{ backgroundColor: "red" }}
      >
        <p>Hola mundo</p>
      </ClickOutsiderWrapper>
    </div>
  );
}
