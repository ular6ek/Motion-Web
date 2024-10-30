import scss from "./Solbrige.module.scss";
import img from "../../../assets/images/student.png";
import { useState } from "react";
const Solbrige = () => {
  const [activeTab, setActiveTab] = useState("location");

  const tabs = [
    {
      id: "Description",
      title: "Description",
      content: "landscape design",
    },
    {
      id: "Cost",
      title: "Cost",
      content:
        "The cost of studying at the Istituto Europeo di Design for the 2023-2024 academic year:",
    },
    {
      id: "photos",
      title: "Photos",
      content: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHWMqcS8j-UsVp-kIV9HA4HJnQGbw3dCMp2V6s1FGPph0w8_BwvD6pHFfWRUPSc6ONV4&usqp=CAU"
          alt=""
        />
      ),
    },
  ];
  return (
    <div id={scss.Solbrige}>
      <div className="container">
        <div className={scss.solbrige}>
          <h1 className={scss.T}>Solbrige University</h1>
          <div className={scss.Block}>
            <img src={img} alt="" />
            <div className={scss.blockText}>
              <div className={scss.Bl}>
                <h1>
                  <span>Location : </span>Australia,Milan,Rim
                </h1>
              </div>
              <div className={scss.Bl}>
                <h1>
                  <span>Data of foundation : </span>1996
                </h1>
              </div>
              <div className={scss.Bl}>
                <h1>
                  <span>Type of programs : </span> Bachelor Course Magistracy
                </h1>
              </div>
              <div className={scss.Bl1}>
                <center>
                  <h2 className={scss.TT}>
                    <span>Specialities:</span>
                    Fashion and Design <br /> Jewerly design
                    <br />
                    Shoe design <br /> Interior design <br />
                    landscape design <br /> Car design <br />
                    Photography
                  </h2>
                </center>
              </div>
              <div className={scss.Bl}>
                <h1>
                  <span>Language : </span>english,Italian
                </h1>
              </div>
            </div>
          </div>
          <center>
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
          </center>
        </div>
      </div>
    </div>
  );
};

export default Solbrige;
