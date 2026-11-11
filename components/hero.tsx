import { SITE } from "@/data/site";
import { ArrowRightIcon, DownloadIcon } from "./icons";
import styles from "./hero.module.css";

function StackMap() {
  return (
    <svg
      className={styles.mapSvg}
      viewBox="0 0 520 350"
      role="img"
      aria-label="System map: web, mobile and device clients connect to an app and API layer, backed by data, auth and payments."
    >
      <defs>
        <pattern id="stack-grid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0V26" fill="none" stroke="#F3F0E6" strokeOpacity="0.055" />
        </pattern>
      </defs>

      <rect width="520" height="350" fill="url(#stack-grid)" />

      <g className={styles.mapText}>
        <g className={styles.mapNode}>
          <rect x="18" y="18" width="145" height="54" rx="7" />
          <text x="32" y="38" className={styles.nodeLabel}>
            WEB
          </text>
          <text x="32" y="57" className={styles.nodeValue}>
            React · Next.js
          </text>
        </g>
        <g className={styles.mapNode}>
          <rect x="187" y="18" width="146" height="54" rx="7" />
          <text x="201" y="38" className={styles.nodeLabel}>
            MOBILE
          </text>
          <text x="201" y="57" className={styles.nodeValue}>
            React Native
          </text>
        </g>
        <g className={styles.mapNode}>
          <rect x="357" y="18" width="145" height="54" rx="7" />
          <text x="371" y="38" className={styles.nodeLabel}>
            DEVICES
          </text>
          <text x="371" y="57" className={styles.nodeValue}>
            QR · NFC · PWA
          </text>
        </g>

        <g className={styles.mapCore}>
          <rect x="150" y="145" width="220" height="74" rx="8" />
          <text x="260" y="172" textAnchor="middle" className={styles.coreLabel}>
            APP + API LAYER
          </text>
          <text x="260" y="194" textAnchor="middle" className={styles.coreValue}>
            Node · Express · Django
          </text>
        </g>

        <g className={styles.mapNode}>
          <rect x="18" y="278" width="145" height="54" rx="7" />
          <text x="32" y="298" className={styles.nodeLabel}>
            DATA
          </text>
          <text x="32" y="317" className={styles.nodeValue}>
            MongoDB · SQL
          </text>
        </g>
        <g className={styles.mapNode}>
          <rect x="187" y="278" width="146" height="54" rx="7" />
          <text x="201" y="298" className={styles.nodeLabel}>
            AUTH
          </text>
          <text x="201" y="317" className={styles.nodeValue}>
            Sessions · Roles
          </text>
        </g>
        <g className={styles.mapNode}>
          <rect x="357" y="278" width="145" height="54" rx="7" />
          <text x="371" y="298" className={styles.nodeLabel}>
            PAYMENTS
          </text>
          <text x="371" y="317" className={styles.nodeValue}>
            Telebirr · CBE
          </text>
        </g>

        <g className={styles.mapLines} fill="none">
          <path d="M90 72V108H260V145" />
          <path d="M260 72V145" />
          <path d="M430 72V108H260V145" />
          <path d="M260 219V251H90V278" />
          <path d="M260 219V278" />
          <path d="M260 219V251H430V278" />
        </g>

        <g className={styles.mapFlows} fill="none">
          <path d="M90 72V108H260V145" />
          <path d="M430 72V108H260V145" className={styles.flowDelay} />
          <path d="M260 219V251H90V278" className={styles.flowDelay} />
          <path d="M260 219V251H430V278" />
        </g>

        <g className={styles.mapJoints}>
          <circle cx="260" cy="108" r="3" />
          <circle cx="260" cy="251" r="3" />
          <circle cx="90" cy="108" r="2.5" />
          <circle cx="430" cy="108" r="2.5" />
          <circle cx="90" cy="251" r="2.5" />
          <circle cx="430" cy="251" r="2.5" />
        </g>
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.kicker}>
              <span className={styles.kickerDot} />
              Full-stack software engineer — Addis Ababa
            </p>

            <h1 className={styles.title}>
              <span className={styles.firstName}>Natnael</span>
              <span className={styles.lastName}>
                Ayalew
                <svg className={styles.star} viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className={styles.lead}>
              I design and build web, mobile and digital business products —{" "}
              <mark>from the first pixel to the last database index.</mark>
            </p>

            <div className={styles.actions}>
              <a className="btn btnPrimary" href="#work">
                See selected work
                <ArrowRightIcon />
              </a>
              <a className="btn btnGhost" href={`/${SITE.resumeFile}`} download>
                Download CV
                <DownloadIcon />
              </a>
            </div>

            <ul className={styles.proof} aria-label="Quick facts">
              <li>
                <strong>7</strong>
                <span>projects shipped</span>
              </li>
              <li>
                <strong>3</strong>
                <span>team roles</span>
              </li>
              <li>
                <strong>3.41</strong>
                <span>BSc CS GPA</span>
              </li>
            </ul>
          </div>

          <div className={styles.mapCol}>
            <aside className={styles.mapCard} aria-label="How I build, from client to database">
              <div className={styles.mapHead}>
                <span>Full-stack map</span>
                <span className={styles.mapVersion}>v.2026</span>
              </div>
              <StackMap />
              <div className={styles.mapFoot}>
                <span className={styles.mapStatus}>
                  <span className={styles.mapDot} />
                  Open to new builds
                </span>
                <code>npm run build ✓</code>
              </div>
            </aside>
            <p className={styles.mapNote}>
              One developer across the whole stack — no hand-offs between
              interface, API and data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
