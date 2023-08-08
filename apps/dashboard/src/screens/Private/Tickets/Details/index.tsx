import { AppStore } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { useQuery } from "@tanstack/react-query";
import { getGoers } from "@/services/goers";
import Loader from "@/components/Shared/Loader";
import { Goer } from "@partiaf/entities";

const CoversDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {isLoading, data: goers} = useQuery({
    queryKey: ['goers'],
    queryFn: () => getGoers(id || "")
  });

  if(isLoading) return <Loader small />

  console.log(goers)
  
  return (
    <>
      <div className={styles.screen}>
        <div className={styles.center__screen}>
          <div className={styles.screen_header_principal}>
            <div className={styles.box}>
              <h3>Total Entradas</h3>
              <p>{goers[0].ticket.limit}</p>
            </div>
            <div className={styles.box}>
              <h3>Entradas Efectivas</h3>
              <p>{goers.filter((goer: Goer) => goer.entry_status == "in-use").length}</p>
            </div>
            <div className={styles.box}>
              <h3>Entradas no Efectivas </h3>
              <p>{goers.filter((goer: Goer) => goer.entry_status == "cancelled").length}</p>
            </div>
          </div>
          <div className={styles.screen_title}>
            <h3>Detalle Cover</h3>
          </div>

          <div className={styles.list_container}>
            <div className={styles.list}>
              <h3>En cola</h3>
              {goers.filter((goer:Goer) => goer.entry_status == 'in-use').map((goer: any) => (
                <div className={styles.queue_cards}>
                  <div className={`${styles.card_queue} cola}`}>
                    <div className={styles.image_section}>
                      <img src={"/default.jpg"} alt="" />
                      <div>
                        <h3>{goer.user.firstname} {goer.user.lastname}</h3>
                        <p>{goer.user.phone}</p>
                      </div>
                    </div>

                    <div className={styles.event_section}>
                      <h4>{goer.name}</h4>
                      <p>{goer.ticket.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.list}>
              <h3>Ingresado</h3>
              {/* {UsersJoined?.map((user: User) => (
                <div className={styles.queue_cards}>
                  <div className={`${styles.card_queue} cola}`}>
                    <div className={styles.image_section}>
                      <img src={"/default.jpg"} alt="" />
                      <div>
                        <h3>{user.username}</h3>
                        <p>Femenino</p>
                      </div>
                    </div>

                    <div className={styles.event_section}>
                      <h4>{cover.name}</h4>
                      <p>{cover.type}</p>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
            <div className={styles.list}>
              <h3>Cancelado</h3>
              {/* {UsersCancelled?.map((user: User) => (
                <div className={styles.queue_cards}>
                  <div className={`${styles.card_queue} cola}`}>
                    <div className={styles.image_section}>
                      <img src={"/default.jpg"} alt="" />
                      <div>
                        <h3>{user.username}</h3>
                        <p>Masculino</p>
                      </div>
                    </div>

                    <div className={styles.event_section}>
                      <h4>{cover.name}</h4>
                      <p>{cover.type}</p>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoversDetails;