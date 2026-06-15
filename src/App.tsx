import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import SignatureCollection from "./sections/SignatureCollection/SignatureCollection";
import Story from "./sections/Story/Story";
import Promise from "./sections/Promise/Promise";
import Visit from "./sections/Visit/Visit";

function App() {
  return (
    <main className="overflow-x-hidden bg-[#FFF9F2]">
      <Navbar />
      <Hero />

      <div
        aria-hidden="true"
        className="h-24 bg-[#FFF9F2] sm:h-32 lg:h-40"
      />

      <SignatureCollection />

      <div
        aria-hidden="true"
        className="h-24 bg-[#FFF9F2] sm:h-32 lg:h-40"
      />

      <Story />

      <div
        aria-hidden="true"
        className="h-24 bg-[#FFF9F2] sm:h-32 lg:h-40"
      />

      <Promise />

      <div
        aria-hidden="true"
        className="h-24 bg-[#FFF9F2] sm:h-32 lg:h-40"
      />

      <Visit />
    </main>
  );
}

export default App;
