"use client";
import { useEffect, useRef, useState } from "react";
import scss from "./CountriesPage.module.scss";
import down from "/src/assets/images/down.png";
import { useWindowSize } from "react-use";
import Solbrige from "../SolbrigeUniversity/Solbrige";
import Flags from "./flags/Flags";

const CountriesPage = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const { width } = useWindowSize();
  const [modalSize, setModalSize] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleOpen = (index: number) => {
    setIsOpen((prev) => prev.map((open, i) => (i === index ? !open : open)));
  };

  useEffect(() => {
    if (modalRef.current) {
      setModalSize(modalRef.current.getBoundingClientRect().height);
    }
  }, [isOpen]);

  const renderFilterItem = (index: number) => (
    <div
      key={index}
      onClick={() => toggleOpen(index)}
      className={scss.filter_item}
      style={{
        marginBottom: width <= 600 && isOpen[index] ? `${modalSize}px` : "0px",
      }}
    >
      <span>Higher Education</span>
      <img
        src={down}
        style={{
          transform: isOpen[index] ? "rotate(180deg)" : "rotate(0deg)",
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
  );

  return (
    <section id={scss.Countries}>
      <div className="container">
        <h1>Choose the country</h1>

        <div className={scss.filter}>
          {[...Array(3)].map((_, index) => renderFilterItem(index))}
        </div>

        <ul className={scss.list}>
          {[...Array(6)].map((_, index) => (
            <li key={index} className={scss.item}>
              <img src={Flags} alt="flag" />
              <span>amerika</span>
            </li>
          ))}
        </ul>
      </div>
      <Solbrige />
    </section>
  );
};

export default CountriesPage;
