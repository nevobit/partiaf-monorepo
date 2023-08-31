import { Collection, getModel } from "@partiaf/constant-definitions";
import { Admin, AdminSchemaMongo } from "@partiaf/entities";

export const getAdminById = async (uuid: string): Promise<Admin> => {
 const model = getModel<Admin>(Collection.ADMINS, AdminSchemaMongo)
 
 const admin = await model.findById(uuid).select("-password") as Admin;
 return admin;
}