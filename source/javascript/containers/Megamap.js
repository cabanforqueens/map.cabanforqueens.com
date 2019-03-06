import React from 'react';
import { connect } from 'react-redux';
import i18n from '../hoc/i18n';

import ListArea from '../components/ListArea';
import MapArea from '../components/MapArea';
import Page from '../components/Page';

import MapContainer from './MapContainer';
import ListContainer from './ListContainer';
import SearchContainer from './SearchContainer';

class Megamap extends React.Component {
    constructor(props) {
        super(props);
    }

    //<SearchContainer />
    render() {
        return (
            <Page>
                <ListArea>
                    
                    <ListContainer />
                </ListArea>
                <MapArea>
                    <MapContainer />
                </MapArea>
            </Page>
        )
    }
}

export default i18n(Megamap);