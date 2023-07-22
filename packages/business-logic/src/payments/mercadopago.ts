import { Collection, getModel } from '@partiaf/constant-definitions';
import { User, UsersSchemaMongo } from '@partiaf/entities';
import mercadopago from 'mercadopago';

interface Props {
  title: string;
  price: number;
}

mercadopago.configure({
  access_token:
    'APP_USR-111919875569225-091621-12afb0b23b63802e46d2d0b7b6ef950a-1199911258',
});

export const createOrder = async ({ title, price }: Props) => {
  let preference = {
    items: [
      {
        title,
        unit_price: price,
        quantity: 1,
      },
    ],
  };

  const result = await mercadopago.preferences.create(preference)
  return result.body;
};

export const success = () => {};

export const updatePayment = async (payment: any, id: string) => {
  if (payment.type != 'payment') return;

  const data = await mercadopago.payment.findById(payment['data.id']);

  console.log(data);

  return;

  const model = getModel<User>(Collection.USERS, UsersSchemaMongo);

  const user = (await model.findById(id).select('-password')) as User;
  user.balance = user.balance + Number(data.body.total_paid_amount);

  return true;
};
