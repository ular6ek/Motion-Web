import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/Header";
import MainPage from "./components/pages/main/MainPage";
import ContactsPage from "./components/pages/contacts/ContactsPage";
import Footer from "./components/layout/footer/Footer";
import AboutPage from "./components/pages/AboutPage/About";
import AbroadPage from "./components/pages/abroad/AbroadPage";
import Flags from "./components/pages/countries/flags/Flags";
import University from "./components/pages/countries/university/University";
import Solbrige from "./components/pages/SolbrigeUniversity/Solbrige";

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
      path: "/study/*",
      element: <CountriesPage />,
    },
    {
      id: 4,
      path: "/contacts",
      element: <ContactsPage />,
    },
    {
      id: 5,
      path: "/abroad",
      element: <AbroadPage />,
    },
    {
      id: 5,
      path: "/study/univer/1",
      element: <Solbrige />,
    },
    {
      id:5,
      path: "/flags",
      element: <Flags />
    },
    {
      id: 6,
      path:"/university",
      element: <University />
    },
    {
      id: 7,
      path:"/solbrige",
      element: <Solbrige />
    }
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
