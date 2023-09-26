import { Collection, getModel } from "@partiaf/constant-definitions";
import { FriendRequest, FriendRequestSchemaMongo } from "@partiaf/entities";

export const isFriend = async (
  uuid: string,
  reciverId: string
): Promise<Boolean | Error> => {
  const model = getModel<FriendRequest>(Collection.FRIEND_REQUEST, FriendRequestSchemaMongo);
  const follow = await model
    .find({ senderId: uuid })
    .where("receiverId")
    .equals(reciverId);
  if (follow.length > 0) return true;
  return false;
};