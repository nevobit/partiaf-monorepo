import React from "react";
import styles from "./ImageInput.module.css";
import Loader from "../Loader";

interface Props {
  value?: string;
  name?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  loading?: boolean;
}

const ImageInput = ({ value, loading, onChange }: Props) => {
  return (
    <div>
      <div className={styles.formbold_file_input}>
        <input
          type="file"
          name="file"
          id="file"
          value={value}
          onChange={onChange}
        />
        <label htmlFor="file">
          {loading ? (
            <Loader small />
          ) : (
            <div>
              <span className={styles.formbold_drop_file}>
                Arrasta el archivo
              </span>
              <span className={styles.formbold_or}>O</span>
              <span className={styles.formbold_browse}>Buscalo</span>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default ImageInput;
