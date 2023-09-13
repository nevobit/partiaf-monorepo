import { Collection, getModel } from "@partiaf/constant-definitions";
import { FollowSchemaMongo, User } from "@partiaf/entities";

export const getFollowers = async (
  uuid: string
): Promise<any[] | Error> => {
  const model = getModel(Collection.FOLLOWS, FollowSchemaMongo);
  const followers = (await model.find({ user: uuid }).populate('follow'));
  return followers;
};