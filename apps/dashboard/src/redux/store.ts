import { State } from '@/types/models/State';
import { Store } from '@partiaf/entities';
import { configureStore } from '@reduxjs/toolkit';
import { StoresSlice   } from './states';
import AuthSlice from './auth/users/slice';

export interface AppStore {
  auth: any;
  stores: State<Store>
}

export default configureStore<AppStore>({
  reducer: {
    stores: StoresSlice,
    auth: AuthSlice,
  },
});
