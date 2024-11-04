import React from "react";
import flag from "/src/assets/images/country.png";
<<<<<<< HEAD
import scss from "../CountriesPage.module.scss"
import { NavLink } from 'react-router-dom';
const Flags = () => {
    return (
        <ul className={scss.list}>
            <NavLink to="/study/univer" className={scss.item}>
                <img src={flag} alt="flag" />
                <span>amerika</span>
            </NavLink>
        </ul>
    );
=======
import scss from "../CountriesPage.module.scss";
import { NavLink } from "react-router-dom";
const Flags = () => {
  return (
    <ul className={scss.list}>
      <li className={scss.item}>
        <NavLink to={"/university"}>
          <img src={flag} alt="flag" />
        </NavLink>
        <span>amerika</span>
      </li>
      <li className={scss.item}>
        <img src={flag} alt="flag" />
        <span>amerika</span>
      </li>
      <li className={scss.item}>
        <img src={flag} alt="flag" />
        <span>amerika</span>
      </li>
      <li className={scss.item}>
        <img src={flag} alt="flag" />
        <span>amerika</span>
      </li>
      <li className={scss.item}>
        <img src={flag} alt="flag" />
        <span>amerika</span>
      </li>
      <li className={scss.item}>
        <img src={flag} alt="flag" />
        <span>amerika</span>
      </li>
    </ul>
  );
>>>>>>> d7f306189454f5b826079b723fdc8134edc06bf3
};

export default Flags;
