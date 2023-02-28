import React from "react";
import IndicatorsSVG from "../../../../assets/icons/indicators/IndicatorsSVG";
import { Items } from "./presentDayInfo";

import styles from "./presentDayInfo.module.scss";

interface Props {
  item: Items;
}

function PresentDayInfoItems({ item }: Props) {
  const { icon_id, name, value } = item;
  return (
    <div className={styles.itemsElement}>
      <div  className={styles.iconId}>
        <IndicatorsSVG icon_id={icon_id}></IndicatorsSVG>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default PresentDayInfoItems;
