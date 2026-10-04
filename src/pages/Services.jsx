/**
 * Services.jsx
 * Services page: a short list of the services I offer, each with an image,
 * followed by a call to action pointing to the Contact page.
 */
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/portfolioData'
import './Services.css'

function Services() {
  return (
    <section className="page container">
      <h1 className="page-title">Services</h1>
      <p className="page-intro">Here is how I can help you or your team.</p>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="services-cta">
        <h2>Have a project in mind?</h2>
        <p>I&apos;d love to hear about it. Send me a message and let&apos;s talk.</p>
        <Link to="/contact" className="button">
          Contact Me
        </Link>
      </div>
    </section>
  )
}

export default Services
