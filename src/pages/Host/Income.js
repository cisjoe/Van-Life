import { Link } from "react-router-dom";
import Transaction from "../../components/Transaction";

export default function Income() {
  return (
    <div className="Income page padding-26">
      <h2>Income</h2>
      <div className="period-details-holder">
        <span className="period">
          last{" "}
          <u>
            <b>30 days</b>
          </u>
        </span>
      </div>
      <span className="income">$2,260</span>
      <img
        src={require("../../assets/images/income-graph.png")}
        className="income-graph"
      />
      <div className="trans-header">
        <h3>Your transactions (3)</h3>
        <span className="period">
          last{" "}
          <u>
            <b>30 days</b>
          </u>
        </span>
      </div>
      <div className="transactions">
        <Transaction cash="$720" date="1/12/22" />
        <Transaction cash="$560" date="10/11/22" />
        <Transaction cash="$980" date="23/11/22" />
      </div>
    </div>
  );
}
