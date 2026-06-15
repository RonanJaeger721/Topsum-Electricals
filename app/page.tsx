import Image from "next/image";
import { Header } from "./Header";

const quoteUrl =
  "https://wa.me/263785753731?text=Hello%20Topsum%20Electricals%2C%20I%20would%20like%20a%20quote.";
const facebookUrl = "https://www.facebook.com/share/1AGLcxaRRm/?mibextid=wwXIfr";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-label="Premium building renovation and lighting installation" />
          <div className="hero-shade" />
          <div className="hero-content">
            <Image
              className="hero-logo"
              src="/assets/topsum-logo-cropped.png"
              alt="Topsum Electricals"
              width={290}
              height={200}
              priority
            />
            <p className="eyebrow">Construction | Tiling | Renovations | Solar Lights | Flood Lights</p>
            <h1>Premium finishes. Reliable lighting. Built properly.</h1>
            <p className="hero-copy">
              Topsum Electricals delivers construction, tiling, renovations, solar lighting, and flood light
              installations for homes, shops, yards, and commercial spaces.
            </p>
            <div className="hero-actions" aria-label="Contact actions">
              <a className="button primary" href={quoteUrl} target="_blank" rel="noopener">
                Request a Quote
              </a>
              <a className="button glass" href="tel:+263785753731">
                Call 078 575 3731
              </a>
            </div>
          </div>
          <div className="hero-proof" aria-label="Service highlights">
            <span>Site work</span>
            <span>Clean tiling</span>
            <span>Outdoor lighting</span>
          </div>
        </section>

        <section className="intro" aria-label="Company summary">
          <div className="intro-copy">
            <span className="section-kicker">Topsum Electricals</span>
            <h2>A contractor-style website presence for a team that handles the practical work.</h2>
            <p>
              From room upgrades and tile finishes to solar lights and flood lights, the service is built around useful
              workmanship, clear communication, and neat results.
            </p>
          </div>
          <div className="intro-stat">
            <strong>5</strong>
            <span>Core service areas handled by one responsive team.</span>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-heading">
            <span className="section-kicker">Services</span>
            <h2>Built, finished, lit, and secured.</h2>
          </div>
          <div className="service-grid">
            <article className="service-card tall">
              <Image
                src="/assets/generated-renovation-tiling.png"
                alt="Premium renovation and tiling finish"
                width={900}
                height={720}
              />
              <div>
                <span>01</span>
                <h3>Construction & Renovations</h3>
                <p>
                  General building work, repairs, upgrades, and careful renovation finishes for residential and
                  commercial spaces.
                </p>
              </div>
            </article>
            <article className="service-card">
              <Image
                src="/assets/generated-renovation-tiling.png"
                alt="Clean floor tiling and interior renovation"
                width={900}
                height={720}
              />
              <div>
                <span>02</span>
                <h3>Tiling</h3>
                <p>Floor and wall tiling with clean lines, practical planning, and tidy finishing.</p>
              </div>
            </article>
            <article className="service-card">
              <Image
                src="/assets/generated-solar-flood-lights.png"
                alt="Solar lights and flood lights installed on a property"
                width={900}
                height={720}
              />
              <div>
                <span>03</span>
                <h3>Solar & Flood Lights</h3>
                <p>Outdoor lighting installation for yards, driveways, entrances, parking areas, shops, and work sites.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="projects-copy">
            <span className="section-kicker">Project look</span>
            <h2>Images that show the kind of work clients expect before they call.</h2>
            <p>
              A stronger site needs more than a list of services. These visuals give Topsum the same polished, capable
              feel people expect from serious construction and electrical brands.
            </p>
            <a className="text-link" href={facebookUrl} target="_blank" rel="noopener">
              View Facebook page
            </a>
          </div>
          <div className="project-gallery" aria-label="Generated service imagery">
            <figure>
              <Image src="/assets/generated-hero.png" alt="Modern construction and lighting project" width={900} height={1200} />
              <figcaption>Construction finish</figcaption>
            </figure>
            <figure>
              <Image
                src="/assets/generated-electrical-installation.png"
                alt="Neat electrical installation with installed lighting"
                width={900}
                height={600}
              />
              <figcaption>Electrical installation</figcaption>
            </figure>
            <figure>
              <Image
                src="/assets/generated-solar-flood-lights.png"
                alt="Outdoor solar and flood light installation"
                width={900}
                height={600}
              />
              <figcaption>Solar and flood lights</figcaption>
            </figure>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-panel">
            <span className="section-kicker">Quote request</span>
            <h2>Send the job details on WhatsApp.</h2>
            <p>
              Share the service needed, location, preferred timing, and photos of the space. Topsum can respond with
              next steps and pricing guidance.
            </p>
            <div className="contact-actions">
              <a className="button primary" href={quoteUrl} target="_blank" rel="noopener">
                Chat on WhatsApp
              </a>
              <a className="button dark" href={facebookUrl} target="_blank" rel="noopener">
                Visit Facebook
              </a>
            </div>
          </div>
          <aside className="contact-card" aria-label="Contact details">
            <Image src="/assets/topsum-logo-cropped.png" alt="" width={360} height={249} />
            <dl>
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a href="https://wa.me/263785753731" target="_blank" rel="noopener">
                    078 575 3731
                  </a>
                </dd>
              </div>
              <div>
                <dt>Facebook</dt>
                <dd>
                  <a href={facebookUrl} target="_blank" rel="noopener">
                    Topsum Electricals
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Topsum Electricals. Construction, tiling, renovations, solar lights installation, and flood lights.</p>
      </footer>
    </>
  );
}
