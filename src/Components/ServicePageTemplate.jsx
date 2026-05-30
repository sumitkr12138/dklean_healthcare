import React from "react";

const ServicePageTemplate = ({ city, description, services, image }) => {
  return (
    <div className="page-container">
      

      {/* SERVICES */}
      <section className="services-section">
        <div className="container">
          <h2>Our Services in {city}</h2>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <img src={image} alt={service} />
                <h3>{service}</h3>
                <p>
                  Professional and reliable healthcare support services
                  available across {city} with experienced staff.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="container">
          <h2>Why Choose DKlean Healthcare?</h2>

          <div className="why-grid">
            <div className="why-card">
              <h3>Experienced Team</h3>
              <p>
                Trained healthcare professionals delivering quality service.
              </p>
            </div>

            <div className="why-card">
              <h3>24/7 Support</h3>
              <p>
                Dedicated customer support available anytime for assistance.
              </p>
            </div>

            <div className="why-card">
              <h3>Affordable Care</h3>
              <p>Cost-effective healthcare solutions for all families.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Book Healthcare Services in {city}</h2>
          <p>
            Contact DKlean Healthcare today for trusted and professional
            healthcare services.
          </p>

          <a
            href="/staticbookappointment"
            
           
            className="cta-btn"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
