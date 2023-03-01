import { createContext, useState } from "react";

export type Props = {
  them: Theme;
  changeThem: (them: Theme) => void;
};

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

// 1.экспортируем контекст и создаем контекст
export const ThemContext = createContext<Props>({
  them: Theme.LIGHT,
  changeThem: () => {},
});
