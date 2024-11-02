import { Link } from "react-router-dom";
import scss from "./MainPage.module.scss";
import motion_web_main from "../../../assets/images/motion_web_main.svg";
import contact from "../../../assets/images/contacts_2.svg";
import contact_1 from "../../../assets/images/contacts_1.svg";
const HomePage = () => {
  return (
    <>
      <section id={scss.Main}>
        <div className="container">
          <div className={scss.Main}>
            <div className={scss.Main_text}>
              <Link to={"/"}>EXPLORE THE WORLD</Link>
              <h1>Study abroad with our help</h1>
              <p>
                Study at the world's top universities and expand your horizons.
                Get the highest quality education and achieve success abroad.
              </p>
              <div className={scss.Main_blocks}>
                <div className={scss.Main_block}>
                  <img src={contact_1} alt="contact" />
                  <div className={scss.Main_block_text}>
                    <label htmlFor="">NAME</label>
                    <input type="text" placeholder="|Enter your name" />
                  </div>
                </div>
                <div className={scss.Main_block}>
                  <img src={contact} alt="contact" />
                  <div className={scss.Main_block_text}>
                    <label htmlFor="">PHONE</label>
                    <input type="text" placeholder="|Enter your name" />
                  </div>
                </div>
                <button>Contact</button>
              </div>
            </div>
            <div className={scss.Main_right}>
              <img src={motion_web_main} alt="motion_web_main" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
