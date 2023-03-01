import React, { useEffect, useState } from "react";
import GlobalSVGSelector from "../../assets/icons/global/GlobalSVGSelector";
import Select from "react-select";

import styles from "./Header.module.scss";

function Header() {
  const options = [
    { value: "chocolate", label: "Санкт-Петербург" },
    { value: "strawberry", label: "Мурманск" },
    { value: "vanilla", label: "Пермь" },
  ];

  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;

    const components = ["body", "components", "title"];

    components.forEach((component) => {
      root.style.setProperty(
        `--${component}-background-default`,
        `var(--${component}-background-${theme})`
      );
    });
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src="/pngegg.png" alt="Лого" className={styles.logopng} />
        </div>
        <div className={styles.title}>WeatherApp</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.changeTheme} onClick={changeTheme}>
          <GlobalSVGSelector id="change-theme"></GlobalSVGSelector>
        </div>
        <div className={styles.changeCity}>
          <Select defaultValue={options[0]} options={options} />
        </div>
      </div>
    </header>
  );
}

export default Header;
