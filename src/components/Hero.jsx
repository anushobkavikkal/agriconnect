import heroImage from "../assets/hero-farm.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-content">
        <h1>AgriConnect</h1>

        <h2>
          Connecting Farmers, Experts &
          Veterinary Services
        </h2>

        <p>
          Buy farming products, sell crops,
          consult agricultural experts and
          book veterinary doctors all in
          one platform.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Marketplace
          </button>

          <button className="secondary-btn">
            Book Expert
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;