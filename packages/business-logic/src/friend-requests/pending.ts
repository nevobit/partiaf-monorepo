import { Collection, getModel } from "@partiaf/constant-definitions";
import { FollowSchemaMongo, FriendRequest, FriendRequestSchemaMongo, User } from "@partiaf/entities";

export const getPendingFriendRequests = async (
  uuid: string
): Promise<any | Error> => {
  const model = getModel<FriendRequest>(Collection.FRIEND_REQUEST, FriendRequestSchemaMongo);
  const pendingRequests = await model.find({ receiverId: uuid, status_request: 'pending' }).populate('senderId');
  return pendingRequests;
};