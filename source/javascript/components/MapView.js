import React from 'react';
import MapPopupItem from './MapPopupItem';
import EventCreationButton from './EventCreationButton';
const ReactMapboxGl = require("react-mapbox-gl");
import './MapView.css';

const {Layer, Feature, Popup, ZoomControl}  = ReactMapboxGl;

console.log(ReactMapboxGl);

const Map = ReactMapboxGl.Map({
  accessToken:
    "pk.eyJ1IjoicmNzY2FzdGlsbG8iLCJhIjoiY2pseDZ2bmp0MDcwYzNwcGp1bjBqNHo4aSJ9.3bD8gQrMAIEqV6yyS-__vg"
});

class MapView extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }

    handleStyleLoad(map) {
       this.map = map;
       map.setCenter({ lng: -73.834, lat: 40.676 });
       map.setZoom(10);
    }

    renderPopup () {
      const popup = this.props.clickedItem;
      return (
        <Popup coordinates={[popup.lng, popup.lat]}>
          <MapPopupItem
            popup={popup}
            handleClosePopup={this.props.handleClosePopup}
          />
        </Popup>
      )
    }

    render() {
      console.log("this.props.clickedItem", this.props.clickedItem);
        return (<div className='map-area'>
          <Map
            ref={e => {
              this.map = e
            }}
            onStyleLoad={this.handleStyleLoad.bind(this)}
            style="mapbox://styles/rcscastillo/cjskbazaf34171gnxi5qfdeli"
            className='map-view-container'
            containerStyle={{
              height: "100%",
              width: "100%"
            }}>
              <ZoomControl position='top-left'/>
              <Layer
                  type="circle"
                  id="volunteerData"
                  paint={{
                    "circle-radius": 5,
                    "circle-color": "#440099",
                    "circle-stroke-width": 2,
                    "circle-stroke-color": "#ffb900"
                  }}>
                {
                  this.props.volunteerData.map((data, ind) => (
                      <Feature key={ind}
                        coordinates={[data.lng, data.lat]}
                        onClick={(e)=>{ this.props.handleFeatureClick(data); }}/>
                  ))
                }
              </Layer>

              <Layer
                  type="circle"
                  id="meetData"
                  paint={{
                    "circle-radius": 5,
                    "circle-color": "#c4b4dd",
                    "circle-stroke-width": 2,
                    "circle-stroke-color": "#440099"
                  }}>
                {
                  this.props.meetData.map((data, ind) => (
                      <Feature key={ind}
                        coordinates={[data.lng, data.lat]}
                        onClick={(e)=>{ this.props.handleFeatureClick(data); }}/>
                  ))
                }
              </Layer>

            { this.props.clickedItem &&
              this.renderPopup()
            }
          </Map>
        </div>);
    }
}

export default MapView;
