import { useEffect, useState } from "react";

export function useFranchisePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);
  
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    localStorage.setItem("franchisePopupSeen", "true");
    setOpen(false);
  };

  return {
    open,
    closePopup,
  };
}