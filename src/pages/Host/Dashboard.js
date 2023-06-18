import { Link } from "react-router-dom";
import HostVans from "./HostVans";

export default function Dashboard() {
  return (
    <div className="Dashboard page">
      <div className="income-brief">
        <h2>Welcome!</h2>
        <div className="period-details-holder">
          <span className="period">
            Income last{" "}
            <u>
              <b>30 days</b>
            </u>
          </span>
          <Link to="income" className="details-link">
            Details
          </Link>
        </div>
        <span className="income">$2,260</span>
      </div>

      <div className="reviews-brief">
        <div className="score-holder">
          <b>Review score</b>
          <span className="score-val">
            <img
              className="star-icon"
              src={require("../../assets/images/Star.png")}
            />
            <b>5.0</b>/5
          </span>
        </div>
        <Link to="reviews" className="details-link">
          Details
        </Link>
      </div>

      <HostVans showViewAll={true} dash={true} />
    </div>
  );
}
