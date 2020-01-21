import React from 'react';
import { useSelector } from "react-redux";
import { IAppReducerState } from "../../store/reducer";
import "./EpisodeDetailPage.scss";

const EpisodeDetailPage = (props: any) => {

    // get data from store
    const { selectedEpisode, error } = useSelector((state: IAppReducerState) => state);

    const handleNavigateBack = () => {
        props.history.goBack();
    };

    // needed because summary is formatted as html
    const getSummary = () => ({
        __html: selectedEpisode.summary
    });

    return (
        Object.keys(selectedEpisode).length ?
            <div>
                <div className="back-link">
                    <span onClick={handleNavigateBack}>Back</span>
                </div>

                <div className="episode-detail-page">
                    <div className="episode-detail-page__episode-info">
                        <h1>{selectedEpisode.name}</h1>
                        <p dangerouslySetInnerHTML={getSummary()}/>
                    </div>
                    <div className="episode-detail-page__image-container">
                        <img
                            className="episode-detail-page__image-container__image"
                            src={selectedEpisode.image.medium}
                            alt={selectedEpisode.name}
                        />
                    </div>
                </div>

            </div> :

            error ? <div>Er is iets mis gegaan</div> : <div>Loading data...</div>
    );
};

export default EpisodeDetailPage;
