import "../css/about.css";
import headshot from "../images/headshot.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <p>
          Fiona Dowling (b. 1999) is an artist living and working in Brooklyn,
          NY. In 2022, she received her BFA from the Cooper Union. She utilizes
          photography, drawing, and printmaking as processes to connect somatic
          experiences, self-surveillance, and immateriality. In her work, she
          interrupts the traditional development of a silver-gelatin photograph
          through the chemigram, a photographic process using chemicals and
          resists on light-sensitive paper. These interventions reinsert the
          body into image-making, visualizing a feminist landscape of tendrils,
          orbs, bodily fluids, and grids.
        </p>
      </div>
      <div className="about-img-container">
        <img
          src={headshot}
          alt="artist headshot for fiona"
          className="about-img"
        ></img>
      </div>
    </div>
  );
}

export default About;
