import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/pages/aboutPage/About";
import Header from "./components/layout/header/Header";
import CountriesPage from "./components/pages/countries/CountriesPage";
import MainPage from "./components/pages/main/MainPage";
import ContactsPage from "./components/pages/contacts/ContactsPage";
import Footer from "./components/layout/footer/Footer";

const App = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      element: <MainPage />,
    },
    {
      id: 2,
      path: "/about",
      element: <AboutPage />,
    },
    {
      id: 3,
      path: "/study",
      element: <CountriesPage />,
    },
    {
      id: 4,
      path: "/contacts",
      element: <ContactsPage />,
    },
  ];
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={item.element} key={item.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
