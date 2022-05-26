import Data from "./api";
import "./Card.css";

export default function MeteoCard() {
  const paris: string = "Paris";
  const berlin: string = "Berlin";
  const newYork: string = "New-York";
  const madrid: string = "Madrid";

  return (
    <div className="Container-grid">
      <Data latitude="52.52" longitude="13.40" city={berlin}></Data>

      <Data latitude="48.52" longitude="2.35" city={paris}></Data>

      <Data latitude="40.71" longitude="-74.01" city={newYork}></Data>

      <Data latitude="40.41" longitude="-3.70" city={madrid}></Data>
    </div>
  );
}
