import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {

  const van = useOutletContext()

  return (
    <div className="HostVanPhotos">
      <img src={van.imageUrl} />
      <img src={van.imageUrl} />
      <img src={van.imageUrl} />
      </div>
  );
}
