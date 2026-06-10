function Veterinary() {

  const bookAppointment = () => {
    alert("Veterinary Appointment Booked");
  };

  return (
    <div className="page-container">
      <h1>🐄 Veterinary Services</h1>

      <div className="card-grid">

        <div className="product-card">
          <h2>Dr. Praveen</h2>
          <p>Animal Health Specialist</p>

          <button
            className="buy-btn"
            onClick={bookAppointment}
          >
            Book Appointment
          </button>
        </div>

        <div className="product-card">
          <h2>Dr. Meera</h2>
          <p>Livestock Expert</p>

          <button
            className="buy-btn"
            onClick={bookAppointment}
          >
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
}

export default Veterinary;