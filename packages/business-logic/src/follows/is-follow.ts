import { Collection, getModel } from "@partiaf/constant-definitions";
import { FollowSchemaMongo } from "@partiaf/entities";

export const isFollow = async (
  uuid: string,
  followId: string
): Promise<Boolean | Error> => {
  const model = getModel(Collection.FOLLOWS, FollowSchemaMongo);
  const follow = await model
    .find({ user: uuid })
    .where("follow")
    .equals(followId);
  if (follow.length > 0) return true;
  return false;
};