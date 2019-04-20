import React from 'react';

import { Router, Route, Link } from "react-router-dom";

import { connect } from 'react-redux';
import i18n from '../hoc/i18n';

import ListArea from '../components/ListArea';
import MapArea from '../components/MapArea';
import Page from '../components/Page';

import MapContainer from './MapContainer';
import ListContainer from './ListContainer';
import SearchContainer from './SearchContainer';

import EventCreationButton from '../components/EventCreationButton'
import history from '../history';

class Megamap extends React.Component {
    constructor(props) {
        super(props);
    }

    //
    // <EventCreationButton />
    render() {
        return (
            <Router history={history}>
                <Route exact path="/" render={props => (
                    <Page>
                        <ListArea>
                            <SearchContainer history={history} />
                            <ListContainer />
                        </ListArea>
                        <MapArea>
                            <MapContainer history={history}  />
                        </MapArea>
                    </Page>
                )} />
            </Router>
        )
    }
}

export default i18n(Megamap);
