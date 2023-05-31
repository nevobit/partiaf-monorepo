import { UpdateAdminDto, Admin, AdminSchemaMongo } from '@partiaf/entities';
import { Collection, getModel } from '@partiaf/constant-definitions';
import bcrypt from 'bcrypt';

export const updateAdmin = async (
  data: Partial<UpdateAdminDto>
): Promise<UpdateAdminDto | Error> => {
  const model = getModel<Admin>(Collection.ADMINS, AdminSchemaMongo);

  if (data.id) {
    const admin = await model.findByIdAndUpdate(data.id, data, {
      new: true,
    });

    if (!admin) throw new Error('Usuario no encontrado.');

    await admin.save();
    return admin;
  } else if (data.email) {
    const admin = await model.findOne({ email: data.email });

    if (admin) {
      const salt = bcrypt.genSaltSync(10);
      admin.password = bcrypt.hashSync(data.password!, salt);
      await admin.save();
      return admin;
    }

    throw new Error('Usuario no encontrado');
  }

  throw new Error('Datos inválidos.');
};
