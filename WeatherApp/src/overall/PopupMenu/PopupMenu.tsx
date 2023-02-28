import React from "react";
import GlobalSVGSelector from "../../assets/icons/global/GlobalSVGSelector";
import { Items } from "../../pages/HomePage/components/presentDayInfo/PresentDayInfo";
import PresentDayInfoItems from "../../pages/HomePage/components/presentDayInfo/PresentDayInfoItems";
import styles from "./PopupMenu.module.scss";

// type Props = {
//   items: Items[];
// };

function PopupMenu({}) {
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
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.day}>
          <div className={styles.temp}>20°C</div>
          <div className={styles.name}>Среда</div>
          <div className={styles.img}>
            <GlobalSVGSelector id='sun'/>
          </div>
          <div className={styles.time}>Время: 21.54</div>
          <div className={styles.city}>Санкт-Петербург</div>
        </div>

        <div className={styles.items}>
          {items.map((item: Items) => (
            <PresentDayInfoItems
              key={item.icon_id}
              item={item}
            ></PresentDayInfoItems>
          ))}
        </div>
        <div className={styles.bottomClose}>
          <GlobalSVGSelector id="close"></GlobalSVGSelector>
        </div>
      </div>
    </>
  );
}

export default PopupMenu;
