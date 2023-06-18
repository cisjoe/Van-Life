import { useState } from "react";
import vansData from "../../vansData";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState(vansData);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vansElements = filteredVans.map((van) => {
    let typeStyle;
    if (van.type === "simple") {
      typeStyle = { backgroundColor: "#E17654" };
    } else if (van.type === "luxury") {
      typeStyle = { backgroundColor: "#161616" };
    } else {
      typeStyle = { backgroundColor: "#115E59" };
    }

    return (
      <div className="Van" key={van.id}>
        <Link to={van.id}>
          <img className="van-img" src={van.imageUrl} />
          <div className="van-info">
            <h3 className="van-title">{van.name}</h3>
            <div className="van-price">
              <span className="price">${van.price}</span>
              <span className="for">/day</span>
            </div>
          </div>
          <span className="van-type" style={typeStyle}>
            {van.type.slice(0, 1).toUpperCase() + van.type.slice(1)}
          </span>
        </Link>
      </div>
    );
  });

  return (
    <div className="Vans page">
      <h2 className="page-title">Explore our van options</h2>
      <div className="filter">
        <button
        className={`simple ${typeFilter === "simple" ? "selected" : ""}`}
          onClick={() => {
            setSearchParams({ type: "simple" });
          }}
        >
          Simple
        </button>
        <button
        className={`luxury ${typeFilter === "luxury" ? "selected" : ""}`}
          onClick={() => {
            setSearchParams({ type: "luxury" });
          }}
        >
          Luxury
        </button>
        <button
        className={`rugged ${typeFilter === "rugged" ? "selected" : ""}`}
          onClick={() => {
            setSearchParams({ type: "rugged" });
          }}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            className="clear"
            onClick={() => {
              setSearchParams({});
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="vans-holder">{vansElements}</div>
    </div>
  );
}
