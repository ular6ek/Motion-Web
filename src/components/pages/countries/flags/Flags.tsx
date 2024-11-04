import React from "react";
import flag from "/src/assets/images/country.png";
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
};

export default Flags;
