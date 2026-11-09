import Image from "next/image";
import { proFlyerCopy } from "./sanza-flyer-copy";
import styles from "./sanza-home-flyer.module.css";

const LOGO = "/images/brand/nordora_logo_trans_02.png";

const IMG = {
  system: "/images/sanza_gesamtsystem_645.png",
  mat: "/images/02_sanza_mat_700.jpg",
  hands: "/images/02_sanza_bfs-handle_700.jpg",
  pen: "/images/02_sanza_pen_700.jpg",
  pad: "/images/02_sanza_pad_700.jpg",
  app: "/images/02_sanza_app_700.png",
  treatment: "/images/selector-pro-card.jpg",
  arrival: "/images/sanza calmer arrivals.jpg",
  recovery: "/images/sanza comfort routines.jpg",
  care: "/images/sanza-for-you-hero.jpg",
  electrode: "/images/sanza hand electrode 01.jpg",
  spa: "/images/campaign/spa-hotel-hero.jpg",
  pines: "/images/campaign/spa-fit-relaxation.jpg",
  massage: "/images/campaign/massage-hero.jpg",
  settle: "/images/campaign/massage-fit-01-calm-arrival.jpg",
  daySpa: "/images/campaign/day-spa-hero.jpg",
  yoga: "/images/campaign/yoga-fit-private.jpg",
} as const;

function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={styles.mark}>
        <Image src={LOGO} alt="" width={68} height={62} className={styles.logo} />
        <span className={styles.markName}>Nordora Vital</span>
      </div>
      <span className={styles.markProduct}>sanza</span>
    </footer>
  );
}

function Shot({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="540px"
      unoptimized
      priority={priority}
      loading={priority ? undefined : "eager"}
      className={className ? `${styles.photo} ${className}` : styles.photo}
    />
  );
}

export function SanzaProFlyer({ locale }: { locale: string }) {
  const t = proFlyerCopy(locale);

  return (
    <main className={styles.root} data-sanza-bold="preserve">
      <section id="pro-01" className={styles.page} aria-labelledby="pro-01-title">
        <div className={`${styles.canvas} ${styles.copyCenter}`}>
          <div className={`${styles.copy} ${styles.copyCenter}`}>
            <h1 id="pro-01-title" className={styles.display}>
              sanza
            </h1>
            <p className={styles.lead}>{t.lead}</p>
            <p className={styles.support}>{t.support}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.spa}
              alt={t.altSpa}
              className={styles.posSpa}
              priority
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-02" className={styles.page} aria-labelledby="pro-02-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-02-title" className={styles.headline}>{t.p02}</h2>
            <p className={styles.body}>{t.p02Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.care}
              alt={t.altCare}
              className={styles.posForYou}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-03" className={styles.page} aria-labelledby="pro-03-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-03-title" className={styles.headline}>{t.p03}</h2>
            <p className={styles.body}>{t.p03Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.pines}
              alt={t.altPines}
              className={styles.posPines}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-04" className={styles.page} aria-labelledby="pro-04-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-04-title" className={styles.headline}>{t.meet}</h2>
            <p className={styles.body}>{t.p04Body}</p>
          </div>
          <div className={styles.visual}>
            <div className={styles.containFrame}>
              <Image
                src={IMG.system}
                alt={t.altSystem}
                fill
                sizes="540px"
                unoptimized
                loading="eager"
                className={styles.photoContain}
              />
            </div>
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-05" className={styles.page} aria-labelledby="pro-05-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-05-title" className={styles.headline}>
              {t.three}
              <br />
              {t.oneIntegrated}
            </h2>
            <p className={styles.body}>{t.p05Body}</p>
          </div>
          <div className={styles.stack}>
            <figure>
              <figcaption className={styles.caption}>{t.pemf}</figcaption>
              <div className={styles.stackPhoto}>
                <Shot
                  src={IMG.mat}
                  alt={t.altMat}
                  className={styles.posMat}
                />
              </div>
            </figure>
            <figure>
              <figcaption className={styles.caption}>{t.bio}</figcaption>
              <div className={styles.stackPhoto}>
                <Shot
                  src={IMG.hands}
                  alt={t.altHands}
                  className={styles.posHands}
                />
              </div>
            </figure>
            <figure>
              <figcaption className={styles.caption}>{t.laser}</figcaption>
              <div className={styles.stackPhoto}>
                <Shot
                  src={IMG.pen}
                  alt={t.altPen}
                  className={styles.posPen}
                />
              </div>
            </figure>
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-06" className={styles.page} aria-labelledby="pro-06-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-06-title" className={styles.headline}>{t.pemf}.</h2>
            <p className={styles.subhead}>{t.p06Sub}</p>
            <p className={styles.body}>{t.p06Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.massage}
              alt={t.altMassage}
              className={styles.posMassage}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-07" className={styles.page} aria-labelledby="pro-07-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-07-title" className={styles.headline}>{t.bio}.</h2>
            <p className={styles.subhead}>{t.p07Sub}</p>
            <p className={styles.body}>{t.p07Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.electrode}
              alt={t.altElectrode}
              className={styles.posElectrode}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-08" className={styles.page} aria-labelledby="pro-08-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-08-title" className={styles.headline}>{t.laser}.</h2>
            <p className={styles.subhead}>{t.p08Sub}</p>
            <p className={styles.body}>{t.p08Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.pen}
              alt={t.altLaserLocal}
              className={styles.posPen}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-09" className={styles.page} aria-labelledby="pro-09-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-09-title" className={styles.headline}>{t.p09}</h2>
            <p className={styles.body}>{t.p09Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.settle}
              alt={t.altSettle}
              className={styles.posSettle}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-10" className={styles.page} aria-labelledby="pro-10-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-10-title" className={styles.headline}>{t.p10}</h2>
            <p className={styles.body}>{t.p10Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.daySpa}
              alt={t.altDaySpa}
              className={styles.posDaySpa}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-11" className={styles.page} aria-labelledby="pro-11-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-11-title" className={styles.headline}>{t.p11}</h2>
            <p className={styles.body}>{t.p11Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.yoga}
              alt={t.altYoga}
              className={styles.posYoga}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-12" className={styles.page} aria-labelledby="pro-12-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-12-title" className={styles.headline}>{t.p12}</h2>
            <p className={styles.body}>{t.p12Body}</p>
          </div>
          <div className={styles.visual}>
            <div className={styles.containFrame}>
              <Image
                src={IMG.system}
                alt={t.altSet}
                fill
                sizes="540px"
                unoptimized
                loading="eager"
                className={styles.photoContain}
              />
            </div>
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-13" className={styles.page} aria-labelledby="pro-13-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-13-title" className={styles.headline}>{t.p13}</h2>
            <p className={styles.body}>{t.p13Body}</p>
            <p className={styles.support}>{t.programs}</p>
            <ul className={styles.names}>
              {t.names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.visual}>
            <div className={styles.containFrame}>
              <Image
                src={IMG.app}
                alt={t.altApp}
                fill
                sizes="540px"
                unoptimized
                loading="eager"
                className={styles.photoContain}
              />
            </div>
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-14" className={styles.page} aria-labelledby="pro-14-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="pro-14-title" className={styles.headline}>{t.p14}</h2>
            <p className={styles.body}>{t.p14Body}</p>
            <p className={styles.stackLines}>
              {t.p14Lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.treatment}
              alt={t.altOperator}
              className={styles.posProOperator}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-15" className={styles.page} aria-labelledby="pro-15-title">
        <div className={`${styles.canvas} ${styles.canvasDeep}`}>
          <div className={styles.copy}>
            <h2 id="pro-15-title" className={styles.headline}>{t.p15}</h2>
            <p className={styles.body}>{t.p15Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.treatment}
              alt={t.altDevice}
              className={styles.posProDevice}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="pro-16" className={styles.page} aria-labelledby="pro-16-title">
        <div className={`${styles.canvas} ${styles.canvasDeep}`}>
          <div className={`${styles.copy} ${styles.copyGrow}`}>
            <h2 id="pro-16-title" className={styles.headline}>{t.p16}</h2>
            <p className={styles.body}>{t.p16a}</p>
            <p className={styles.body}>{t.p16b}</p>
            <p className={styles.brandLine}>Nordora Vital</p>
            <div className={styles.contactLines}>
              <p>
                <span className={styles.contactLabel}>{t.website}</span>
                <a className={styles.contactValue} href="https://nordoravital.com">
                  nordoravital.com
                </a>
              </p>
              <p>
                <span className={styles.contactLabel}>{t.email}</span>
                <a className={styles.contactValue} href="mailto:info@nordoravital.com">
                  info@nordoravital.com
                </a>
              </p>
              <p>
                <span className={styles.contactLabel}>{t.phone}</span>
                <a className={styles.contactValue} href="tel:+37120727915">
                  +371 20 727 915
                </a>
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </main>
  );
}
