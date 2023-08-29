import React, { useState } from "react";
import styles from "./tickets.module.css";
import Button from "@/components/Shared/Button";
import Loader from "@/components/Shared/Loader";
import { Ticket } from "@partiaf/entities";
import CardCover from "@/components/UI/Tickets/Card";
import CreateTicket from "./Create";
import { useTickets } from "@/hooks/tickets/useTickets";
import Input from "@/components/Shared/Input";
import { Search } from "react-feather";

interface Table {
  user?: string;
  date?: string;
  hour?: string;
}

const Tickets = ({ user, date, hour, ...rest }: Table) => {
  const [open, setOpen] = useState(false);
  const store = JSON.parse(localStorage.getItem("store") || "");
  const { isLoading, tickets } = useTickets(store.id);
  if (isLoading) return <Loader small />;

  return (
    <>
      <div className={styles.screen}>
        <div className={styles.screen_header}>
          <Input
            icon={<Search size={15} color="#333" />}
            placeholder="Burcar..."
          />
          <div className={styles.info}>
            <h3 title="Total Tickets Creados">{tickets.items.length}</h3>
            <h3 title="Total Tickets Finalizados">0</h3>
          </div>
          <Button
            className={styles.header_buttons}
            variant="secondary"
            onClick={() => setOpen(true)}
          >
            Crear Tickets
          </Button>
        </div>

        <div className={styles.items}>
          {tickets.items.map((ticket: Ticket) => (
            <CardCover ticket={ticket} key={ticket.id} />
          ))}
        </div>
      </div>
      {/* <div className={styles.body}>
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
      </div> */}
      {open && <CreateTicket setOpen={setOpen} />}
      {/* <Modal activeModal={(e: React.MouseEvent) =>{setOpen(!open)}}/> */}
    </>
  );
};

export default Tickets;
