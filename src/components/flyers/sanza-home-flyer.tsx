import Image from "next/image";
import { homeFlyerCopy } from "./sanza-flyer-copy";
import styles from "./sanza-home-flyer.module.css";

const LOGO = "/images/brand/nordora_logo_trans_02.png";

const IMG = {
  generator: "/images/02_s_g_w_700.jpg",
  system: "/images/sanza_gesamtsystem_645.png",
  mat: "/images/02_sanza_mat_700.jpg",
  hands: "/images/02_sanza_bfs-handle_700.jpg",
  pen: "/images/02_sanza_pen_700.jpg",
  pad: "/images/02_sanza_pad_700.jpg",
  app: "/images/02_sanza_app_700.png",
  living: "/images/selector-home-card.jpg",
  bedroom: "/images/Sanza mat 01.jpg",
  daybed: "/images/sanza mat 02.jpg",
  electrode: "/images/sanza hand electrode 01.jpg",
  home: "/images/homeuse-home-hero.jpg",
  laserHome: "/images/homeuse-how-block-what-sanza-is.jpg",
  rest: "/images/homeuse-card-rest-sleep-preparation.jpg",
  chaise: "/images/homeuse-how-it-works-hero.jpg",
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

export function SanzaHomeFlyer({ locale }: { locale: string }) {
  const t = homeFlyerCopy(locale);

  return (
    <main className={styles.root} data-sanza-bold="preserve">
      <section id="home-01" className={styles.page} aria-labelledby="home-01-title">
        <div className={`${styles.canvas} ${styles.copyCenter}`}>
          <div className={`${styles.copy} ${styles.copyCenter}`}>
            <h1 id="home-01-title" className={styles.display}>
              sanza
            </h1>
            <p className={styles.lead}>{t.lead}</p>
            <p className={styles.support}>{t.support}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.generator}
              alt={t.altGenerator}
              className={styles.posDevice}
              priority
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="home-02" className={styles.page} aria-labelledby="home-02-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-02-title" className={styles.headline}>
              {t.h02}
            </h2>
            <p className={styles.body}>{t.h02Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.home}
              alt={t.altHome}
              className={styles.posHome}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="home-03" className={styles.page} aria-labelledby="home-03-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-03-title" className={styles.headline}>
              {t.h03}
            </h2>
            <p className={styles.body}>{t.h03Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.chaise}
              alt={t.altChaise}
              className={styles.posChaise}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="home-04" className={styles.page} aria-labelledby="home-04-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-04-title" className={styles.headline}>
              {t.meet}
            </h2>
            <p className={styles.body}>{t.h04Body}</p>
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

      <section id="home-05" className={styles.page} aria-labelledby="home-05-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-05-title" className={styles.headline}>
              {t.three}
              <br />
              {t.oneWellness}
            </h2>
            <p className={styles.body}>{t.h05Body}</p>
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

      <section id="home-06" className={styles.page} aria-labelledby="home-06-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-06-title" className={styles.headline}>{t.pemf}.</h2>
            <p className={styles.subhead}>{t.h06Sub}</p>
            <p className={styles.body}>{t.h06Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.bedroom}
              alt={t.altBed}
              className={styles.posBed}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="home-07" className={styles.page} aria-labelledby="home-07-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-07-title" className={styles.headline}>{t.bio}.</h2>
            <p className={styles.subhead}>{t.h07Sub}</p>
            <p className={styles.body}>{t.h07Body}</p>
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

      <section id="home-08" className={styles.page} aria-labelledby="home-08-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-08-title" className={styles.headline}>{t.laser}.</h2>
            <p className={styles.subhead}>{t.h08Sub}</p>
            <p className={styles.body}>{t.h08Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.laserHome}
              alt={t.altLaser}
              className={styles.posLaserHome}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="home-09" className={styles.page} aria-labelledby="home-09-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-09-title" className={styles.headline}>{t.h09}</h2>
            <p className={styles.body}>{t.h09Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.daybed}
              alt={t.altDaybed}
              className={styles.posDaybed}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="home-10" className={styles.page} aria-labelledby="home-10-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-10-title" className={styles.headline}>{t.h10}</h2>
            <p className={styles.body}>{t.h10Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.rest}
              alt={t.altRest}
              className={styles.posRest}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="home-11" className={styles.page} aria-labelledby="home-11-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-11-title" className={styles.headline}>{t.h11}</h2>
            <p className={styles.body}>{t.h11Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.pad}
              alt={t.altPad}
              className={styles.posPad}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="home-12" className={styles.page} aria-labelledby="home-12-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-12-title" className={styles.headline}>
              {t.oneSystem}
              <br />
              {t.multiple}
            </h2>
            <p className={styles.body}>{t.h12Body}</p>
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

      <section id="home-13" className={styles.page} aria-labelledby="home-13-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-13-title" className={styles.headline}>{t.h13}</h2>
            <p className={styles.body}>{t.h13Body}</p>
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

      <section id="home-14" className={styles.page} aria-labelledby="home-14-title">
        <div className={styles.canvas}>
          <div className={styles.copy}>
            <h2 id="home-14-title" className={styles.headline}>{t.h14}</h2>
            <p className={styles.body}>{t.h14Body}</p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.living}
              alt={t.altLiving}
              className={styles.posRoom}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="home-15" className={styles.page} aria-labelledby="home-15-title">
        <div className={`${styles.canvas} ${styles.canvasDeep}`}>
          <div className={styles.copy}>
            <h2 id="home-15-title" className={styles.headline}>{t.h15}</h2>
            <p className={styles.stackLines}>
              {t.h15Lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
          <div className={styles.visual}>
            <Shot
              src={IMG.generator}
              alt={t.altRing}
              className={styles.posDevice}
            />
          </div>
          <Footer />
        </div>
      </section>

      <section id="home-16" className={styles.page} aria-labelledby="home-16-title">
        <div className={`${styles.canvas} ${styles.canvasDeep}`}>
          <div className={`${styles.copy} ${styles.copyGrow}`}>
            <h2 id="home-16-title" className={styles.headline}>{t.talk}</h2>
            <p className={styles.body}>{t.h16a}</p>
            <p className={styles.body}>{t.h16b}</p>
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
