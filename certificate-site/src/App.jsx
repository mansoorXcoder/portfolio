import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const certificates = [
    {
      title: "Certificate Name 1",
      issuer: "Issuing Organization",
      date: "2025",
      link: "YOUR_GOOGLE_DRIVE_LINK",
    },
    {
      title: "Certificate Name 2",
      issuer: "Issuing Organization",
      date: "2025",
      link: "YOUR_GOOGLE_DRIVE_LINK",
    },
    {
      title: "Certificate Name 3",
      issuer: "Issuing Organization",
      date: "2025",
      link: "YOUR_GOOGLE_DRIVE_LINK",
    },
  ];

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <header className="hero">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀ Light" : "☾ Dark"}
        </button>

        <p className="eyebrow">CERTIFICATE SHOWCASE</p>

        <h1>My Certifications</h1>

        <p className="hero-text">
          A collection of my certifications, courses, and learning
          achievements.
        </p>
      </header>

      <main className="container">
        <section className="certificate-section">
          <div className="section-heading">
            <h2>Certificates</h2>
            <span>{certificates.length} Certificates</span>
          </div>

          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <article className="certificate-card" key={index}>
                <div className="certificate-icon">🏆</div>

                <div className="certificate-content">
                  <h3>{certificate.title}</h3>

                  <p className="issuer">{certificate.issuer}</p>

                  <p className="date">{certificate.date}</p>

                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-button"
                  >
                    View Certificate ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 My Certificate Showcase</p>
      </footer>
    </div>
  );
}

export default App;