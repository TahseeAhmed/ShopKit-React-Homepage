import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationBar />

      <main>
        <Hero />
        <Features />
      </main>

      <Footer />
    </>
  );
}

export default App;
