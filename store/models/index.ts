import { Models } from '@rematch/core';
import { count } from './count';
import { authStore } from './auth-store';
import { user } from './user';
export interface RootModel extends Models<RootModel> {
    count: typeof count;
    authStore: typeof authStore;
    user: typeof user;

}
export const models: RootModel = {
    count,
    authStore,
    user,
};
