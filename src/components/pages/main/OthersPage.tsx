import scss from "./OthersPage.module.scss";
import others_image from "../../../assets/images/Others_image.svg";
const OthersPage = () => {
  return (
    <section id={scss.Others}>
      <div className="container">
        <div className={scss.Others}>
          <div className={scss.Others_left}>
            <h1>This is why we are best from others</h1>
            <p>
              We provide full support at all stages of preparation, including
              assistance in filing documents and preparing for an interview.
              Contact us and start your journey to higher education abroad!
            </p>
            <img src={others_image} alt="others_image" />
          </div>
          <div className={scss.Others_right}>
            <div className={scss.Others_block}></div>
            <div className={scss.Others_block}></div>
            <div className={scss.Others_block}></div>
            <div className={scss.Others_block}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OthersPage;
