import Navibar from "./Navibar";
import Home from "./home";
import Project from "./project";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navibar />
      <Home />
      <Project />
      <About />
      <Contact />
      <Footer />
      <div>{children}</div>
    </>
  );
};

export default Layout;
