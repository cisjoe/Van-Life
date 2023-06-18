import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="About page">
      <section>
        <img src={require("../assets/images/aboutImg.png")} />
        <main className="padding-26">
          <h2>Don't squeeze in a sedan when you could relax in a van.</h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.
            <br /> (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="explore">
            <h3>
              Your destination is waiting.
              <br /> Your van is ready.
            </h3>
            <Link to="/vans">
              <button>Explore our vans</button>
            </Link>
          </div>
        </main>
      </section>
    </div>
  );
}
