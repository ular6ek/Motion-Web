import React from 'react';
import flag from "/src/assets/images/country.png";
import scss from "../CountriesPage.module.scss"
const Flags = () => {
    return (
        <ul className={scss.list}>
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
            <li className={scss.item}>
            <img src={flag} alt="flag" />
            <span>amerika</span>
            </li>
        </ul>
    );
};

export default Flags;