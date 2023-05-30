import { Collection, getModel } from '@partiaf/constant-definitions';
import { UsersSchemaMongo, User } from '@partiaf/entities';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { JWT_SECRET } = process.env;
interface Result {
  token: string;
}

export const userLogin = async ({
  phone,
  password,
}: Partial<User>): Promise<Result | Error> => {
  const model = await getModel<User>(Collection.USERS, UsersSchemaMongo);

  const user = await model.findOne({ phone });

  if (!user) return new Error('User dont exists o its inactive');

  const isValidPassword = await bcrypt.compare(password!, user.password);

  if (!isValidPassword) throw new Error('Invalid crednetials');

  user.lastLogin = new Date();
  user.save();

  const token = jwt.sign({ id: user.id }, JWT_SECRET!, { expiresIn: '30d' });

  return { token };
};
