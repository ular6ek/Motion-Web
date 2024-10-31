import scss from "./OthersPage.module.scss";
import others_image from "../../../assets/images/Others_image.svg";
import orhers_icon1 from "../../../assets/images/others_icon1.svg";
import orhers_icon2 from "../../../assets/images/others_icon2.svg";
import orhers_icon3 from "../../../assets/images/others_icon3.svg";
import orhers_icon4 from "../../../assets/images/others_icon4.svg";
const OthersPage = () => {
  return (
    <section id={scss.Others}>
      <div className="container">
        <div className={scss.Others}>
          <div className={scss.Others_left}>
            <h1>This is why we are best from others</h1>
            <p>
              We provide full support at all stages of preparation, including
              assistance in filing documents and preparing for an interview.
              Contact us and start your journey to higher education abroad!
            </p>
            <img src={others_image} alt="others_image" />
          </div>
          <div className={scss.Others_right}>
            <div className={scss.Others_block}>
              <img src={orhers_icon1} alt="orhers_icon1" />
              <h3>1000+ Partners</h3>
              <p>
                over 1000+ partners worldwide enter the best universities in the
                world
              </p>
            </div>
            <div className={scss.Others_block}>
              <img src={orhers_icon2} alt="orhers_icon2" />
              <h3>Experts</h3>
              <p>We are experts in our field. help you reach new heights</p>
            </div>
            <div className={scss.Others_block}>
              <img src={orhers_icon3} alt="orhers_icon3" />
              <h3>Time</h3>
              <p>
                we will help you save your time and nerves when applying to the
                best university.
              </p>
            </div>
            <div className={scss.Others_block}>
              <img src={orhers_icon4} alt="orhers_icon4" />
              <h3>AFFORDABLE PRICES</h3>
              <p>
                reasonable prices will always please you. sign up for a
                consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OthersPage;
