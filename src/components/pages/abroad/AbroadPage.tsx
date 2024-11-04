import scss from "./AbroadPage.module.scss";
import img from "../../../assets/images/Bitmap.png";
import { NavLink } from "react-router-dom";

const AbroadPage = () => {
  return (
    <section id={scss.Abroad}>
      <div className="container">
        <h1>
          <span>Study</span> Abroad
        </h1>

        <div className={scss.block}>
          <div className={scss.block_image}>
            <div className={scss.square}>
              <img src={img} alt="" />
            </div>
          </div>
          <div className={scss.block_info}>
            <p className={scss.descr}>
              <strong>Motion study</strong> for International Education offers
              its clients various study abroad opportunities – language courses,
              secondary, professional and higher education, professional
              development programmes for teachers and specialists of companies
              and organizations.
            </p>
            <p className={scss.name}>Our partners include:</p>
            <ul className={scss.list}>
              <li>- Universities and higher education establishments.</li>
              <li>- Universities and higher education establishments.</li>
              <li>- Universities and higher education establishments.</li>
              <li>- Universities and higher education establishments.</li>
              <li>- Universities and higher education establishments.</li>
              <li>- Universities and higher education establishments.</li>
              <li>- Universities and higher education establishments.</li>
              <li>- Universities and higher education establishments.</li>
              <li>- Universities and higher education establishments.</li>
            </ul>
            <NavLink to="/study">
              <span>explore</span>{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbroadPage;
