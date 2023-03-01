import { useContext } from "react";
import { ThemContext } from "../context/ThemContext";

export const useTheme = () => useContext(ThemContext);
