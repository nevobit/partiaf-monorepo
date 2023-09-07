import { Collection, getModel } from "@partiaf/constant-definitions"
import { Goer, GoerSchemaMongo } from "@partiaf/entities"

export const getGoersByUser = async (id:string): Promise<any> => {
    const model = getModel<Goer>(Collection.GOERS, GoerSchemaMongo)
    const goers = await model.find({user: id}).sort({createdAt: -1});
    return goers;
}