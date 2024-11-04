import scss from "./Solbrige.module.scss";
import img from "../../../assets/images/student.png";
import SolbrigeTabs from "./tabs/SolbrigeTabs";

const Solbrige = () => {
  return (
    <div id={scss.Solbrige}>
      <div className="container">
        <div className={scss.solbrige}>
          <h1 className={scss.T}>Solbrige University</h1>
          <div className={scss.Block}>
            <img src={img} alt="Student" />
            <div className={scss.blockText}>
              <div className={scss.Bl}>
                <h1>
                  <span>Location : </span>Australia, Milan, Rim
                </h1>
              </div>
              <div className={scss.Bl}>
                <h1>
                  <span>Data of foundation : </span>1996
                </h1>
              </div>
              <div className={scss.Bl}>
                <h1>
                  <span>Type of programs : </span>Bachelor Course, Magistracy
                </h1>
              </div>
              <div className={scss.Bl1}>
                <center>
                  <h2 className={scss.TT}>
                    <span>Specialities:</span> Fashion and Design <br /> Jewelry
                    design <br />
                    Shoe design <br /> Interior design <br />
                    Landscape design <br /> Car design <br />
                    Photography
                  </h2>
                </center>
              </div>
              <div className={scss.Bl}>
                <h1>
                  <span>Language : </span>English, Italian
                </h1>
              </div>
            </div>
          </div>
        </div>
          <SolbrigeTabs />
      </div>
    </div>
  );
};

export default Solbrige;
