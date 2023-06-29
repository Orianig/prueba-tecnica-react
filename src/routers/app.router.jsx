import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import Home from "../pages/Home/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
