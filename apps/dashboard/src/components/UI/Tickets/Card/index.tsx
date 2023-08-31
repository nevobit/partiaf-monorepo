import { useState } from "react";
import styles from "./Card.module.css";
// import fiesta from "../../../../assets/fiesta.webp";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Ticket } from "@partiaf/entities";
import { PrivateRoutes } from "@/constant-definitions";
import { DivisaFormater } from "@/utilities/DivisaFormater";
import { useDeleteTicket } from "@/hooks/tickets/useDeleteTicket";
import Button from "@/components/Shared/Button";
import UpdateTicket from "@/screens/Private/Tickets/Update";
import { useUpdateTicket } from "@/hooks/tickets";
import Loader from "@/components/Shared/Loader";

enum StatusType {
  ACTIVE = "active",
  INACTIVE = "inactive",
  ARCHIVED = "archived",
  DELETED = "deleted",
}

interface Props {
  ticket: Ticket;
}

const CardCover = ({ ticket }: Props) => {
  const dispatch = useDispatch();
  const { name, description, limit, date, hour, price, id, type, image } =
    ticket;
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [coverSelected, setCoverSelected] = useState<Ticket>(ticket);
  const { isDeleting, deleteTicket } = useDeleteTicket();
  const { isUpdating, updateTicket, isSuccess } = useUpdateTicket();
  const [open, setOpen] = useState(false);

  const editHandler = () => {
    setCoverSelected(ticket);
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.container_cover}>
        <div
          className={type == "VIP" ? styles.middle_line : styles.no_middle_line}
        ></div>
        <Link
          className={styles.clickable}
          to={`${PrivateRoutes.TICKETS}/${id}`}
        ></Link>
        <div className={styles.image_cover}>
          {image ? <img src={image} alt="Image" /> : <img src="" alt="Image" />}
        </div>
        <div className={styles.info_cover_container}>
          {/* <span className={styles.sumer}>
            #SUMER
            <span>2023</span>
          </span> */}

          <div className={styles.info_cover}>
            <div className={styles.data_cover}>
              <h4
                className={`${styles.name_cover} ${
                  type == "VIP" ? styles.name_vip : ""
                }`}
              >
                {name}
              </h4>
              <p>{description}</p>
            </div>

            <div className={styles.data_cover_list}>
              <span>
                <strong> Cupos:</strong> {limit}
              </span>
              <span>
                <strong> Fecha:</strong> {date}
              </span>
              <span>
                <strong> Hora:</strong> {hour}
              </span>
            </div>
            <div className={styles.data_cover_price}>
              <h5>{type}</h5>
              <h4> {DivisaFormater(price)}</h4>
            </div>
          </div>
          <div className={styles.icon_cover}>
            <button
            
              className={
                ticket.status === "active"
                  ? styles.card_btn_status_active
                  : styles.card_btn_status_inactive
              }
              onClick={() =>
                updateTicket({
                  id,
                  status:
                    ticket.status === StatusType.ACTIVE
                      ? StatusType.INACTIVE
                      : StatusType.ACTIVE,
                })
              }
            >
              {isUpdating? <Loader small /> : ticket.status === "active" ? "Activo" : "Desactivado"}
            </button>
            <Button className={styles.btn_icon_card_cover}>
              <p className="" onClick={() => editHandler()}>
                Editar
              </p>
            </Button>
            <Button
              loading={isDeleting}
              className={styles.btn_icon_card_cover_delete}
              onClick={() => deleteTicket(id)}
            >
              <p className="">Borrar</p>
            </Button>
          </div>
        </div>
      </div>
      {/* <UpdateCover
        setOpenModal={setIsOpenEdit}
        openModal={isOpenEdit}
        coverData={coverSelected}
      /> */}
      {open && <UpdateTicket setOpen={setOpen} cover={ticket} />}
    </>
  );
};

export default CardCover;
