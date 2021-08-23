import { createContext, useContext } from "react";

export type MobileNavContent = {
  showMobileNav: boolean;
  toggleMobileNav: () => void;
};

export const MobileNavContext = createContext<MobileNavContent>({
  showMobileNav: false,
  toggleMobileNav: () => {},
});
