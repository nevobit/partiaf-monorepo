import { Goer, GoerSchemaMongo } from "@partiaf/entities";
import { Collection, getModel } from "@partiaf/constant-definitions";

export const updateGoer = async (data: any): Promise<any | Error> => {
    const model = getModel<Goer>(Collection.GOERS, GoerSchemaMongo);
    
    const goer = await model.findById(data.id)
    if(!goer) return new Error(`No goer found`);
    
    goer.entry_status = data.entry_status;
    await goer.save();
    return goer;
}