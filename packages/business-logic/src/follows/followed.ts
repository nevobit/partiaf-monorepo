import { Collection, getModel } from "@partiaf/constant-definitions";
import { FollowSchemaMongo, User } from "@partiaf/entities";

export const getFolloweds = async (
  uuid: string
): Promise<any[] | Error> => {
  const model = getModel(Collection.FOLLOWS, FollowSchemaMongo);
  const followeds = (await model.find({ follow: uuid }).populate('user'));
  return followeds;
};