import univer from "/src/assets/images/img.jpg";
import scss from "./University.module.scss"
import { NavLink } from 'react-router-dom';
const University = () => {
    return (
        <div className={scss.list}>
            <NavLink to="/study/univer/1" className={scss.item}>
<<<<<<< HEAD
=======

>>>>>>> 852217e2937fce559d81f2814c1286c5027b960e
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
            </NavLink>
        </div>
    );
};
export default University;