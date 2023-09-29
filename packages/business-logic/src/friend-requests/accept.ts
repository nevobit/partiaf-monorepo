import { Collection, getModel } from "@partiaf/constant-definitions";
import { FollowSchemaMongo, FriendRequest, FriendRequestSchemaMongo, User } from "@partiaf/entities";

export const acceptFriendRequest = async (
  requestId: string
): Promise<any | Error> => {
  const model = getModel<FriendRequest>(Collection.FRIEND_REQUEST, FriendRequestSchemaMongo);
  await model.findByIdAndUpdate(requestId, { status_request: 'accepted' });
  return true;
};