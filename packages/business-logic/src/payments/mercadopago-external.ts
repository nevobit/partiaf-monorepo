import { Collection, getModel } from '@partiaf/constant-definitions';
import { Goer, GoerSchemaMongo, Store, StoreSchemaMongo, Ticket, TicketSchemaMongo, User, UsersSchemaMongo } from '@partiaf/entities';
import mercadopago from 'mercadopago';
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model';
import { PaymentGetResponse } from 'mercadopago/resources/payment';
import { MercadoPagoPreference } from 'mercadopago/resources/preferences';
import { randomUUID } from 'crypto';
interface Props {
  title: string;
  price: number;
  email?: string;
  time?: string;
    date?: string;
    ticket?: string;
    amount?: string;
    users?: any[]
}

mercadopago.configure({
  access_token:
    'APP_USR-111919875569225-091621-12afb0b23b63802e46d2d0b7b6ef950a-1199911258',
});

/**
 * Create a purchase order in MercadoPago.
 * @param {Object} props - Order properties.
 * @param {string} props.title - Title of the product or service.
 * @param {number} props.price - Unit price of the product or service.
 * @returns {Promise<Object>} - Promise that resolves to an object with order information.
 */

enum AutoReturn {
  ALL= 'all',
  APPROVED= 'approved',
}

export const createOrderExternal = async ({ title, price, email, time,
  date,
  ticket,
  amount, users }: Props) => {

  const objectData = {
    email,
    cost: price,
    ticket,
    amount,
    users
  }

  let preference : CreatePreferencePayload = {
    items: [
      {
        title,
        unit_price: price,
        quantity: 1,
      },
    ],

    notification_url: "https://partiaf-api.xyz/api/v3/webhook-external",
    external_reference: JSON.stringify(objectData),
    back_urls: {
      success: "https://partiaf.com/soonorofest/success"
    }
    // auto_return: AutoReturn.ALL,
  };

  const result = await mercadopago.preferences.create(preference)
  return result.body;
};


export const updatePaymentExternal = async (payment: any, id: string) => {
  const modelCover = getModel<Ticket>(Collection.TICKETS, TicketSchemaMongo);
  const model = getModel<Goer>(Collection.GOERS, GoerSchemaMongo);
  const modelStore = getModel<Store>(Collection.STORES, StoreSchemaMongo);

  if (payment.type != 'payment') return;

  if (payment.type === "payment") {
    const data = await mercadopago.payment.findById(payment["data.id"]);
    const info = JSON.parse(data.body.external_reference);
    const email = info.email;
    if(!email) return;

    if(data.body.status == 'approved'){
      const result = new model({...info,    user: "7fac095a-45ac-429d-93ce-292ca250b81b",     entry_status: "in_list",
      name: "Soonoro Fest",
      description: "Soonoro Fest",
      time: "16:00",
      date: "16-12-2023",
    });
      const cover = await modelCover.findById(info.ticket);
      const store = await modelStore.findById(cover?.store);

      if(!cover) return new Error(`No ticket found`);
      cover.limit = cover.limit - info.amount;

      if(!store) return new Error(`No store found`);
      store.balance = store.balance + info.cost;

      await cover.save();
      await store.save();
      await result.save();

      // await sendEmailCreatedWork({ title: JSON.stringify(info), email: email }, 'created' )

      console.log("Send email")
    }
  }

  return true;
};
