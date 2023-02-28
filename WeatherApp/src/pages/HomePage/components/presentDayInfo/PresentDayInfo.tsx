import React from "react";
import styles from "./presentDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import PresentDayInfoItems from "./PresentDayInfoItems";

export type Items = {
  icon_id: string;
  name: string;
  value: string;
};

function PresentDayInfo() {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <>
      <div className={styles.presentDayInfo}>
        <div className={styles.items}>
          {items.map((item: Items) => (
            <PresentDayInfoItems
              key={item.icon_id}
              item={item}
            ></PresentDayInfoItems>
          ))}
        </div>
        <img className={styles.cloud} src={cloud} alt="Облако"></img>
      </div>
    </>
  );
}

export default PresentDayInfo;


