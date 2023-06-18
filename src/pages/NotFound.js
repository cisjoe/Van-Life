import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="NotFound page padding-26">
      <h2>
        Sorry, the page you were
        <br /> looking for was not found.
      </h2>
      <Link to="/" className="return-to-home">Return to home</Link>
    </div>
  );
}
