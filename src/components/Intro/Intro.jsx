import './Intro.css';

const name = 'KARNAM MANOHAR'.split('');
const stars = Array.from({ length: 94 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 101}%`,
  top: `${8 + ((index * 53) % 60)}%`,
  delay: `${(index % 11) * 0.36}s`,
  size: `${1 + (index % 3)}px`,
}));

function Intro() {
  return (
    <section className="intro" aria-label="Cinematic portfolio introduction">
      <div className="intro-stage">
        <div className="intro-stars" aria-hidden="true">
          {stars.map((star) => (
            <span
              className="intro-star"
              key={star.id}
              style={{ left: star.left, top: star.top, animationDelay: star.delay, width: star.size, height: star.size }}
            />
          ))}
        </div>

        <div className="intro-glow" aria-hidden="true" />

        <svg className="intro-mountains" viewBox="0 0 1440 360" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 302L110 247L195 279L312 182L420 252L529 125L624 239L740 151L846 254L952 203L1075 96L1214 243L1327 189L1440 264V360H0Z" />
          <path d="M0 328L158 271L270 310L433 222L566 288L701 201L826 301L996 247L1164 304L1279 248L1440 292V360H0Z" />
        </svg>

        <div className="intro-circle" aria-hidden="true">
          <svg viewBox="0 0 420 420">
            <circle className="intro-circle-path" cx="210" cy="210" r="197" />
          </svg>
        </div>

        <div className="intro-lines" aria-hidden="true">
          <span className="intro-line intro-line-left" />
          <span className="intro-line intro-line-right" />
        </div>

        <div className="intro-title-wrap">
          <p className="intro-kicker">Professional Portfolio</p>
          <h1 className="intro-name" aria-label="Karnam Manohar">
            <span className="intro-name-inner">
              {name.map((letter, index) => (
                <span className="intro-letter" key={`${letter}-${index}`}>
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
              <span className="intro-shine" aria-hidden="true" />
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Intro;
