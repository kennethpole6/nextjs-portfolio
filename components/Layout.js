import Navbar from "./navbar";
import Home from "./home";
import Project from "./project";
import About from "./about";
import Contact from "./contact";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Home />
      <Project />
      <About />
      <Contact />
      <div>{children}</div>
    </>
  );
};

export default Layout;
