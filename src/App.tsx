import { Route, Routes } from "react-router-dom";
import LayoutSite from "./components/layout/LayoutSite";
import HomePage from "./components/pages/HomePage";

const App = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      element: <HomePage />,
    },
    {
      id: 2,
      path: "/about",
      element: <HomePage />,
    },
    {
      id: 3,
      path: "/study",
      element: <HomePage />,
    },
    {
      id: 4,
      path: "/contacts",
      element: <HomePage />,
    },
  ];
  return (
    <>
      <LayoutSite />
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default App;
