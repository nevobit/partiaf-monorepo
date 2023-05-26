import { Admin } from './schemas/admin';

export type CreateAdminDto = Omit<Admin, '_id'>;
export type UpdateAdminDto = Partial<Admin>;
