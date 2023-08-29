import { Collection, getModel } from '@partiaf/constant-definitions';
import { User, UsersSchemaMongo } from '@partiaf/entities';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface UserToken {
  token: string;
}

const PHONE_REGEX = /^\d{10}$/;

const { JWT_SECRET } = process.env;

export const registerUser = async (data: any): Promise<UserToken | Error> => {
  if (!PHONE_REGEX.test(data.phone.toString())) {
    throw new Error('The phone number provided is not valid');
  }

  const model = getModel<User>(Collection.USERS, UsersSchemaMongo);

  const user = new model(data);

  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(data.password, salt);

  await user.save();

  const token = jwt.sign({ id: user.id }, JWT_SECRET!, { expiresIn: '24d' });

  return { token };
};
