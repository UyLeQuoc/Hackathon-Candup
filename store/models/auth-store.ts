import { createModel } from "@rematch/core";
// import AxiosClient from 'services/apis/api-client';
import { localStorageUtil } from "../../utils/local-storage-util";
import { RootModel } from ".";
// import { IAccount } from "interfaces";
// import { apiUrls } from "services/end-points";

interface IAuthState {
  token: string;
  account: any | null;
}

const initialState: IAuthState = {
  token: '',
  account: null,
};

export const authStore = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setTokenAndAccountInfo(state: IAuthState, payload: IAuthState){
      return {
        ...state,
        token: payload.token,
        account: payload.account
      }
    },
    logOut: (state: IAuthState) => {
      return {
        ...state,
        token: '',
        account: null
      }
    }
  },
  effects: (_dispatch) => ({
    async loginAuth(_payload, _rootState) {
      // const result = await AxiosClient.post(apiUrls.AUTHENTICATION, _payload);
      // if (!_.isEmpty(result) && !_.isEmpty(result.data)) {
      //   _dispatch.authStore.setTokenAndAccountInfo(result.data);
      //   localStorageUtil.setToken(result.data.token);
      // }
    },

    async logOutAuth(_payload, _rootState) {
      _dispatch.authStore.logOut();
      localStorageUtil.clearToken();
    }
  }),
});