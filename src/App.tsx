import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage/About";
import Header from "./components/layout/header/Header";

const App = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      element: <AboutPage />,
    },
    {
      id: 2,
      path: "/about",
      element: <AboutPage />,
    },
    {
      id: 3,
      path: "/study",
      element: <AboutPage />,
    },
    {
      id: 4,
      path: "/contacts",
      element: <AboutPage />,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default App;
