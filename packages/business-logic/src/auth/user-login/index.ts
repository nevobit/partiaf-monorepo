import { Collection, getModel } from '@partiaf/constant-definitions';
import { StoreSchemaMongo, User } from '@partiaf/entities';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { JWT_SECRET } = process.env;

export const userLogin = async ({
  phone,
  password,
}: Partial<User>): Promise<string | Error> => {
  const model = await getModel<User>(Collection.USERS, StoreSchemaMongo);

  const user = await model.findOne({ phone });

  if (!user) return new Error('User dont exists o its inactive');

  const match = await bcrypt.compare(password!, user.password);

  if (!match) return new Error('Password or phone inorrect');
  const token = jwt.sign({ ...user }, JWT_SECRET!, { expiresIn: '30d' });

  return token;
};
