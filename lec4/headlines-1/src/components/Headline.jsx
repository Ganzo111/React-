import LikeCounter from "./LikeCounter.jsx";

export default function Headline(props) {
  return (
    <div className="Headline">
      <h2>{props.time}</h2>
      <h3>{props.text}</h3>

      <p>
        Temp: {props.temp} °C | Wind: {props.wind} km/h
      </p>

      <LikeCounter />
      <hr />
    </div>
  );
}