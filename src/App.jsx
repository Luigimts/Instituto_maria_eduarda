import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Historia from "./componentes/Historia";
import Projetos from "./componentes/Projetos";
import Gallery from "./componentes/Gallery";
import Ajuda from "./componentes/Ajuda";
import Footer from "./componentes/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Historia />
      <Projetos />
      <Gallery/>
      <Ajuda />
      <Footer />
    </>
  );
}

export default App;