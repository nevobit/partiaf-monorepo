import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  store: null,
  storeInfo: {
    name: '',
    id: '',
  },
  isLoading: true,
  isSignout: false,
};

export const UserKey = 'store';

const loginStore = async (action: any) => {
  await AsyncStorage.setItem(UserKey, JSON.stringify(action));
};

let state: any = {};

export const isSignedIn = () => {
  AsyncStorage.getItem(UserKey)
    .then(res => {
      if (res !== null) {
        console.log({res});
        state = res;
      } else {
        state = initialState;
        console.log(false);
      }
    })
    .catch(err => console.log(err));
};

state = state || initialState;

const authStoreSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    restoreToken: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    signinStore: (state, action) => {
      state.isSignout = false;
      state.store = action.payload;
      loginStore(action.payload);
    },
    signoutStore: state => {
      state.isSignout = true;
      state.store = null;
    },
  },
});

export const {restoreToken, signinStore, signoutStore} = authStoreSlice.actions;
export default authStoreSlice.reducer;
