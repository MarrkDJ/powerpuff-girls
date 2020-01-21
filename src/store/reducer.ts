import actionTypes from "./actionTypes";
import { IShowContent, IShowEpisode } from "../models/showContent";

export interface IAppReducerState {
    error: boolean;
    showContent: IShowContent;
    showEpisodes: IShowEpisode[];
    selectedEpisode: IShowEpisode;
}

const initialState = {
    error: false,
    showContent: {},
    showEpisodes: {},
    selectedEpisode: {}
} as IAppReducerState;

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SET_SHOW_CONTENT:
            return {
                ...state,
                showContent: action.payload,
                error: false
            };
        case actionTypes.SET_SHOW_EPISODES:
            return {
                ...state,
                showEpisodes: action.payload,
                error: false
            };
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: true
            };
        case actionTypes.SET_SELECTED_EPISODE:
            return {
                ...state,
                selectedEpisode: action.payload,
                error: false
            };
        default:
            return state;
    }
};

export default reducer;
