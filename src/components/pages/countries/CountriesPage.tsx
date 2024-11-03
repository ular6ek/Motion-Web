"use client";
import { useEffect, useRef, useState } from "react";
import scss from "./CountriesPage.module.scss";
import down from "/src/assets/images/down.png";
import { useWindowSize } from "react-use";
import Flags from "./flags/Flags";
import University from "./university/University";

const CountriesPage = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const {width} = useWindowSize()
  const [modalSize, setModalSize] = useState({ height: 0 });
  const modalRef = useRef(null);
  
  const toggleOpen = (index) => {
    setIsOpen((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };
  useEffect(() => {
    if (modalRef.current) {
      const { height } = modalRef.current.getBoundingClientRect();
      setModalSize({height });
    }
  }, [isOpen]);

  return (
    <section id={scss.Countries}>
      <div className="container">
        <h1>Choose the country</h1>

        <div className={scss.filter}>

            {[...Array(3)].map((_, index) => (
              width > 600 ?
                <div
                  key={index}
                  onClick={() => toggleOpen(index)}
                  className={scss.filter_item}
                >
                  <span>Higher Education</span>
                  <img
                    src={down}
                    style={{
                      transform: isOpen[index]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                    alt="arrow down"
                  />
                  {isOpen[index] && (
                    <div className={scss.down_modal} ref={modalRef}>
                      <div>123</div>
                      <div>123</div>
                      <div>123</div>
                      <div>123</div>
                    </div>
                  )}
                </div>
                :
                <div
                style={{
                  marginBottom: isOpen[index] ? `${modalSize.height}px` : "0px", // Используем modalSize.height только при isOpen[index]
                }}                key={index}
                onClick={() => toggleOpen(index)}
                className={scss.filter_item}
              >
                <span>Higher Education</span>
                <img
                  src={down}
                  style={{
                    transform: isOpen[index]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                  alt="arrow down"
                />
                {isOpen[index] && (
                  <div className={scss.down_modal} ref={modalRef}>
                    <div>123</div>
                    <div>123</div>
                    <div>123</div>
                    <div>123</div>
                  </div>
                )}
              </div>
          ))}
        </div>

        {/* <Flags /> */}
        <University />
      </div>
    </section>
  );
};

export default CountriesPage;
