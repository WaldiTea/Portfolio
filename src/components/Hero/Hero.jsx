import heroImage from "../../assets/images/hero_image.png";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <article className="hero-article">
        <h1 className="greeting">Hi there, I'm</h1>
        <h2 className="name">Waldemar Teichreb</h2>
        <h3 className="profession">Junior Frontend Web Developer</h3>
        <p>I'm a Junior Frontend Developer based in Munich.</p>
        <p>HTML, CSS, SCSS, JavaScript, React</p>
      </article>
      <figure className="hero-figure">
        <img src={heroImage} alt="-" />
      </figure>
    </section>
  );
};

export default Hero;
