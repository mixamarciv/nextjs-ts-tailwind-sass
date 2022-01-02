import { createSlice } from '@reduxjs/toolkit';
import { setCookie, deleteCookie, getCookie } from '../utils';

export interface IUserState {
    id: string;
    name: string;
    isAdmin: boolean;
    authKey: string;
    authReq: number;
}

// временное решение для хранения данных об авторизации
class MyStorage {
    protected _source: any;
    constructor() {
        if (typeof window !== 'undefined') {
            this._source = window.localStorage;
        } else {
            this._source = null;
        }
    }

    getItem(key: string): string {
        if (!this._source) return null;
        return this._source.getItem(key);
    }

    setItem(key: string, value: any): void {
        if (!this._source) return null;
        return this._source.setItem(key, value);
    }

    removeItem(key: string): void {
        if (!this._source) return null;
        return this._source.removeItem(key);
    }
}

const storage = new MyStorage();

const initialState: IUserState = {
    id: null,
    name: 'anonim',
    isAdmin: false,
    authKey: null,
    authReq: 0,
};

const getUserFromStorage = (): IUserState => {
    const user: IUserState = {
        id: storage.getItem('userId'),
        name: storage.getItem('userName'),
        isAdmin: !!storage.getItem('userIsAdmin'),
        authKey: storage.getItem('authKey'),
        authReq: parseInt(storage.getItem('authReq')),
    };

    if (!user.id) return initialState;
    return user;
};

const setStateValues = (state: IUserState, payload: IUserState): void => {
    state.id = payload.id;
    if (payload.id) {
        state.name = payload.name;
        state.name = payload.name;
        state.isAdmin = payload.isAdmin;
        state.authReq = payload.authReq;
        storage.setItem('userId', payload.id);
        storage.setItem('userName', payload.name);
        storage.setItem('userIsAdmin', payload.isAdmin ? 1 : 0);
        storage.setItem('authKey', payload.authKey);
        storage.setItem('authReq', String(payload.authReq));

        setCookie('userId', payload.id);
    } else {
        state.name = null;
        state.authKey = null;
        state.authReq = null;
        state.isAdmin = false;
        storage.removeItem('userId');
        storage.removeItem('userName');
        storage.removeItem('userIsAdmin');
        storage.removeItem('authKey');
        storage.removeItem('authReq');

        deleteCookie('userId');
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState: { ...initialState },
    reducers: {
        userLogin: (state, action) => {
            setStateValues(state, action.payload);
        },
        userLogout: (state) => {
            setStateValues(state, initialState);
        },
    },
});

const { userLogin, userLogout } = userSlice.actions;

const userLoadFromStorage = () => {
    return (dispatch) => {
        const user: IUserState = getUserFromStorage();
        dispatch(userLogin(user));
    };
};

export const selectUser = (state): IUserState => state.user;
export const userReducer = userSlice.reducer;
export { userLogin, userLogout, userLoadFromStorage };
