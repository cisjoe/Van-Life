import { useEffect, useState } from "react";
import vansData from "../../vansData";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

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
    <>
      <div className="HostVanDetail page padding-26">
        <div className="back-to-vans">
          {/* path not ".." because of nested nav bug */}
          <Link to="/host/vans" relative="path">
            <i>&larr;</i>
            <u>Back to all vans</u>
          </Link>
        </div>
        <div className="bg-white-holder">
          <div className="hostVanDetail-van" key={van.id}>
            <img className="hostVanDetail-img" src={van.imageUrl} />
            <div className="hostVanDetail-info">
              <span
                className="hostVanDetail-type"
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
              <h3 className="hostVanDetail-title">{van.name}</h3>
              <span className="hostVanDetail-price">
                <b>${van.price}</b>/day
              </span>
            </div>
          </div>
          <nav className="hostVanDetail-nav">
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={van} />
        </div>
      </div>
    </>
  );
}
