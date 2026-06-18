import Navbar from "./components/Navbar/Navbar";
import FranchisePopup from "./components/FranchisePopup";
import { useFranchisePopup } from "./hooks/useFranchisePopup";

import Hero from "./sections/Hero/Hero";
import SignatureCollection from "./sections/SignatureCollection/SignatureCollection";
import Story from "./sections/Story/Story";
import Franchise from "./sections/Franchise/Franchise";
import Visit from "./sections/Visit/Visit";
import Contact from "./sections/Contact/Contact";

function App() {
  const { open, closePopup } = useFranchisePopup();

  return (
    <main className="overflow-x-hidden bg-[#FFF9F2]">
      <Navbar />

      <FranchisePopup
        open={open}
        onClose={closePopup}
      />

      <div className="h-[92px]" />

      <Hero />

      <SignatureCollection />

      <Story />

      <Franchise />      

      <Visit />

      <Contact />
    </main>
  );
}

export default App;