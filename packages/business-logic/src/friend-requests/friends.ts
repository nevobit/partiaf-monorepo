import { Collection, getModel } from "@partiaf/constant-definitions";
import { FriendRequest, FriendRequestSchemaMongo } from "@partiaf/entities";

export const getFriends = async (
  uuid: string
): Promise<any[] | Error> => {
  const model = getModel<FriendRequest>(Collection.FRIEND_REQUEST, FriendRequestSchemaMongo);

  try {
    const sentRequests = await model
      .find({ senderId: uuid, status_request: 'accepted' })
      .populate('receiverId');

    const receivedRequests = await model
      .find({ receiverId: uuid, status_request: 'accepted' })
      .populate('senderId');

    // Filtra y elimina elementos nulos de los arrays antes de concatenarlos
    const sentReceiverIds = sentRequests.map(req => req.receiverId).filter(id => id);
    const receivedSenderIds = receivedRequests.map(req => req.senderId).filter(id => id);

    const friends = [...sentReceiverIds, ...receivedSenderIds];

    return friends;
  } catch (error) {
    console.error("Error al obtener amigos:", error);
    throw error;
  }
};
