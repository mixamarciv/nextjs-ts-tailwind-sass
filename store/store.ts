import { configureStore } from '@reduxjs/toolkit';

import { pageLoadInfoReducer } from './pageLoadInfo';
import { userReducer } from './user';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
