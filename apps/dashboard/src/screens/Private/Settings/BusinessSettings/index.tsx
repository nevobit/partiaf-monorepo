import { CardSettings } from "@/components/Cards";
import styles from "./BusinessSettings.module.css";
import cardData from "./CardData";

const BusinessSettings = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.header_Setting}>
        <h1>Personal Account Settings</h1>
      </div>
      <div className={styles.cnt_menu}>
        <div className={styles.menu}>
          <span>General</span>
        </div>
        <div className={styles.cnt_cards}>
          {cardData?.map((card, index) => (
            <CardSettings
              key={index}
              label={card.label}
              description={card.description}
              description_footer={card.description_footer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSettings;
