import React from "react";
import GlobalSVGSelector from "../../../../assets/icons/global/GlobalSVGSelector";
import IndicatorsSVG from "../../../../assets/icons/indicators/IndicatorsSVG";
import { Day } from "./Days";

import styles from "./Weekly.module.scss";

type Props = {
  days: Day;
};

function Card({ days }: Props) {
  const { day, day_info, icon_id, temp_day, temp_night, info } = days;
  return (
    <div className={styles.card}>
      <div className={styles.day}>{day}</div>
      <div className={styles.dayInfo}>{day_info}</div>
      <div className={styles.iconId}>
        <GlobalSVGSelector id={icon_id} />{" "}
      </div>
      <div className={styles.tempDay}> {temp_day}</div>
      <div className={styles.tempNight}>{temp_night}</div>
      <div className={styles.info}>{info}</div>
    </div>
  );
}

export default Card;
