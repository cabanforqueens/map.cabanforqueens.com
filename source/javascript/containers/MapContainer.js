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
          volunteerData={this.props.volunteerData}
          meetData={this.props.meetData}
          handleFeatureClick={this.handleFeatureClick.bind(this)}
          clickedItem={this.state.clickedItem}
          handleClosePopup= {this.handleClosePopup.bind(this)}
        />);
    }
}

const mapStateToProps = ({ events }) => ({
  volunteerData: events.eventsData.filter(i => i.event_type == "Volunteer for Tiffany"),
  meetData: events.eventsData.filter(i => i.event_type == "Meet Tiffany")
})
export default connect(mapStateToProps)(MapContainer);
