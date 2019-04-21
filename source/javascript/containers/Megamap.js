import React from 'react';

import { Router, Route, Link } from "react-router-dom";

import { connect } from 'react-redux';
import i18n from '../hoc/i18n';

import ListArea from '../components/ListArea';
import MapArea from '../components/MapArea';
import {Page, Viewport} from '../components/Page';
import Navigation from '../components/Navigation';
import MapContainer from './MapContainer';
import ListContainer from './ListContainer';
import SearchContainer from './SearchContainer';

import EventCreationButton from '../components/EventCreationButton'
import history from '../history';

class Megamap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isMobileNavVisible: false
        }
      }
    
    handleNavClose() {
        // document.getElementsByTagName("html")[0].style.overflow = 'auto';
        // document.getElementsByTagName("body")[0].style.overflow = 'auto';
        this.setState({ isMobileNavVisible: false });
    }
    
    handleNavOpen() {
        // document.getElementsByTagName("html")[0].style.overflow = 'hidden';
        // document.getElementsByTagName("body")[0].style.overflow = 'hidden';
        this.setState({ isMobileNavVisible: true });
    }

    //
    // <EventCreationButton />
    render() {
        return (
            <Router history={history}>
                <Route exact path="/" render={props => (
                        
                    <Page>
                        <Navigation 
                            handleNavOpen={this.handleNavOpen.bind(this)}
                            handleNavClose={this.handleNavClose.bind(this)}
                            isMobileNavVisible={this.state.isMobileNavVisible}/>
                        <Viewport>
                            <ListArea>
                                <SearchContainer history={history} />
                                <ListContainer />
                            </ListArea>
                            <MapArea>
                                <MapContainer history={history}  />
                            </MapArea>
                        </Viewport>
                    </Page>
                )} />
            </Router>
        )
    }
}

export default i18n(Megamap);
