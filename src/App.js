import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/main";
import Welcome from "./pages/welcome";
import NotFound from "./pages/not-found";
import Page1 from "./pages/page1";
import Page11 from "./pages/page1-1";
import Page12 from "./pages/page1-2";
import Page13 from "./pages/page1-3";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} >
          <Route path="/home" element={<Main />} ></Route>
          <Route path="/page1" element={<Page1 />}>
            <Route path="/page1-1" element={<Page11 />}></Route>
            <Route path="/page1-2" element={<Page12 />}></Route>
            <Route path="/page1-3" element={<Page13 />}></Route>
          </Route>
          <Route path="/page2" element={<Page2 />}></Route>
          <Route path="/page3" element={<Page3 />}></Route>
        </Route>
        <Route path="/login" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

function Test() {
  return sessionStorage.getItem("token") ? <Main /> : <Navigate to="/login" />;
}
