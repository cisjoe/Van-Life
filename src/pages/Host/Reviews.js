import Review from "../../components/Review";

export default function Reviews() {
  return (
    <div className="Reviews page padding-26">
      <div className="reviews-header">
        <h2>Your reviews</h2>
        <span className="period">
          last{" "}
          <u>
            <b>30 days</b>
          </u>
        </span>
      </div>
      <img
        src={require("../../assets/images/reviews.png")}
        className="reviews-img"
      />
      <h3>Reviews (2)</h3>
      <Review
        name="Elliot"
        date="December 1, 2022"
        comment="The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"
      />
      <Review
        name="Sandy"
        date="November 23, 2022"
        comment="This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
      />
    </div>
  );
}
