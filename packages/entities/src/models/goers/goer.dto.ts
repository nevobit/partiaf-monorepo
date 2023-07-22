import { Goer } from "./schemas/goer";

export type CreateGoerDto = Omit<Goer, '_id'>;
export type UpdateGoerDto = Partial<Goer>;
