import { createSlice } from '@reduxjs/toolkit';
import { dateToStr } from '../utils';

export interface IPageLoadInfo {
    totalCount: number;
    searchCount: number;
    postOpenCount: number;
    lastLoadMs: number;
    totalLoadMs: number;
    loadPage: string;
    lastUpdate: string;
}

const initialState: IPageLoadInfo = {
    totalCount: 0,
    searchCount: 0,
    postOpenCount: 0,
    lastLoadMs: 0,
    totalLoadMs: 0,
    loadPage: '',
    lastUpdate: '',
};

const pageLoadInfoSlice = createSlice({
    name: 'pageLoadInfo',
    initialState,
    reducers: {
        incrementTotalCount: (state) => {
            state.loadPage = dateToStr(new Date());
            state.totalCount += 1;
            state.lastUpdate = dateToStr(new Date());
        },
        incrementSearchCount: (state) => {
            state.searchCount += 1;
            state.lastUpdate = dateToStr(new Date());
        },
        incrementPostOpenCount: (state) => {
            state.postOpenCount += 1;
            state.lastUpdate = dateToStr(new Date());
        },
        incrementTotalLoadMs: (state, action) => {
            state.lastLoadMs = action.payload;
            state.totalLoadMs += action.payload;
            state.lastUpdate = dateToStr(new Date());
        },
    },
});

const {
    incrementTotalLoadMs,
    incrementSearchCount,
    incrementPostOpenCount,
    incrementTotalCount,
} = pageLoadInfoSlice.actions;

const incrementTotalLoadMsAsync = (promise) => {
    return (dispatch) => {
        const startTime = new Date().getTime();
        promise.finally(() => {
            const endTime = new Date().getTime();
            const waitTime = endTime - startTime;
            dispatch(incrementTotalLoadMs(waitTime));
        });
    };
};

export const selectPageLoadInfo = (state): IPageLoadInfo => state.pageLoadInfo;
export const pageLoadInfoReducer = pageLoadInfoSlice.reducer;
export {
    pageLoadInfoSlice,
    incrementTotalCount,
    incrementTotalLoadMs,
    incrementTotalLoadMsAsync,
    incrementSearchCount,
    incrementPostOpenCount,
};
