import { Collection, getModel } from "@partiaf/constant-definitions";
// import { Goer, GoerSchemaMongo } from "@partiaf/entities";

export const getGoersById = async (uuid:string): Promise<any> => {
    // const model = await getModel(Collection.GOERS, GoerSchemaMongo)
    // const goers = await model.find({cover: uuid}).populate('user') as Goer[];

    return true;
}