import styles from "./CardSettings.module.css";

interface Props {
  label: string;
  description: string;
  description_footer: string;
  value: any; // Puede ser de cualquier tipo
  onChange: any;
  name: string;
}

const CardSettings = ({
  label,
  description,
  description_footer,
  value,
  onChange,
  name,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.new_card}>
        <h3>{label}</h3>
        <span>{description}</span>
        <input type="text" name={name} value={value} onChange={onChange} />
      </div>
      <div className={styles.footer_card}>
        <p>{description_footer}</p>
      </div>
    </div>
  );
};

export default CardSettings;