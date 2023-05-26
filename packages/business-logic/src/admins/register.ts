import { Collection, getModel } from '@partiaf/constant-definitions';
import { Admin, AdminSchemaMongo, CreateAdminDto } from '@partiaf/entities';
import bcrypt from 'bcrypt';

export const registerAdmin = async (
  data: CreateAdminDto
): Promise<Admin | Error> => {
  const model = getModel<Admin>(Collection.ADMINS, AdminSchemaMongo);

  const admin = new model(data);

  const salt = bcrypt.genSaltSync(10);
  admin.password = bcrypt.hashSync(data.password, salt);

  await admin.save();

  return admin;
};
