import { IShowContent, IShowEpisode } from "../models/showContent";
import actionTypes from "./actionTypes";


export const getShowContent = () => {
    return {
        type: actionTypes.GET_SHOW_CONTENT
    };
};

export const getShowEpisodes = () => {
    return {
        type: actionTypes.GET_SHOW_EPISODES
    };
};

export const setShowContent = (showContent: IShowContent) => {
    return {
        type: actionTypes.SET_SHOW_CONTENT,
        payload: showContent
    }
};

export const setShowEpisodes = (showEpisodes: IShowEpisode[]) => {
    return {
        type: actionTypes.SET_SHOW_EPISODES,
        payload: showEpisodes
    }
};

export const setError = (error: any) => {
    return {
        type: actionTypes.SET_ERROR,
        payload: error
    }
};

export const setSelectedEpisode = (selectedEpisode: any) => {
    return {
        type: actionTypes.SET_SELECTED_EPISODE,
        payload: selectedEpisode
    }
};
