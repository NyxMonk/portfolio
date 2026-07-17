import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Perspective from "./components/Perspective";
import Journey from "./components/Journey";
import LetsBuild from "./components/LetsBuild";
import Footer from "./components/Footer";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <About/>
        <SelectedWork />
        <LetsBuild />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}
