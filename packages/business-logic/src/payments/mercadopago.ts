import { Collection, getModel } from '@partiaf/constant-definitions';
import { User, UsersSchemaMongo } from '@partiaf/entities';
import mercadopago from 'mercadopago';

interface Props {
  title: string;
  price: number;
}

mercadopago.configure({
  access_token:
    'APP_USR-4427138981263654-103114-09b1954c80295c39f47255f73b5060f2-319397311',
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

  await mercadopago.preferences
    .create(preference)
    .then(function (response) {
      return response.body.init_point;
    })
    .catch(function (err) {
      console.log(err);
    });
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
