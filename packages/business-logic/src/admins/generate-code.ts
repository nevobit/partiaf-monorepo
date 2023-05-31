import { Collection, getModel } from '@partiaf/constant-definitions';
import { Admin, AdminSchemaMongo, UpdateAdminDto } from '@partiaf/entities';
import { sendEmail } from '../helpers';

export const generateCode = async (data: UpdateAdminDto) => {
  const model = getModel<Admin>(Collection.ADMINS, AdminSchemaMongo);

  const admin = await model.findOne(data);

  if (admin) {
    const code = await sendEmail(data, 'resetPassword', true);

    admin.code = Number(code);
    await admin.save();
  } else {
    throw new Error('Usuario no encontrado');
  }
  return admin;
};
