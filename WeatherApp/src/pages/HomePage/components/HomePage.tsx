import React from "react";
import PresentDay from "./presentDay/PresentDay";
import PresentDayInfo from "./presentDayInfo/presentDayInfo";

import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.topBlock}>
        <PresentDay />
        <PresentDayInfo />
      </div>
    </div>
  );
}

export default HomePage;
