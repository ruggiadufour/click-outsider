import { ClickOutsiderWrapper } from "click-outsider-react";

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <ClickOutsiderWrapper
        style={{ backgroundColor: "red", padding: "5rem" }}
        onClickOutside={() => console.log("Outside brah")}
      >
        <p className="1">Hello world</p>
      </ClickOutsiderWrapper>
    </div>
  );
}
