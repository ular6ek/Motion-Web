import React from 'react';
import univer from "/src/assets/images/img.jpg";
import scss from "./University.module.scss"
const University = () => {
    return (
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
    );
};

export default University;