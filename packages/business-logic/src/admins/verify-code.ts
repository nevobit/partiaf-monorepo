import { Collection, getModel } from '@partiaf/constant-definitions';
import { Admin, AdminSchemaMongo, UpdateAdminDto } from '@partiaf/entities';

interface Props extends UpdateAdminDto {
  code: number;
}

export const verifyCode = async ({ email, code }: Props) => {
  const model = getModel<Admin>(Collection.ADMINS, AdminSchemaMongo);

  const admin = await model.findOne({ email });

  if (admin) {
    if (admin.code === code) {
      return { response: true };
    } else {
      throw new Error('Código inválido.');
    }
  } else {
    throw new Error('Usuario no encontrado.');
  }
};
