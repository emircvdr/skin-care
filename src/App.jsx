import Lenis from "@studio-freight/lenis";
import MainPage from "./pages/mainPage";
import Navbar from "./components/Navbar";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import LastPage from "./pages/LastPage";
function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <MainPage />
      <Navbar />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <LastPage />
    </>
  );
}

export default App;
