import scss from "./StudentsPage.module.scss";
import studest_img from "../../../assets/images/Studest_image1.svg";
import studest_img2 from "../../../assets/images/Studest_imag2.svg";
const StudentsPage = () => {
  return (
    <section id={scss.Students}>
      <div className="container">
        <h1>Video testimonials from our students</h1>
        <div className={scss.Students}>
          <img src={studest_img} alt="studest_img" />
          <img src={studest_img2} alt="studest_img2" />
          <img src={studest_img} alt="studest_img" />
          <img src={studest_img2} alt="studest_img2" />
        </div>
      </div>
    </section>
  );
};

export default StudentsPage;
