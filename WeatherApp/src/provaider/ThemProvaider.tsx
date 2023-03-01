// 2 создаем и экспортируем Provaider

import { ReactNode, useState } from "react";
import { ThemContext, Theme } from "../context/ThemContext";
import { StorageThem } from "../model/Storage";

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(
    StorageThem.getItem("them") || Theme.LIGHT
  );
  function changeThem(them: Theme) {
    StorageThem.setItem("them", them);
    setTheme(them);
  }
  return (
    <ThemContext.Provider
      value={{
        them: theme,
        changeThem: changeThem,
      }}
      {...props}
    >
      {children}
    </ThemContext.Provider>
  );
};
