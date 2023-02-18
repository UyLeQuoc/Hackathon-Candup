import { Models } from '@rematch/core';
import { count } from './count';
import { authStore } from './auth-store';
export interface RootModel extends Models<RootModel> {
    count: typeof count;
    authStore: typeof authStore;
}
export const models: RootModel = {
    count,
    authStore,
};
