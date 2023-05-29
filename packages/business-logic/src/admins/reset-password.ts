import { Collection, getModel } from '@partiaf/constant-definitions';
import { Admin, AdminSchemaMongo, UpdateAdminDto } from '@partiaf/entities';
import { sendEmail } from '../helpers/emails/send-email';

export const resetPassword = async (data: UpdateAdminDto) => {
  const model = await getModel<Admin>(Collection.ADMINS, AdminSchemaMongo);

  const admin = await model.findOne(data);

  if (admin) {
    // admin.code = sendEmail({ data, 'changePassword', true });

    await admin.save();
  } else {
    throw new Error('Usuario no encontrado');
  }
  return admin;
};
