import univer from "/src/assets/images/img.jpg";
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
};

export default University;
