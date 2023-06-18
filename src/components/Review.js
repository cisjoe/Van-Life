export default function Review(props) {
  return (
    <div className="Review">
      <div className="rating">
        <img src={require("../assets/images/Star.png")} />
        <img src={require("../assets/images/Star.png")} />
        <img src={require("../assets/images/Star.png")} />
        <img src={require("../assets/images/Star.png")} />
        <img src={require("../assets/images/Star.png")} />
      </div>
      <div className="review-header">
        <h4 className="name">{props.name}</h4>
        <span className="date">{props.date}</span>
      </div>
      <p className="comment">{props.comment}</p>
      <hr />
    </div>
  );
}
