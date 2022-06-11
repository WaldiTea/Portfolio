import aboutImage from "../../assets/images/about_image.jpeg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About me</h2>
      <figure className="about-figure">
        <img className="about-image" src={aboutImage} alt="-" />
      </figure>
      <article className="about-article">
        <p className="about-text">
          Hello! My name is Waldemar and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p className="about-text">
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>
        <p className="about-text">
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React.
        </p>
      </article>
    </section>
  );
};

export default About;
