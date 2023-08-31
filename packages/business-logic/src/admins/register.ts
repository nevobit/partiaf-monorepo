import { Collection, getModel } from '@partiaf/constant-definitions';
import { Admin, AdminSchemaMongo, CreateAdminDto, UpdateAdminDto } from '@partiaf/entities';
import bcrypt from 'bcrypt';
import { sendEmail } from '../helpers';

export const registerAdmin = async (
  data: Partial<CreateAdminDto>
): Promise<Admin | Error> => {
  const model = getModel<Admin>(Collection.ADMINS, AdminSchemaMongo);

  const admin = new model(data);

  const salt = bcrypt.genSaltSync(10);
  admin.password = bcrypt.hashSync(data.password || "", salt);

  await admin.save();
  const email = admin.email;
  await sendEmail({ email }, 'verification', false);

  return admin;
};
