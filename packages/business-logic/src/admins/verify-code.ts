import { Collection, getModel } from '@partiaf/constant-definitions';
import { Admin, AdminSchemaMongo, UpdateAdminDto } from '@partiaf/entities';

export const verifyCode = async (email: UpdateAdminDto, code: number) => {
  const model = getModel<Admin>(Collection.ADMINS, AdminSchemaMongo);

  const admin = await model.findOne(email);

  if (admin) {
    if (admin.code === code) {
      return true;
    } else {
      throw new Error('Código inválido.');
    }
  } else {
    throw new Error('Usuario no encontrado.');
  }
};
