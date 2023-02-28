import React from "react";

import styles from "./Weekly.module.scss";

type Tabs = {
  value: string;
};

function Tabs() {
  const tabs: Tabs[] = [
    {
      value: "На неделю",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ];

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <div className={styles.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={styles.tabCancel}>Отмена</div>
    </div>
  );
}

export default Tabs;
