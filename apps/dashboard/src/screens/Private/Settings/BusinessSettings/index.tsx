import { CardSettings } from "@/components/Cards";
import styles from "./BusinessSettings.module.css";
import cardData from "./CardData";
import { useGetStoreById, useUpdatePhotos, useUpdateStore } from "@/hooks";
import { useEffect } from "react";
import ImageInput from "@/components/Shared/ImageInput";
import { X } from "react-feather";
import Button from "@/components/Shared/Button";

const BusinessSettings = () => {
  const { id } = JSON.parse(localStorage.getItem("store") as any);
  const { storeData } = useGetStoreById(id);
  const {
    store,
    setStore,
    handleChange,
    getCardValue,
    updateStore,
    isUpdating,
  } = useUpdateStore();
  const { uploadHandler, removePhoto, loadingPhoto } = useUpdatePhotos({
    store,
    setStore,
  });

  useEffect(() => {
    if (storeData) {
      setStore(storeData);
    }
  }, [storeData]);

  const handleUpdateStore = () => {
    updateStore({ ...store, id });
  };

  return (
    <div className={styles.screen}>
      <div className={styles.header_Setting}>
        <h1>Configuracion del negocio</h1>
      </div>
      <div className={styles.cnt_menu}>
        <div className={styles.menu}>
          <span>General</span>
        </div>

        <div className={styles.cnt_cards}>
          <div className={styles.cnt_photo}>
            <h3>Fotos del establecimiento</h3>
            <div className={styles.section_photos}>
              <div className={styles.upload_photo}>
                <ImageInput
                  name="photos"
                  onChange={(e) => uploadHandler(e, "featurephoto")}
                  loading={loadingPhoto}
                />
              </div>
              <div className={styles.photos}>
                {store.photos.map((url, index) => (
                  <div key={index} className={styles.img_item}>
                    <button onClick={() => removePhoto(url)}>
                      <X size={14} />
                    </button>
                    <img key={index} src={url} alt={`Image ${index}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {cardData?.map((card, index) => (
            <CardSettings
              key={index}
              label={card.label}
              name={card.name}
              description={card.description}
              description_footer={card.description_footer}
              value={getCardValue(card.name)}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>
      <div className={styles.footer_update_store}>
        <Button variant="dark" loading={isUpdating} onClick={handleUpdateStore}>
          Guardar Cambios
        </Button>
      </div>
    </div>
  );
};

export default BusinessSettings;
