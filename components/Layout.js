import Navbar from "./navbar";
import Home from "./home";
import Project from "./project";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
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
