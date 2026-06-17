import React from 'react';

const App: React.FC = () => {
  const phone = "(352) 639-3496";
  const phoneLink = "tel:3526393496";
  const location = "Citrus County & West Central Florida";

  const services = [
    { 
      title: "Commercial Land Clearing", 
      description: "Complete site preparation for new developments, right-of-way maintenance, and large-scale acreage clearing.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Hazardous Tree Removal", 
      description: "Expert removal of high-risk trees near structures, power lines, or public areas using advanced rigging techniques.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800"
    },
    { 
      title: "Stump Grinding & Removal", 
      description: "Full-depth stump grinding to clear the way for landscaping, paving, or new construction projects.",
      image: "https://images.unsplash.com/photo-1590496793907-39b56f849410?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="app">
      {/* Sticky Header */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo-text">
            <strong>NUGENT'S</strong> TRACTOR & TREE
            <span>PRO LAND CLEARING & TREE CARE</span>
          </div>
          <div className="header-cta">
            <a href={phoneLink} className="phone-top">{phone}</a>
            <a href={phoneLink} className="btn btn-primary">Free Quote</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>RESIDENTIAL & COMMERCIAL SERVICES</h2>
            <h1>Land Clearing & Tree Removal</h1>
            <p>Providing professional site preparation and hazardous tree removal across {location}. Fully licensed and insured for your peace of mind.</p>
            <a href={phoneLink} className="btn btn-primary">Call For Immediate Service</a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="container trust-inner">
          <div className="trust-item">✅ Fully Licensed & Insured</div>
          <div className="trust-item">✅ 24/7 Emergency Response</div>
          <div className="trust-item">✅ Local Family Owned</div>
          <div className="trust-item">✅ Satisfaction Guaranteed</div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section section-padding">
        <div className="container">
          <div className="text-center">
            <h2>Comprehensive Land Services</h2>
            <p>Professional solutions for properties of all sizes.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-box">
                <img src={s.image} alt={s.title} />
                <div className="service-box-content">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <a href={phoneLink} style={{color: 'var(--primary-color)', fontWeight: 700, display: 'block', marginTop: '15px'}}>Learn More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Features */}
      <section className="features-section section-padding">
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              <h2>Why Professional Land Clearing Matters</h2>
              <p>Site preparation is the foundation of any successful project. At Nugent's, we combine heavy-duty equipment with arborist-level precision to ensure your land is cleared safely, legally, and efficiently.</p>
              
              <div className="check-list">
                <div className="check-item">
                  <span className="check-icon">✔</span>
                  <div>
                    <strong>Advanced Equipment:</strong> We utilize specialized tractors and rigging to handle jobs that others can't.
                  </div>
                </div>
                <div className="check-item">
                  <span className="check-icon">✔</span>
                  <div>
                    <strong>Arborist Precision:</strong> We don't just clear land; we protect the trees you want to keep.
                  </div>
                </div>
                <div className="check-item">
                  <span className="check-icon">✔</span>
                  <div>
                    <strong>Thorough Cleanup:</strong> We leave your site ready for the next phase, no debris left behind.
                  </div>
                </div>
              </div>
            </div>
            <div className="features-image">
               <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" alt="Equipment at work" style={{width: '100%', borderRadius: '4px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="text-center">
            <h2>Common Questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Do you provide free estimates?</h4>
              <p>Yes! We provide on-site consultations and free written estimates for all residential and commercial projects.</p>
            </div>
            <div className="faq-item">
              <h4>Are you licensed and insured?</h4>
              <p>Absolutely. We carry full liability and workers' compensation insurance to protect our clients and our crew.</p>
            </div>
            <div className="faq-item">
              <h4>How long does a typical clearing project take?</h4>
              <p>Timeline varies based on acreage and density, but most residential lots can be cleared within 1-3 business days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready To Start Your Project?</h2>
          <p style={{marginBottom: '30px', fontSize: '1.2rem'}}>Contact Nugent's Tractor & Tree today for your free on-site estimate.</p>
          <a href={phoneLink} className="btn" style={{background: 'white', color: 'var(--accent-color)'}}>Call {phone} Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="logo-text" style={{color: 'white'}}>
                <strong>NUGENT'S</strong> TRACTOR & TREE
              </div>
              <p style={{marginTop: '20px'}}>Locally owned and operated, providing safe, reliable and affordable land services you can trust.</p>
            </div>
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li>Tree Removal</li>
                <li>Land Clearing</li>
                <li>Stump Grinding</li>
                <li>Emergency Storm Cleanup</li>
                <li>Tree Trimming</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Service Area</h4>
              <p>Serving Citrus County, Hernando County, and West Central Florida.</p>
              <p style={{marginTop: '15px'}}><strong>Available 24/7 for Emergencies</strong></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Nugent's Tractor & Tree, LLC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
