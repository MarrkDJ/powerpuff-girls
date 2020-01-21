import React from 'react';
import './App.scss';
import ShowPage from "./components/show-page/ShowPage";
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import EpisodeDetailPage from "./components/episode-detail-page/EpisodeDetailPage";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Route path='/show' exact component={ShowPage}/>
                <Route path='/episode-details/:season/:number' exact component={EpisodeDetailPage}/>
                <Redirect to='/show'/>
            </Router>
        </div>
    );
};

export default App;
