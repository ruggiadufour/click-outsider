import { ClickOutsiderWrapper } from "click-outsider-react";

export default function Card() {
  return (
    <div>
      <ClickOutsiderWrapper
        onClickOutside={() => console.log("Outside React")}
        style={{ backgroundColor: "red" }}
        className="la re puta de tu vieja"
      >
        <p>Hola mundo React</p>
      </ClickOutsiderWrapper>
    </div>
  );
}
