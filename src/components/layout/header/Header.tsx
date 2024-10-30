import scss from "./Header.module.scss";
import header_logo from "../../../assets/images/Motion_web.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navbar = [
    {
      id: 1,
      name: "Home",
      to: "/",
    },
    {
      id: 2,
      name: "About Us",
      to: "/about",
    },
    {
      id: 3,
      name: "Study Abroad",
      to: "/study",
    },
    {
      id: 4,
      name: "Contacts",
      to: "/contacts",
    },
  ];
  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.Header}>
          <img src={header_logo} alt="header_logo" />
          <div className={scss.Header_nav}>
            {navbar.map((item) => (
              <NavLink to={item.to} key={item.id}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className={scss.Header_buttons}>
            <input type="text" placeholder="  Поиск"/>
            <select>
              <option value="EN" selected>
                EN
              </option>
              <option value="EN">RU</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
