import { Collection, getModel } from "@partiaf/constant-definitions";
import { User, UsersSchemaMongo } from "@partiaf/entities";

export const updateUser = async (data: any) => {
  const model = getModel<User>(Collection.USERS, UsersSchemaMongo);
  const user = await model.findById(data.id);
  if (!user) throw new Error(`user don't exist`);
  const updatedUser = await model.findByIdAndUpdate(data.id, data, {
    new: true,
  });
  if (!updatedUser) throw new Error(`Ticket not found`);
  return updatedUser;
};
