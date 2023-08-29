import Button from "@/components/Shared/Button";
import Copyright from "@/components/Shared/Copyright";
import { PrivateRoutes, PublicRoutes } from "@/constant-definitions";
import { AppStore } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterBusiness.module.css";
import Field from "@/components/Shared/Field";
import Input from "@/components/Shared/Input";
import logo from "../../../../public/logo-partiaf-neg.svg";
import ImageInput from "@/components/Shared/ImageInput";
import { X } from "react-feather";
import { createStore } from "@/redux/states";
import { CreateStoreDto } from "@partiaf/entities";
import { resetStores } from "@/redux/states/stores/slice";
import Textarea from "@/components/Shared/Textarea";
import { getAdmin } from "@/services/admins";
import { useQuery } from "@tanstack/react-query";

export const CLOUDINARY_URL =
  "https://api.cloudinary.com/v1_1/matosr96/image/upload";

const RegisterBusiness = () => {
  const [screen, setScreen] = useState(0);

  const { user: auth, loading } = useSelector((state: AppStore) => state.auth);
  const { success: successStore } = useSelector(
    (state: AppStore) => state.stores
  );

  const [passwordError, setPasswordError] = useState("");

  const [store, setStore] = useState<Partial<CreateStoreDto>>({
    name: "",
    admin: "",
    email: "",
    phone: 0,
    nit: "",
    employes: 0,
    employe_code: 0,
    limit: 0,
    password: "",
    type: "Discoteca",
    description: "",
    photos: [],
  });

  const [agree, setAgree] = useState<boolean>(false);

  const { isLoading, data: admin } = useQuery({
    queryKey: ["admins"],
    queryFn: () => getAdmin(auth.token),
  });

  const dispatch = useDispatch();

  const handleCheckBox = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAgree(!agree);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStore((prev) => ({ ...prev, [event.target.name]: event.target.value }));

    if (
      event.target.name === "repeat_password" &&
      event.target.value !== store.password
    ) {
      setPasswordError("Las contraseñas no coinciden");
    } else {
      setPasswordError("");
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStore((prev) => ({ ...prev, type: event.target.value }));
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!agree) {
      alert("Debes aceptar los términos y condiciones para continuar");
      return;
    }

    if (passwordError) {
      alert("Las contraseñas no coinciden");
      return;
    }

    dispatch(createStore({ ...store, admin: admin.id }) as any);
  };

  const uploadHandler = async (e: any, imageField = "image") => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.append("upload_preset", "r9rqkvzr");
    bodyFormData.append("cloud_name", "matosr96");

    try {
      fetch(CLOUDINARY_URL, {
        method: "post",
        body: bodyFormData,
      })
        .then((resp) => resp.json())
        .then((data) => {
          const image = data.url || "";

          const images: any = store.photos || [];
          images.push(image);
          setStore((prev) => ({ ...prev, ["photos"]: images }));
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const removePhoto = (image: string) => {
    let images = store.photos || [];
    images = images.filter((i) => i != image);
    setStore((prev) => ({ ...prev, ["photos"]: images }));
  };

  const navigate = useNavigate();

  console.log({ successStore });

  useEffect(() => {
    if (successStore) {
      navigate(PrivateRoutes.BUSINESS, { replace: true });
      dispatch(resetStores());
    }
  }, [successStore, navigate]);

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} />
      </div>
      <div className={styles.main}>
        <h2 className={styles.title}>Registrar Negocio</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          {screen == 0 && (
            <div className={styles.inputs}>
              <Field label="Nombre">
                <Input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ingresa tu nombre"
                  onChange={handleChange}
                />
              </Field>
              <Field label="Nit">
                <Input
                  required
                  type="text"
                  name="nit"
                  id="nit"
                  placeholder="Ingresa el nit del negocio"
                  onChange={handleChange}
                />
              </Field>
              <Field
                label="Cupo total"
                tip="Indica cuantas personas caben en tu establecimiento"
              >
                <Input
                  required
                  type="number"
                  name="limit"
                  id="limit"
                  onChange={handleChange}
                />
              </Field>
              <Field
                label="Codigo Colaboradores"
                tip="Inserte un codigo de 4 digitos para que sus colaboradores puedas usar nuestra app"
              >
                <Input
                  required
                  variant="number"
                  type="number"
                  name="employees"
                  id="employees"
                  placeholder="Codigo"
                  onChange={handleChange}
                />
              </Field>
              <Field label="N° de Empleados">
                <Input
                  required
                  variant="number"
                  type="number"
                  name=""
                  id="employes"
                  placeholder=""
                  onChange={handleChange}
                />
              </Field>
              <Field label="Tipo">
                <select name="type" onChange={handleSelectChange}>
                  <option value="Discoteca">Discoteca</option>
                  <option value="Bar">Bar</option>
                  <option value="Gastrobar">Gastrobar</option>
                </select>
              </Field>

              <Field
                label="Contraseña"
                //error={setError(error)}
              >
                <Input
                  required
                  name="password"
                  id="password"
                  variant="password"
                  type="password"
                  placeholder="Introduce tu Contraseña"
                  onChange={handleChange}
                />
              </Field>
              <Field label="Confirmar contraseña" error={passwordError}>
                <Input
                  required
                  name="repeat_password"
                  id="repeat_password"
                  variant="password"
                  placeholder="Repetir contraseña"
                  onChange={handleChange}
                />
              </Field>
            </div>
          )}

          {screen == 1 && (
            <>
              <div className={styles.info_registerBusiness}>
                <p>Imagenes del establecimiento</p>
                <div className={styles.container_images}>
                  <div className={styles.container_form}>
                    <ImageInput
                      name="photos"
                      onChange={(e) => uploadHandler(e, "featurephoto")}
                    />
                  </div>
                  <div className={styles.images}>
                    {store.photos?.map((photo) => (
                      <div key={photo} className={styles.img_item}>
                        <button onClick={() => removePhoto(photo)}>
                          <X size={14} />
                        </button>
                        <img src={photo} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Textarea name="description" onChange={handleChange} />

              <Input required onChange={handleCheckBox} variant="checkbox">
                <p className={styles.copy}>
                  Acepto los
                  <Link className={styles.terms} to="/terms-and-conditions">
                    {" "}
                    terminos y condiciones{" "}
                  </Link>{" "}
                  de Partiaf
                </p>
              </Input>
            </>
          )}
          <div className={styles.buttons}>
            {screen == 0 ? (
              <Button type="button" loading={loading} variant="dark">
                <Link to={PublicRoutes.SIGNIN}>Cancelar</Link>
              </Button>
            ) : (
              <Button type="button" onClick={() => setScreen(0)} variant="dark">
                Atras
              </Button>
            )}
            {screen == 0 ? (
              <Button
                type="button"
                loading={loading}
                onClick={() => setScreen(1)}
              >
                Siguiente
              </Button>
            ) : (
              <Button type="button" loading={loading} onClick={onSubmit}>
                Siguiente
              </Button>
            )}
          </div>
        </form>
      </div>
      <Copyright />
    </div>
  );
};

export default RegisterBusiness;
