import scss from "./About.module.scss";
import img from "../../../assets/images/Frame 73.png";
import img2 from "../../../assets/images/Anushin.png";
import img3 from "../../../assets/images/Vishmas1.png"
import img4 from "../../../assets/images/Tanisha.png"
import img5 from "../../../assets/images/KL Rahul.png"
import img6 from "../../../assets/images/Vashika.png"
import img7 from "../../../assets/images/Aryan Singh.png"

const AboutPage = () => {
  return (
    <div className={scss.AboutPage}>
      <div className="container">
        <div className={scss.About}>
          <div className={scss.Block}>
            <div className={scss.imagesBlock}>
              <div className={scss.images}>
                <img src={img} alt="" />
              </div>
            </div>
            <div className={scss.textBlock}>
              <h3>About Us</h3>
              <h1>Best Education Platform</h1>
              <p className={scss.P}>
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black.
              </p>
              <p>
                By the same illusion which lifts the horizon of the sea to the
                level of the spectator on a hillside, the sable cloud beneath
                was dished out, and the car seemed to float in the middle.
              </p>
            </div>
          </div>
          <h1 className={scss.T}>Our Team</h1>
          <div className={scss.OurTeam}>
            <div className={scss.TeamGrid}>
              <div className={scss.TeamMember}>
                <img src={img2} alt="Anushin Oont" />
                <h1>Miss. Anushin Oont</h1>
                <h3>CEO & Co-Founder</h3>
              </div>
              <div className={scss.TeamMember}>
                <img src={img3} alt="Vishmas S." />
                <h1>Mr. Vishmas S.</h1>
                <h3>CTO & Co-Founder</h3>
              </div>
              <div className={scss.TeamMember}>
                <img src={img4} alt="Tanisha Kadau" />
                <h1>Miss. Tanisha Kadau</h1>
                <h3>VP of Technology</h3>
              </div>
            </div>
            <div className={scss.TeamGrid2}>
              <div className={scss.TeamMember}>
                <img src={img5} alt="KL Rahul" />
                <h1>Mr. KL Rahul</h1>
                <h3>Head of Design</h3>
              </div>
              <div className={scss.TeamMember}>
                <img src={img6} alt="Vashika G." />
                <h1>Miss. Vashika G.</h1>
                <h3>VP of Finance</h3>
              </div>
              <div className={scss.TeamMember}>
                <img src={img7} alt="Aryan Singh" />
                <h1>Mr. Aryan Singh</h1>
                <h3>Head of Marketing</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
