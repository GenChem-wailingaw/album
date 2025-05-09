<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>Awesome Company | Your Trusted Partner</title>
<style>
  /* Reset & Base */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f4f7f9;
    color: #333;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: #0078d7;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  a:hover, a:focus {
    color: #005ea3;
    outline: none;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Container */
  .container {
    max-width: 350px;
    margin: 0 auto;
    padding: 0 15px;
  }

  header {
    background: #0078d7;
    color: white;
    padding: 1.25rem 0;
    text-align: center;
  }
  header h1 {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  /* Hero section */
  .hero {
    background: linear-gradient(135deg, #4a90e2, #005ea3);
    color: #fff;
    padding: 2rem 1rem 3rem;
    text-align: center;
    border-radius: 0 0 30px 30px;
    margin-bottom: 1.5rem;
  }
  .hero h2 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  .hero p {
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }
  .btn-primary {
    background: #ffde59;
    border: none;
    color: #003366;
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    border-radius: 40px;
    cursor: pointer;
    font-size: 1rem;
    box-shadow: 0 4px 12px rgb(255 222 89 / 0.5);
    transition: background-color 0.3s ease;
  }
  .btn-primary:hover, .btn-primary:focus {
    background: #f9d739;
    outline: none;
  }

  /* Section Titles */
  section h3 {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
    color: #0078d7;
    font-weight: 700;
  }
  section p.lead {
    text-align: center;
    margin-bottom: 2rem;
    color: #555;
  }

  /* About Section */
  #about {
    padding-bottom: 1.5rem;
  }

  /* Services Section */
  #services {
    background: white;
    padding: 1.5rem 1rem;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
    margin-bottom: 2rem;
  }
  .services-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .service-item {
    text-align: center;
    color: #333;
  }
  .service-icon {
    font-size: 2.5rem;
    color: #0078d7;
    margin-bottom: 0.5rem;
  }
  .service-title {
    font-weight: 600;
    font-size: 1rem;
  }

  /* Testimonials */
  #testimonials {
    padding-bottom: 1.5rem;
  }
  .testimonial {
    background: white;
    border-left: 5px solid #0078d7;
    padding: 1rem 1rem 1rem 1.25rem;
    margin-bottom: 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 0.08);
    font-style: italic;
    color: #444;
  }
  .testimonial cite {
    display: block;
    margin-top: 0.5rem;
    font-style: normal;
    font-weight: 700;
    color: #0078d7;
    text-align: right;
  }

  /* Contact Section */
  #contact {
    background: white;
    padding: 1rem 1rem 2rem;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
    margin-bottom: 2rem;
  }
  #contact form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  label {
    font-weight: 600;
    font-size: 0.9rem;
    color: #444;
  }
  input[type="text"],
  input[type="email"],
  textarea {
    border: 1.5px solid #ccc;
    padding: 0.5rem 0.75rem;
    border-radius: 12px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    resize: vertical;
  }
  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    border-color: #0078d7;
    outline: none;
  }
  textarea {
    min-height: 80px;
  }
  button[type="submit"] {
    background: #0078d7;
    color: white;
    border: none;
    padding: 0.75rem 1.25rem;
    border-radius: 40px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 4px 12px rgb(0 120 215 / 0.5);
    transition: background-color 0.3s ease;
  }
  button[type="submit"]:hover,
  button[type="submit"]:focus {
    background: #005ea3;
    outline: none;
  }

  /* Footer */
  footer {
    background: #003366;
    color: #caf0f8;
    text-align: center;
    font-size: 0.85rem;
    padding: 1rem 0;
  }
  .social-links a {
    color: #caf0f8;
    margin: 0 0.5rem;
    font-size: 1.25rem;
    display: inline-block;
    transition: color 0.3s ease;
  }
  .social-links a:hover,
  .social-links a:focus {
    color: #ffd166;
    outline: none;
  }

  /* Mobile-friendly tweaks */
  @media (max-width: 350px) {
    .services-list {
      grid-template-columns: 1fr;
    }
  }
</style>
</head>
<body>
  <header>
    <div class="container">
      <h1>Awesome Company</h1>
    </div>
  </header>
  <main class="container" role="main">
    <section class="hero" aria-label="Company introduction">
      <h2>Your Trusted Partner in Success</h2>
      <p>We provide innovative solutions tailored to your business needs.</p>
      <button class="btn-primary" type="button" onclick="document.getElementById('contact-form').scrollIntoView({behavior:'smooth'});">Get in Touch</button>
    </section>

    <section id="about" aria-label="About Awesome Company">
      <h3>About Us</h3>
      <p class="lead">At Awesome Company, we believe in empowering businesses through technology and creativity. With over a decade of experience, we deliver tailored services that drive growth and excellence.</p>
    </section>

    <section id="services" aria-label="Our services">
      <h3>Our Services</h3>
      <div class="services-list">
        <div class="service-item" tabindex="0" aria-label="Consulting service">
          <div class="service-icon" aria-hidden="true">💼</div>
          <div class="service-title">Consulting</div>
        </div>
        <div class="service-item" tabindex="0" aria-label="Custom software development">
          <div class="service-icon" aria-hidden="true">💻</div>
          <div class="service-title">Software Development</div>
        </div>
        <div class="service-item" tabindex="0" aria-label="Digital marketing service">
          <div class="service-icon" aria-hidden="true">📈</div>
          <div class="service-title">Digital Marketing</div>
        </div>
        <div class="service-item" tabindex="0" aria-label="Customer support service">
          <div class="service-icon" aria-hidden="true">🤝</div>
          <div class="service-title">Customer Support</div>
        </div>
      </div>
    </section>

    <section id="testimonials" aria-label="Customer testimonials">
      <h3>What Our Clients Say</h3>
      <blockquote class="testimonial">
        "Awesome Company helped us transform our digital strategy. Their team is innovative, responsive, and highly skilled."
        <cite>— Sarah L., CEO, Tech Solutions</cite>
      </blockquote>
      <blockquote class="testimonial">
        "Their support and expert advice have been invaluable. We couldn't ask for a better partner."
        <cite>— Mark D., Founder, StartUp Inc.</cite>
      </blockquote>
    </section>

    <section id="contact" aria-label="Contact Awesome Company">
      <h3>Contact Us</h3>
      <form id="contact-form" aria-live="polite" novalidate>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" required minlength="2" />

        <label for="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required />

        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="How can we help?" required minlength="10"></textarea>

        <button type="submit">Send Message</button>
      </form>
      <p id="form-status" role="alert" aria-live="assertive"></p>
    </section>
  </main>
  <footer>
    <div class="container">
      <div class="social-links" role="contentinfo" aria-label="Social media links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">🔗</a>
      </div>
      <p>© 2024 Awesome Company. All rights reserved.</p>
    </div>
  </footer>
<script>
  // Simple client-side form validation and mock submission
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = '';
    if (!form.checkValidity()) {
      status.textContent = 'Please fill out all fields correctly.';
      status.style.color = 'red';
      return;
    }
    // Mock submission delay
    status.textContent = 'Sending message...';
    status.style.color = '#0078d7';
    setTimeout(() => {
      status.textContent = 'Thank you for reaching out! We will get back to you soon.';
      status.style.color = 'green';
      form.reset();
    }, 1500);
  });
</script>
</body>
</html>

