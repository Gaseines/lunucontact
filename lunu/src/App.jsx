import Header from "./components/Header/Header";
import LinksSection from "./components/LinksSection/LinksSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="page">
      <div className="background-organic background-organic--1" aria-hidden="true"></div>
      <div className="background-organic background-organic--2" aria-hidden="true"></div>
      <div className="background-organic background-organic--3" aria-hidden="true"></div>
      <div className="background-organic background-organic--4" aria-hidden="true"></div>

      

      <div className="background-grid" aria-hidden="true"></div>

      <section className="linktree-shell">
        <span className="shell-ornament shell-ornament--1" aria-hidden="true"></span>
        <span className="shell-ornament shell-ornament--2" aria-hidden="true"></span>
        <span className="shell-ornament shell-ornament--3" aria-hidden="true"></span>

        
        

        <Header />
        <LinksSection />
        <Footer />
      </section>
    </main>
  );
}

export default App;