import "./scss/main.scss";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Sidebar />
        <Hero />
        <About />
        <Projects />
      </main>
      <footer>
        <p>Designed & Built by Waldemar Teichreb</p>
      </footer>
    </div>
  );
}

export default App;
