import Data from "./api";
import "./Card.css";
// @ts-ignore
import SVGIcon from "./img/test.svg";

export default function MeteoCard() {
  const paris: string = "Paris";
  const berlin: string = "Berlin";
  return (
    <div className="Container-grid">
      <div className="container-card-sun">
        <Data city={berlin}></Data>
      </div>
      <div className="container-card-sun">
        <Data city={paris}></Data>
      </div>
      <div className="container-card-sun">
        <Data city={paris}></Data>
      </div>
    </div>
  );
}
