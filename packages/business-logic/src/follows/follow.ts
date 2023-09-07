import { Collection, getModel } from "@partiaf/constant-definitions";
import { FollowSchemaMongo } from "@partiaf/entities";

export const createFollow = async (
  uuid: string,
  follow: string
): Promise<Boolean | Error> => {
  const model = getModel(Collection.FOLLOWS, FollowSchemaMongo);

  const result = new model({
    user: uuid,
    follow: follow,
  });
  if (!result) throw new Error("No se puede seguir");
  await result.save();
  return true;
};