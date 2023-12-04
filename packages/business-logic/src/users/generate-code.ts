import { getModel, Collection } from '@partiaf/constant-definitions';
import { User, UsersSchemaMongo } from '@partiaf/entities';

export const generateUsersCode = async (id: string): Promise<User[]> => {
  const model = getModel<User>(Collection.USERS, UsersSchemaMongo);
  let query = {};

  if (id) {
    query = { _id: { $ne: id }, isDev: false };
  }

  const users = await model.find(query).select('-password').lean();

  const usersWithPromoCodes = users.filter((user) => user.accountType == "promoter").map((user) => {
    const promoCode = generatePromoCode(user.firstname, user.lastname);
    return { ...user, promoCode };
  });

  console.log(usersWithPromoCodes)
  
    // Actualizar cada usuario en la base de datos con el código promocional
    for (const user of usersWithPromoCodes) {
      await model.updateOne({ _id: user._id }, { $set: { promocionalCode: user.promoCode } });
    }

  return users;
};


const generatePromoCode = (firstName: string, lastName: string): string => {
  // Obtener las primeras 3 letras del firstName y lastName
  const initials = `${firstName.slice(0, 3)}${lastName.slice(0, 3)}`;

  // Generar dos números aleatorios de dos dígitos
  const randomNumber1 = Math.floor(Math.random() * 90) + 10;
  const randomNumber2 = Math.floor(Math.random() * 90) + 10;

  // Combinar todo para formar el código promocional
  const promoCode = `${initials}${randomNumber1}${randomNumber2}`;

  return promoCode;
};