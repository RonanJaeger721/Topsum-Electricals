import Image from "next/image";
import { Header } from "./Header";

const quoteUrl =
  "https://wa.me/263785753731?text=Hello%20Topsum%20Electricals%2C%20I%20would%20like%20a%20quote.";
const facebookUrl = "https://www.facebook.com/share/1AGLcxaRRm/?mibextid=wwXIfr";
const orderUrl = (product: string) =>
  `https://wa.me/263785753731?text=${encodeURIComponent(
    `Hello Topsum Electricals, I would like to order/enquire about: ${product}.`
  )}`;

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
    image: "/assets/actual-street-light-road-day.jpeg",
    alt: "Street lights installed along a curved road in daylight",
    copy:
      "Solar pole lights and outdoor lighting systems for driveways, streets, estates, and areas that need reliable night visibility."
  },
  {
    number: "03",
    title: "Renovations, Brick Laying & Tiling",
    image: "/assets/actual-brickwork-foundation.jpg",
    alt: "Brick work foundation walls under construction",
    copy:
      "Renovation work, brick laying, tiling, repairs, and clean finishing for new and existing spaces."
  },
  {
    number: "04",
    title: "Plumbing & Geysers",
    image: "/assets/product-plumbing-installation.jpg",
    alt: "Bathroom plumbing installation in progress",
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

const streetLightShots = [
  {
    image: "/assets/actual-street-light-road-day.jpeg",
    alt: "Street lights installed along a curved road in daylight",
    label: "Street light road view"
  },
  {
    image: "/assets/actual-street-light-pole-day.jpeg",
    alt: "Street light poles installed beside a roadside property",
    label: "Street pole installation"
  }
];

const brickworkShots = [
  {
    image: "/assets/actual-brickwork-foundation.jpg",
    alt: "Brick work foundation walls under construction",
    label: "Foundation brick work"
  },
  {
    image: "/assets/actual-brickwork-crew.jpg",
    alt: "Brick laying crew building block walls on site",
    label: "On-site wall construction"
  },
  {
    image: "/assets/actual-brickwork-closeup.jpg",
    alt: "Close-up of brick laying with mortar",
    label: "Brick laying detail"
  },
  {
    image: "/assets/actual-brickwork-level.jpg",
    alt: "Brick corner being checked with a level",
    label: "Straight, level finishes"
  }
];

const productTiers = [
  {
    tier: "Flood light hardware",
    note: "For home yards, shops, workshops, churches, schools, and open spaces.",
    products: [
      {
        name: "LED Flood Light 50W",
        image: "/assets/product-led-floodlight-50w.jpg",
        alt: "50W LED flood light product",
        details: "IP66 style LED flood light for strong outdoor coverage."
      },
      {
        name: "LED Flood Light Range",
        image: "/assets/product-led-floodlight-range.jpg",
        alt: "LED flood light wattage range",
        details: "10W, 20W, 30W, 40W, 50W, 100W, 200W, 300W and 400W options."
      },
      {
        name: "LED Flood Light Pair",
        image: "/assets/product-led-floodlight-pair.jpg",
        alt: "Pair of LED flood lights",
        details: "Compact flood light units for entrances, walls, and security lighting."
      }
    ]
  },
  {
    tier: "Solar light products",
    note: "Solar kits for spaces that need lighting without heavy wiring.",
    products: [
      {
        name: "Solar Flood Light Range",
        image: "/assets/product-solar-floodlight-range.jpg",
        alt: "Solar flood light range with panels",
        details: "Solar flood lights with panel options for small to larger outdoor areas."
      },
      {
        name: "Solar Light 60W Kit",
        image: "/assets/product-solar-light-60w.jpg",
        alt: "60W solar light kit with panel",
        details: "60W solar light kit with panel, remote-style control, and outdoor housing."
      }
    ]
  },
  {
    tier: "Plumbing hardware & fittings",
    note: "Supply and installation support for plumbing jobs and bathroom work.",
    products: [
      {
        name: "Basin & Tap Set",
        image: "/assets/product-basin.jpg",
        alt: "White basin with tap",
        details: "Bathroom basin and tap fitting for renovation or replacement work."
      },
      {
        name: "Pipework & Fittings",
        image: "/assets/product-pipework.jpg",
        alt: "Plumbing pipework installed against brick wall",
        details: "Pipework, fittings, drainage, and water-line installation support."
      },
      {
        name: "Toilet & Bathroom Plumbing",
        image: "/assets/product-plumbing-installation.jpg",
        alt: "Bathroom plumbing installation in progress",
        details: "Bathroom plumbing installation, maintenance, and fixture replacement."
      }
    ]
  },
  {
    tier: "Plans, BOQs & renovation support",
    note: "Planning and project preparation before construction or renovation work starts.",
    products: [
      {
        name: "Plan Drawing Support",
        image: "/assets/product-plan-desk.jpg",
        alt: "Architectural plan drawing desk",
        details: "Plan drawing support for homes, rooms, renovations, and project planning."
      },
      {
        name: "BOQ & Material Estimate",
        image: "/assets/product-boq-measure.jpg",
        alt: "BOQ measurement tools on plan drawings",
        details: "Bill of quantities and material estimate support for building work."
      },
      {
        name: "Renovation Lighting Finish",
        image: "/assets/product-renovation-lighting.jpg",
        alt: "Renovation interior with ceiling lights",
        details: "Renovation support with lighting, ceiling work, tiling, and finishes."
      }
    ]
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
              Get dependable flood lights, solar lighting, renovations, brick laying, tiling, BOQs, plan drawing,
              plumbing, and geyser work from one responsive team.
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
            <h2>Outdoor lighting, building work, and essential property services.</h2>
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

        <section className="brickwork-showcase" aria-label="Brick work and brick laying">
          <div className="section-heading">
            <span className="section-kicker">Brick work</span>
            <h2>Real brick work and brick laying from site.</h2>
            <p>
              From foundation lines and boundary walls to straight courses and clean wall buildup, these photos show
              the practical brick work side of Topsum&apos;s construction service.
            </p>
          </div>
          <div className="brickwork-grid">
            {brickworkShots.map((shot, index) => (
              <figure className={index === 0 ? "brickwork-card wide" : "brickwork-card"} key={shot.image}>
                <Image src={shot.image} alt={shot.alt} width={960} height={1280} />
                <figcaption>{shot.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="street-light-strip" aria-label="Street light installations">
          <div className="section-heading">
            <span className="section-kicker">Street lights</span>
            <h2>More real street-light installations from site.</h2>
            <p>
              These daytime photos show installed street and roadside pole lights in active residential areas, adding
              another real example under the street-light work.
            </p>
          </div>
          <div className="street-light-grid">
            {streetLightShots.map((shot) => (
              <figure className="street-light-card" key={shot.image}>
                <Image src={shot.image} alt={shot.alt} width={720} height={1280} />
                <figcaption>{shot.label}</figcaption>
              </figure>
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

        <section className="hardware" id="hardware">
          <div className="section-heading">
            <span className="section-kicker">Hardware products</span>
            <h2>Order lights, plumbing fittings, and planning support on WhatsApp.</h2>
            <p>
              Products are grouped into clear tiers so customers can choose what they need and message Topsum directly
              for availability, wattage, pricing, and installation.
            </p>
          </div>
          <div className="tier-stack">
            {productTiers.map((tier) => (
              <section className="product-tier" key={tier.tier} aria-label={tier.tier}>
                <div className="tier-heading">
                  <span className="section-kicker">{tier.tier}</span>
                  <p>{tier.note}</p>
                </div>
                <div className="product-grid">
                  {tier.products.map((product) => (
                    <article className="product-card" key={product.name}>
                      <Image src={product.image} alt={product.alt} width={760} height={760} />
                      <div>
                        <h3>{product.name}</h3>
                        <p>{product.details}</p>
                        <a className="order-link" href={orderUrl(product.name)} target="_blank" rel="noopener">
                          Order on WhatsApp
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
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
