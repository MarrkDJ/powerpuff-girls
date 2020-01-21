import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getShowContent, getShowEpisodes, setSelectedEpisode } from "../../store/actions";
import { IAppReducerState } from "../../store/reducer";
import { IShowEpisode } from "../../models/showContent";
import "./ShowPage.scss";

const ShowPage = (props: any) => {

    // get data from the redux store
    const { showContent, showEpisodes, error } = useSelector((state: IAppReducerState) => {
            return {
                showContent: state.showContent,
                showEpisodes: state.showEpisodes,
                error: state.error,
            };
        }
    );
    // link the redux dispatcher
    const dispatch = useDispatch();

    // fire functions to get data
    useEffect(() => {
        dispatch(getShowContent());
        dispatch(getShowEpisodes());
    }, [ dispatch ]);

    const handleNavigateToDetailPage = (episode: IShowEpisode) => {
        dispatch(setSelectedEpisode(episode));
        props.history.push(`/episode-details/${episode.season}/${episode.number}`);
    };

    // needed because summary is formatted as html
    const getSummary = () => ({ __html: showContent.summary });

    return (
        Object.keys(showContent).length ?
            <div className="show-page">
                <div className="show-page__show-info">
                    <h1>{showContent.name}</h1>
                    <p dangerouslySetInnerHTML={getSummary()}/>
                </div>
                <div className="show-page__image-container">
                    <img
                        className="show-page__image-container__image"
                        src={showContent.image.medium}
                        alt={showContent.name}
                    />
                </div>
                <div>
                    <h2>List of Episodes</h2>
                    {Object.keys(showEpisodes).length ?
                        <ul className="episode-list">
                            {showEpisodes.map((episode: IShowEpisode) => (
                                <li
                                    className="episode-list__item"
                                    key={episode.id}
                                    onClick={() => handleNavigateToDetailPage(episode)}
                                >{episode.season}/{episode.number} - {episode.name}</li>
                            ))}
                        </ul> :

                        error ? <div>Er is iets mis gegaan</div> : <div>Loading data...</div>
                    }
                </div>
            </div> :

            error ? <div>Er is iets mis gegaan</div> : <div>Loading data...</div>
    );
};

export default ShowPage;
