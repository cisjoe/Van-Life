import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const van = useOutletContext();

  return (
    <div className="HostVanPricing">
      <span className="hostVanPricing-price">
        <b>${van.price}.00</b>/day
      </span>
    </div>
  );
}
