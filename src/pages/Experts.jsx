import experts from "../data/experts";

function Experts() {

  const bookConsultation = (expertName) => {
    alert(`Consultation booked with ${expertName}`);
  };

  return (
    <div className="page-container">
      <h1>👨‍🌾 Agriculture Experts</h1>

      <div className="card-grid">
        {experts.map((expert) => (
          <div className="product-card" key={expert.id}>

            <h2>{expert.name}</h2>

            <p>{expert.specialization}</p>

            <h4>
              Experience: {expert.experience}
            </h4>

            <h4>
              Consultation Fee: {expert.fee}
            </h4>

            <br />

            <button
              className="buy-btn"
              onClick={() =>
                bookConsultation(expert.name)
              }
            >
              Book Consultation
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Experts;