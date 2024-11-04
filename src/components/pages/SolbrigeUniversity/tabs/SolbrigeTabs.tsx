import  { useState } from "react";
import scss from "./SolbrigeTabs.module.scss";
import logo from "../.././../../assets/images/056772.png"
import img1 from "../../../../assets/images/1.png"
import img2 from "../../../../assets/images/2.png"
import img3 from "../../../../assets/images/3.png"
import img4 from "../../../../assets/images/4.png"
import img5 from "../../../../assets/images/5.png"
import img6 from "../../../../assets/images/7.png"
 
function SolbrigeTabs() {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    {
      id: "Description",
      title: "Description",
      content: (
        <div>
          <div>
            <img src={logo} alt="" />
          </div>
          <h2>Landscape Design</h2>
          <p>University of Fashion and Design</p>
          <p>
            <strong>Nominal duration:</strong> 4.5 years (240 ECTS)
          </p>
          <p>
            <strong>Awards:</strong> B.Sc. in Business Management
          </p>
          <div>
            <p>
              <strong>Tuition fee:</strong> €1,400 per semester (US$1,502.87)
            </p>
            <p>
              <strong>Application fee:</strong> €120 one-time (US$128.83)
            </p>
            <p>
              <strong>Registration fee:</strong> US$150 one-time
            </p>
            <p>
              <strong>Student status:</strong> Base - 150 USD, Standard - 500 USD,
              VIP - 900 USD
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "Cost",
      title: "Cost",
      content: (
        <div>
          <h1>hello</h1>
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
