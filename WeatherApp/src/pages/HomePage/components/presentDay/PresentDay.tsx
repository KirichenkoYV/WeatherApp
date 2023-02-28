import React from "react";

import styles from "./presentDay.module.scss";

function PresentDay() {
  return (
    <div className={styles.presentDay}>
      <div className={styles.topBlock}>
        <div className={styles.topBlockWrapper}>
          <div className={styles.temperature}>20°C</div>
          <div className={styles.day}>Сегодня</div>
        </div>
        <div className={styles.sun}>
          <img src="/sun_120349.png" alt="Солнце" className={styles.sunPng} />
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <div className={styles.time}>Время: 21.54</div>
        <div className={styles.city}>Санкт-Петербург</div>
      </div>
    </div>
  );
}

export default PresentDay;
