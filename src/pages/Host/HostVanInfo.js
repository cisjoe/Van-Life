import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {

  const van = useOutletContext()


  return (
    <div className="HostVanInfo">
      <p>
        <b>Name:</b> {van.name}
      </p>
      <p>
        <b>Category:</b> {van.type.slice(0, 1).toUpperCase() + van.type.slice(1)}
      </p>
      <p>
        <b>Description:</b> {van.description}
      </p>
      <p>
        <b>Visibility:</b> Public
      </p>
    </div>
  );
}
