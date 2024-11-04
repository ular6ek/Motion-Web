import univer from "/src/assets/images/img.jpg";
<<<<<<< HEAD
import scss from "./University.module.scss"
import { NavLink } from 'react-router-dom';
const University = () => {
    return (
        <div className={scss.list}>
            <NavLink to="/study/univer/1" className={scss.item}>
=======
import scss from "./University.module.scss";
import { NavLink } from "react-router-dom";
const University = () => {
  return (
    <div className="container">
      <div className={scss.location}>
        <div className="">
          <NavLink to={"/solbrige"}>
            {" "}
            <ul className={scss.list}>
              <li className={scss.item}>
>>>>>>> d7f306189454f5b826079b723fdc8134edc06bf3
                <img src={univer} alt="universitet image" />
                <div className={scss.marg}>
                  <span className={`${scss.title}`}>Name:</span>
                  <span className={`${scss.value}`}>Solbrige University</span>
                </div>
                <div>
                  <span className={scss.title}>Location</span>
                  <span className={scss.value}>Perth</span>
                </div>
                <div>
                  <span className={scss.title}>Age:</span>
                  <span className={scss.value}>From 16</span>
                </div>
<<<<<<< HEAD
            </NavLink>
        </div>
    );
=======
              </li>
            </ul>
          </NavLink>
        </div>
        <div className="">
          <ul className={scss.list}>
            <li className={scss.item}>
              <img src={univer} alt="universitet image" />
              <div className={scss.marg}>
                <span className={`${scss.title}`}>Name:</span>
                <span className={`${scss.value}`}>Solbrige University</span>
              </div>
              <div>
                <span className={scss.title}>Location</span>
                <span className={scss.value}>Perth</span>
              </div>
              <div>
                <span className={scss.title}>Age:</span>
                <span className={scss.value}>From 16</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className={scss.list}>
            <li className={scss.item}>
              <img src={univer} alt="universitet image" />
              <div className={scss.marg}>
                <span className={`${scss.title}`}>Name:</span>
                <span className={`${scss.value}`}>Solbrige University</span>
              </div>
              <div>
                <span className={scss.title}>Location</span>
                <span className={scss.value}>Perth</span>
              </div>
              <div>
                <span className={scss.title}>Age:</span>
                <span className={scss.value}>From 16</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className={scss.list}>
            <li className={scss.item}>
              <img src={univer} alt="universitet image" />
              <div className={scss.marg}>
                <span className={`${scss.title}`}>Name:</span>
                <span className={`${scss.value}`}>Solbrige University</span>
              </div>
              <div>
                <span className={scss.title}>Location</span>
                <span className={scss.value}>Perth</span>
              </div>
              <div>
                <span className={scss.title}>Age:</span>
                <span className={scss.value}>From 16</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
>>>>>>> d7f306189454f5b826079b723fdc8134edc06bf3
};

export default University;
