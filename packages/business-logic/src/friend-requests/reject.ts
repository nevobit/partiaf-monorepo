import { Collection, getModel } from "@partiaf/constant-definitions";
import { FollowSchemaMongo, FriendRequest, FriendRequestSchemaMongo, User } from "@partiaf/entities";

export const rejectFriendRequest = async (
  receiverId: string
): Promise<any | Error> => {
  const model = getModel<FriendRequest>(Collection.FRIEND_REQUEST, FriendRequestSchemaMongo);
  const request = await model.findOne({ receiverId })
  
  if(!request)
    throw new Error(`Couldn not find Request`)

    await model.findByIdAndUpdate(request.id, { status_request: 'rejected' });
  return true;

};