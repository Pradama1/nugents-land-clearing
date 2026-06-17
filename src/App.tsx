import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const phone = "(352) 639-3496";
  const phoneLink = "tel:3526393496";
  const location = "Citrus County & West Central Florida";

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const services = [
    { 
      title: "Commercial Land Clearing", 
      description: "Complete site preparation for new developments, right-of-way maintenance, and large-scale acreage clearing.",
      image: "/svc-clearing.jpg"
    },
    { 
      title: "Hazardous Tree Removal", 
      description: "Expert removal of high-risk trees near structures, power lines, or public areas using advanced rigging techniques.",
      image: "/svc-tree.jpg"
    },
    { 
      title: "Stump Grinding & Removal", 
      description: "Full-depth stump grinding to clear the way for landscaping, paving, or new construction projects.",
      image: "/svc-stump.jpg"
    }
  ];

  const gallery = Array.from({ length: 11 }, (_, i) => `/gallery/work-${String(i + 1).padStart(2, '0')}.jpg`);

  return (
    <div className="app">
      {/* Transparent header overlaid on hero, solid on scroll */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#top" className="logo">
            <span className="logo-script">Nugent's</span>
            <span className="logo-sub">Tractor &amp; Tree, LLC</span>
          </a>
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
               <img src="/feature.jpg" alt="Nugent's Tractor & Tree crew on a tree removal job" style={{width: '100%', borderRadius: '4px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Gallery */}
      <section className="gallery-section section-padding">
        <div className="container">
          <div className="text-center">
            <h2>Our Work</h2>
            <p>Real jobs, real results across West Central Florida.</p>
          </div>
          <div className="work-grid">
            {gallery.map((src, i) => (
              <div key={i} className="work-tile">
                <img src={src} alt={`Nugent's Tractor & Tree completed job ${i + 1}`} loading="lazy" />
              </div>
            ))}
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
                <strong>NUGENT'S</strong> TRACTOR & TREE, LLC
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
