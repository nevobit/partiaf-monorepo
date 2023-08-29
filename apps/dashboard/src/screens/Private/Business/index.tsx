import styles from "./Business.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import Button from "@/components/Shared/Button";
import { PrivateRoutes, PublicRoutes } from "@/constant-definitions";
import Field from "@/components/Shared/Field";
import Input from "@/components/Shared/Input";
import { logout } from "@/redux/auth/users/thunks";
import { getStoresByAdmin } from "@/redux/states";
import { Store } from "@partiaf/entities";
import { useQuery } from "@tanstack/react-query";
import { getAdmin } from "@/services/admins";
import { getStores } from "@/services/stores";
import Loader from "@/components/Shared/Loader";

const Bussiness = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user: auth } = useSelector((state: AppStore) => state.auth);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, data: admin } = useQuery({
    queryKey: ["admins"],
    queryFn: () => getAdmin(auth.token),
  });

  const { isLoading: isLoadingStores, data: stores } = useQuery({
    queryKey: ["stores"],
    queryFn: () => getStores(auth.token),
  });

  const signoutHandler = () => {
    try {
      dispatch(logout() as any);
      navigate(PublicRoutes.SIGNIN, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const storeHandler = (store: Store) => {
    localStorage.setItem("store", JSON.stringify(store));
    navigate(PrivateRoutes.TICKETS);
  };

  if (isLoadingStores) return <Loader />;

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>
          <img src="/logo-partiaf-neg.svg" alt="Logo Partiaf" />

          <Button variant="third" onClick={signoutHandler}>
            <p>Cerrar sesion</p>
          </Button>
        </div>
        <div className={styles.info_welcome}>
          <h1>¡Bienvenido!</h1>
          <img src={admin?.photo ? admin.photo : "/default.jpg"} alt="" />
          <p>
            {admin?.name} {admin?.lastname}
          </p>
          <span className={styles.span}>Por favor selecciona tu negocio</span>
          <Button color="#ccc">
            <Link to={PrivateRoutes.REGISTER_BUSINESS}>Añadir negocio</Link>
          </Button>
          <div className={styles.stores}>
            {stores?.count > 0 ? (
              <>
                {stores.items?.map((store: Store) => (
                  <Button
                    style={{
                      width: "150px",
                      marginInline: "auto",
                    }}
                    variant="third"
                    key={store.id}
                    onClick={() => storeHandler(store)}
                  >
                    {store.name}
                  </Button>
                ))}
              </>
            ) : (
              <h2>No tienes negocios</h2>
            )}
          </div>
        </div>
      </div>

      {openModal && (
        <div className={styles.modal_store}>
          <div className={styles.container_modal}>
            <div className={styles.header_modal}>
              {/* <h4 className={styles.modal_title}>{storeSelected?.name}</h4> */}
              <Button onClick={() => setOpenModal(false)}>
                <i className="bx bx-x"></i>
              </Button>
            </div>
            <div className={styles.content_modal}>
              <Field>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  placeholder="Ingrese la contrasena del negocio"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.pass}
                >
                  {/* {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />} */}
                </div>
              </Field>
              <Button
                // onClick={signninStoreHandler}
                color="#f2f6fa"
              >
                Entrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bussiness;
