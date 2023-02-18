import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import persistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';
import { models, RootModel } from './models';

const persistPluginConfig = {
    version: 2,
    key: 'root',
    storage,
};

export const store = init<RootModel>({
    models,
    plugins: [persistPlugin(persistPluginConfig)],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

export var dispatch: Dispatch;
export var state: RootState;
