import { useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DesktopNavbar />

      <MobileNavbar
        open={open}
        setOpen={setOpen}
      />

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}