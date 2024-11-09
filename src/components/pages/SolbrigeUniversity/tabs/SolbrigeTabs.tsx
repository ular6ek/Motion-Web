import { useState } from "react";
import scss from "./SolbrigeTabs.module.scss";
import logo from "../.././../../assets/images/056772.png";
import img1 from "../../../../assets/images/1.png";
import img2 from "../../../../assets/images/2.png";
import img3 from "../../../../assets/images/3.png";
import img4 from "../../../../assets/images/4.png";
import img5 from "../../../../assets/images/5.png";
import img6 from "../../../../assets/images/7.png";
import icon1 from "../../../../assets/images/icon1.png";
import icon2 from "../../../../assets/images/шсщт2.png";

function SolbrigeTabs() {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    {
      id: "Description",
      title: "Description",
      content: (
        <div className={scss.mom}>
          <div>
            <div
              style={{
                display: "flex",
                gap: "3pc",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <div>
                <img src={logo} alt="" />
              </div>
              <div>
                <h1>Landscape Design</h1>
                <h2>University of Fashion and Design</h2>
              </div>
            </div>
            <p>
              <strong>Nominal duration:</strong> 4.5 years (240 ECTS)
            </p>
            <p style={{ display: "flex", gap: "5pc" }}>
              <strong>Awards:</strong> B.Sc. (Professional Bachelor’s <br />{" "}
              degree in Business <br />
              Management, qualification: <br /> Business Manager or E- <br />
              Business Manager)
            </p>
            <div>
              <p>
                <strong>Tuition fee:</strong> €1,400 per semester <br />
                (US$1,502.87)
              </p>
              <p>
                <strong>Application fee:</strong> €120 one-time <br />{" "}
                (US$128.83)
              </p>
              <p style={{ borderBottom: " solid 1px", width: "50%" }}>
                <strong>Registration fee:</strong> US$150 one-time <br />
                <br />
                <br />
                <br /> You need to choose student <br /> status: <br /> Base –
                150 USD <br /> Standard – 500 USD <br /> VIP – 900 USD
              </p>
              <p>
                <strong>Tuition fee:</strong> High school / secondary <br />{" "}
                education (or higher) <br />
                Completed Secondary <br /> Education ( 12 years, in some <br />{" "}
                countries 11 years)
              </p>
              <p>
                <strong>Entry qualication:</strong>The entry qualification{" "}
                <br /> documents are accepted in <br /> the following languages:{" "}
                <br /> English / Lithuanian.Often you <br /> can get a suitable
                transcript <br /> from your school. If this is not <br /> the
                case, you will need official <br /> translations along with{" "}
                <br /> verified copies of the original.
              </p>
            </div>
          </div>
          <div className={scss.block}>
            <h3>
              <strong>Apply Now!!! </strong>Fall semester 2023
            </h3>
            <div style={{ display: "flex", padding: "20px" }}>
              <img
                style={{ width: "46px", height: "46px" }}
                src={icon1}
                alt=""
              />
              <p>
                Pre_deadline <br />
                20 Jun 2023, 23:59:59Eastern European Time Please ask your
                manager in Baltic Center about correct deadline for your country
              </p>
            </div>
            <div style={{ display: "flex", padding: "20px" }}>
              <img
                style={{ width: "46px", height: "46px" }}
                src={icon1}
                alt=""
              />
              <p>
                Application_deadline <br />
                31 Aug 2023, 23:59:59Eastern European Time Autumn Intake
              </p>
            </div>{" "}
            <div
              style={{ display: "flex", alignItems: "center", padding: "20px" }}
            >
              <img
                style={{ width: "46px", height: "46px" }}
                src={icon2}
                alt=""
              />
              <p>
                Studies_commence <br />4 Sept 2023
              </p>
            </div>
            <h3 style={{ background: "rgba(26, 162, 238, 0.5)" }}>
              <strong>
                Apply Now!!! <br />{" "}
              </strong>
              Fall semester 2023
            </h3>
            <h1
              style={{
                fontFamily: "inherit",
                color: "rgba(255, 106, 106, 1)",
                fontSize: "22px",
                fontWeight: "700",
                padding: "20px",
                // line-height: 26.82px;
                // text-align: left;
              }}
            >
              Application period has ended
            </h1>
            <div
              style={{ display: "flex", alignItems: "center", padding: "20px" }}
            >
              <img
                style={{ width: "46px", height: "46px" }}
                src={icon2}
                alt=""
              />
              <p>
                Studies_commence <br />4 Sept 2023
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "Cost",
      title: "Cost",
      content: (
        <div>
          <h1 style={{display:"flex", gap:"0.6pc",fontSize:"22px"}}>
            <h2> The_cost_of_studying </h2>  at the Istituto Europeo di Design
            for the 2023-2024 academic year: <br /> <br />  – Academic year (training) – from
            1,566,000 rubles. <br /> – Academic year (accommodation) – from 870,000
            rubles.
          </h1>
        </div>
      ),
    },
    {
      id: "Photos",
      title: "Photos",
      content: (
        <div className={scss.imagesStudents}>
          <div className={scss.images3}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className={scss.images6}>
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <div className={scss.tabComponent}>
        <div className={scss.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? scss.active : ""}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className={scss.tabContent}>
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
}

export default SolbrigeTabs;
