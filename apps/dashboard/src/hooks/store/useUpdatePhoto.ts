import { CLOUDINARY_URL } from '@/screens/Private/RegisterBusiness';
import { useState } from 'react'; 

interface Props {
  store: any;
  setStore: Function;
}

export const useUpdatePhotos = ({ store, setStore }: Props) => {
  const [loadingPhoto, setLoadingPhoto] = useState(false); // Estado de carga

  const uploadHandler = async (e: any, imageField = "image") => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.append("upload_preset", "r9rqkvzr");
    bodyFormData.append("cloud_name", "matosr96");

    try {
      setLoadingPhoto(true); // Establecer estado de carga a true
      fetch(CLOUDINARY_URL, {
        method: "post",
        body: bodyFormData,
      })
        .then((resp) => resp.json())
        .then((data) => {
          const image = data.url || "";
          const images: any = store.photos || [];
          images.push(image);
          setStore((prev: any) => ({ ...prev, ["photos"]: images }));
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoadingPhoto(false); 
        });
    } catch (err) {
      console.log(err);
      setLoadingPhoto(false);
    }
  };

  const removePhoto = (image: string) => {
    let images = store.photos || [];
    images = images.filter((i: any) => i !== image);
    setStore((prev: any) => ({ ...prev, ["photos"]: images }));
  };

  return { uploadHandler, removePhoto, loadingPhoto };
};