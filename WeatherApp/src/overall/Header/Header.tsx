import React from "react";
import GlobalSVGSelector from "../../assets/icons/global/GlobalSVGSelector";
import Select from "react-select";

import styles from "./Header.module.scss";

function Header() {
  const options = [
    { value: "chocolate", label: "Санкт-Петербург" },
    { value: "strawberry", label: "Мурманск" },
    { value: "vanilla", label: "Пермь" },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img
            src="/pngegg.png"
            alt="Письма мастера дзен"
            className={styles.logopng}
          />
        </div>
        <div className={styles.title}>WeatherApp</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.changeTheme}>
          <GlobalSVGSelector id="change-them"></GlobalSVGSelector>
        </div>
        <div className={styles.changeCity}>
          <Select defaultValue={options[0]
          } options={options} />
        </div>
      </div>
    </header>
  );
}

export default Header;
