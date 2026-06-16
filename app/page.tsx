import Image from "next/image";
import { Header } from "./Header";

const quoteUrl =
  "https://wa.me/263785753731?text=Hello%20Topsum%20Electricals%2C%20I%20would%20like%20a%20quote.";
const facebookUrl = "https://www.facebook.com/share/1AGLcxaRRm/?mibextid=wwXIfr";

const wattages = ["10W", "20W", "30W", "50W", "100W", "150W", "200W+"];

const serviceCards = [
  {
    number: "01",
    title: "Flood Light Installation",
    image: "/assets/actual-flood-lights-night-road.jpeg",
    alt: "Installed flood lights illuminating a residential road at night",
    copy:
      "Their major service: flood lights for homes, roads, yards, business premises, churches, schools, entrances, and work sites."
  },
  {
    number: "02",
    title: "Solar Lights & Street Poles",
    image: "/assets/actual-solar-pole-installation.jpeg",
    alt: "Solar lighting poles being installed during the day",
    copy:
      "Solar pole lights and outdoor lighting systems for driveways, streets, estates, and areas that need reliable night visibility."
  },
  {
    number: "03",
    title: "Renovations, Brick Laying & Tiling",
    image: "/assets/generated-renovation-tiling.png",
    alt: "Premium renovation and tiling finish",
    copy:
      "Renovation work, brick laying, tiling, repairs, and clean finishing for new and existing spaces."
  },
  {
    number: "04",
    title: "Plumbing & Geysers",
    image: "/assets/generated-electrical-installation.png",
    alt: "Clean construction and installation finish",
    copy:
      "Plumbing support, geyser installation or replacement, water-line work, and practical maintenance for homes and projects."
  },
  {
    number: "05",
    title: "BOQs & Plan Drawing",
    image: "/assets/generated-hero.png",
    alt: "Modern construction and planning project",
    copy:
      "Bill of quantities support, basic plan drawing, construction planning, and material guidance before work starts."
  }
];

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
            <p className="eyebrow">Flood Lights | Solar Lights | Plumbing | Geysers | Renovations</p>
            <h1>Flood lights from 10W upwards. Installed properly.</h1>
            <p className="hero-copy">
              Topsum Electricals majors in flood lights and outdoor lighting, with installation options for homes,
              estates, shops, streets, yards, churches, schools, and work sites.
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
            <span>10W+</span>
            <span>Solar poles</span>
            <span>Flood lights</span>
          </div>
        </section>

        <section className="intro" aria-label="Company summary">
          <div className="intro-copy">
            <span className="section-kicker">Topsum Electricals</span>
            <h2>Outdoor lighting is the lead service, backed by practical construction and plumbing work.</h2>
            <p>
              The website now gives flood lights the attention they deserve, while still showing renovations, brick
              laying, tiling, BOQs, plan drawing, plumbing, and geyser work.
            </p>
          </div>
          <div className="intro-stat">
            <strong>10W+</strong>
            <span>Flood light wattages supplied and installed from 10W going upwards.</span>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-heading">
            <span className="section-kicker">Services</span>
            <h2>Lighting first, with the extra trade work clients asked to see.</h2>
          </div>
          <div className="service-grid">
            {serviceCards.map((service, index) => (
              <article className={index === 0 ? "service-card tall" : "service-card"} key={service.title}>
                <Image src={service.image} alt={service.alt} width={900} height={720} />
                <div>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wattage-band" id="wattages" aria-label="Flood light wattages">
          <div>
            <span className="section-kicker">Flood light wattages</span>
            <h2>Different wattages for different spaces.</h2>
            <p>
              Topsum installs flood lights from 10W upwards, helping clients choose the right brightness for small
              entrances, home yards, business premises, open spaces, and street-style lighting.
            </p>
          </div>
          <div className="wattage-grid">
            {wattages.map((wattage) => (
              <span key={wattage}>{wattage}</span>
            ))}
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="projects-copy">
            <span className="section-kicker">Real flood light work</span>
            <h2>Actual installed lighting from their project photos.</h2>
            <p>
              These road and pole-light photos show the practical side of Topsum's lighting work: lighting streets,
              improving visibility, and making outdoor spaces safer after dark.
            </p>
            <a className="text-link" href={facebookUrl} target="_blank" rel="noopener">
              View Facebook page
            </a>
          </div>
          <div className="project-gallery" aria-label="Actual flood light project imagery">
            <figure>
              <Image
                src="/assets/actual-flood-lights-corner.jpeg"
                alt="Flood light installed on a road corner at night"
                width={768}
                height={1024}
              />
              <figcaption>Road lighting</figcaption>
            </figure>
            <figure>
              <Image
                src="/assets/actual-flood-lights-night-road.jpeg"
                alt="Multiple flood lights illuminating a residential road"
                width={960}
                height={1280}
              />
              <figcaption>Estate visibility</figcaption>
            </figure>
            <figure>
              <Image
                src="/assets/actual-solar-poles-daylight.jpeg"
                alt="Solar lighting poles installed along a road in daylight"
                width={960}
                height={1280}
              />
              <figcaption>Solar pole lights</figcaption>
            </figure>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-panel">
            <span className="section-kicker">Quote request</span>
            <h2>Send the job details on WhatsApp.</h2>
            <p>
              Share the service needed, wattage if known, location, preferred timing, and photos of the space. Topsum
              can respond with next steps and pricing guidance.
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
        <p>
          &copy; 2026 Topsum Electricals. Flood lights, solar lights, plumbing, geysers, renovations, brick laying, BOQs,
          plan drawing, construction, and tiling.
        </p>
      </footer>
    </>
  );
}
