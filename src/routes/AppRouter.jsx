import { BrowserRouter as Router, Routes, Route } from "react-router";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import Home from "@/pages/Home/HomePage";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />}></Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
