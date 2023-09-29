import { Collection, getModel } from "@partiaf/constant-definitions";
import { FriendRequest, FriendRequestSchemaMongo } from "@partiaf/entities";

export const isFriend = async (
  uuid: string,
  reciverId: string
): Promise<Boolean | Error> => {
  const model = getModel<FriendRequest>(Collection.FRIEND_REQUEST, FriendRequestSchemaMongo);
    const myFriend = await model
    .find({ senderId: uuid, receiverId: reciverId, status_request: 'accepted' })
    .populate('receiverId');

  const yourFriend = await model
    .find({ senderId: reciverId, receiverId: uuid, status_request: 'accepted' });
  if (myFriend.length > 0 || yourFriend.length > 0) return true;
  return false;
};