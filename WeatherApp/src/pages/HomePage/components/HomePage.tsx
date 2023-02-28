import React from "react";
import PresentDay from "./presentDay/PresentDay";
import PresentDayInfo from "./presentDayInfo/PresentDayInfo";
import Days from "./ weeklyForecast/Days";

import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.topBlock}>
        <PresentDay />
        <PresentDayInfo />
      </div>
      <div className={styles.bottomBlock}>
        <Days />
      </div>
    </div>
  );
}

export default HomePage;
