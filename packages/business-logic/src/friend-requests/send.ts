import { Collection, getModel } from "@partiaf/constant-definitions";
import { FriendRequestSchemaMongo } from "@partiaf/entities";

export const sendRequest = async (
  uuid: string,
  follow: string
): Promise<Boolean | Error> => {
  const model = getModel(Collection.FRIEND_REQUEST, FriendRequestSchemaMongo);

  const result = new model({
    senderId: uuid,
    receiverId: follow,
    status_request: 'pending'
  });

  if (!result) throw new Error("No se puede agregar como amigo");
  await result.save();
  return true;
};