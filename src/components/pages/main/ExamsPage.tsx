import scss from "./ExamsPage.module.scss";
import exams from "../../../assets/images/exams_image.svg";
import exams_image1 from "../../../assets/images/exams_block_img1.svg";
import { Link } from "react-router-dom";
const ExamsPage = () => {
  return (
    <section id={scss.Exams}>
      <div className="container">
        <div className={scss.Exams_text}>
          <h1>ExamsPage</h1>
          <p>
            Exams are tests that assess a person's knowledge, skills, aptitude,
            or other qualifications in a specific subject or area of study. They
            are used to evaluate academic performance.
          </p>
        </div>
        <div className={scss.Exams}>
          <div className={scss.Exasm_text}>
            <img src={exams} alt="exams" />
            <div className={scss.Exams_mar4ik}>
              <Link to={"/"}>cambrige English exams</Link>
              <h2>Your path to learning English, step by step.</h2>
              <p>
                Cambridge English Qualifications are in-depth exams that make
                learning English enjoyable, effective and rewarding. Our
                qualifications are based on research into effective teaching and
                learning.
              </p>
              <h4>Discover more</h4>
            </div>
          </div>
          <div className={scss.Exams_blocks}>
            <div className={scss.Exams_block}>
              <img src={exams_image1} alt="exams_image1" />
              <div className={scss.Exams_block_text}>
                <h4>aptis</h4>
                <h2>Choose Aptis for your assessment needs</h2>
                <p>
                  Aptis is a computer basedtest which provides fast results
                  reliably marked by our exsaminest.
                </p>
              </div>
            </div>
            <div className={scss.Exams_block}>
              <img src={exams_image1} alt="exams_image1" />
              <div className={scss.Exams_block_text}>
                <h4>aptis</h4>
                <h2>Choose Aptis for your assessment needs</h2>
                <p>
                  Aptis is a computer basedtest which provides fast results
                  reliably marked by our exsaminest.
                </p>
              </div>
            </div>
            <div className={scss.Exams_block}>
              <img src={exams_image1} alt="exams_image1" />
              <div className={scss.Exams_block_text}>
                <h4>aptis</h4>
                <h2>Choose Aptis for your assessment needs</h2>
                <p>
                  Aptis is a computer basedtest which provides fast results
                  reliably marked by our exsaminest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamsPage;
