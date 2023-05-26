import { Collection, getModel } from '@partiaf/constant-definitions';
import { Admin, AdminSchemaMongo, UpdateAdminDto } from '@partiaf/entities';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export const login = async ({ username, password, code }: UpdateAdminDto) => {
  const model = getModel<Admin>(Collection.ADMINS, AdminSchemaMongo);

  const admin = await model.findOne({ username });

  if (!admin) throw new Error('Invalid credentials');

  if (admin.locked) throw new Error('Admin is already locked');

  const isValidPassword = await bcrypt.compare(password!, admin.password);

  if (!isValidPassword) {
    admin.login_attempts += 1;
    await admin.save();

    if (admin.login_attempts >= 3) {
      admin.locked = true;
      await admin.save();
      throw new Error(
        'Too many login attempts, your account is already locked'
      );
    }

    throw new Error('Invalid credentials');
  }

  if (admin.two_factor_auth) {
    if (!code) {
      throw new Error('Authentication code must be provided for login');
    }
  }

  admin.login_attempts = 0;
  await admin.save();

  const token = jwt.sign({ id: admin._id }, JWT_SECRET!, {
    expiresIn: '24h',
  });

  return { token };
};
