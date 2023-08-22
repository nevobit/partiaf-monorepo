import React, { useState } from "react";
import styles from "./tickets.module.css";
import SearchBar from "@/components/Shared/SearchBar";
import Button from "@/components/Shared/Button";
import ReservationTotals from "@/components/Shared/ReservationTotals";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteTicket, getTickets } from "@/services/tickets";
import Loader from "@/components/Shared/Loader";
import { Ticket } from "@partiaf/entities";
import CardCover from "@/components/UI/Tickets/Card";
import CreateTicket from "./Create";

interface Table {
  user?: string;
  date?: string;
  hour?: string;
}

const Tickets = ({ user, date, hour, ...rest }: Table) => {
  const [open, setOpen] = useState(false);

  const store = JSON.parse(localStorage.getItem("store") || "");

  const { isLoading, data: tickets } = useQuery({
    queryKey: ["tickets"],
    queryFn: () => getTickets(store.id),
  });

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: () => deleteTicket(store.id),
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading) return <Loader small />;

  return (
    <>
      <div className={styles.body}>
        <div className={styles.header}>
          <h2 className={styles.title}>Tickets</h2>
          <div className={styles.header_options}>
            <SearchBar className={styles.header_buttons} />
            <Button
              className={styles.header_buttons}
              variant="secondary"
              onClick={() => setOpen(true)}
            >
              Crear Tickets
            </Button>
          </div>
        </div>
        <div className={styles.totals}>
          <ReservationTotals
            title="Total Tickets Creados"
            totals={tickets.items.length}
          />
          <ReservationTotals title="Tickets Finalizados" totals="0" />
        </div>
        <div className={styles.main}>
          <div className={styles.main_top}>
            <h3 className={styles.main_title}>Lista</h3>
          </div>
          <div>
            <div className={styles.container_items}>
              {tickets.items.map((ticket: Ticket) => (
                <CardCover ticket={ticket} key={ticket.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {open && <CreateTicket setOpen={setOpen} />}
      {/* <Modal activeModal={(e: React.MouseEvent) =>{setOpen(!open)}}/> */}
    </>
  );
};

export default Tickets;
