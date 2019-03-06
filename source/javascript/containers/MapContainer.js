import React from 'react';
import MapView from '../components/MapView';
import MapPopupItem from '../components/MapPopupItem';

import { connect } from 'react-redux';

class MapContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        clickedItem: null
      }
    }

    handleFeatureClick(item) {
      console.log("handleFeatureClick", item);
      this.setState({clickedItem: item});
    }

    handleClosePopup() {
      this.setState({clickedItem: null});
    }

    render() {
        return (<MapView
          eventsData={this.props.eventsData}
          handleFeatureClick={this.handleFeatureClick.bind(this)}
          clickedItem={this.state.clickedItem}
        />);
    }
}

const mapStateToProps = ({ events }) => ({
  eventsData: events.eventsData
})
export default connect(mapStateToProps)(MapContainer);
