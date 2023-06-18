import { useState } from "react";
import vansData from "../../vansData";
import { Link } from "react-router-dom";

export default function HostVans(props) {
  const [vans, setVans] = useState(vansData);

  const hostVansElements = vans.map((van) => {
    if (van.hostId === 123) {
      return (
        <Link key={van.id} className="van-row-link" to={props.dash ? `vans/${van.id}` : van.id}>
          <div className="van-row" key={van.id}>
            <img className="hostVan-img" src={van.imageUrl} />
            <div className="hostVan-info">
              <h3 className="hostVan-title">{van.name}</h3>
              <span className="hostVan-price">${van.price}/day</span>
            </div>
          </div>
        </Link>
      );
    }
  });

  return (
    <div className="HostVans page padding-26">
      <div className="for-link-holder">
        <h2 className="page-title">Your listed vans</h2>
        {props.showViewAll && <Link to="vans">View all</Link>}
      </div>
      <div className="hostVans-holder">{hostVansElements}</div>
    </div>
  );
}
