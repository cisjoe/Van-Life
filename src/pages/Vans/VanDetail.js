import { Link, useParams } from "react-router-dom";
import vansData from "../../vansData";
import { useEffect, useState } from "react";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState(vansData ? vansData[0] : null);

  useEffect(() => {
    vansData.forEach((van) => {
      if (van.id === params.id) {
        setVan(van);
      }
    });
  }, [params.id]);

  return (
    <div className="van-detail page">
      <div className="back-to-vans">
        <Link to=".."
        relative="path"
        >
          <i>&larr;</i>
          <u>Back to all vans</u>
        </Link>
      </div>

      <img className="vanDetail-img" src={van.imageUrl} />

      <span
        className="vanDetail-type"
        style={{
          backgroundColor:
            van.type === "luxury"
              ? "#161616"
              : van.type === "rugged"
              ? "#115E59"
              : "",
        }}
      >
        {van.type.slice(0, 1).toUpperCase() + van.type.slice(1)}
      </span>

      <h3 className="vanDetail-title">{van.name}</h3>

      <span className="vanDetail-price">
        <b>${van.price}</b>/day
      </span>

      <p className="vanDetail-desc">{van.description}</p>

      <button className="rent-btn">Rent this van</button>
    </div>
  );
}
