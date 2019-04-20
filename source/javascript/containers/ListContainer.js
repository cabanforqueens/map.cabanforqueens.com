import React from 'react';
import ListView from '../components/ListView';
import { connect } from 'react-redux';

const inBounds = (ne, sw, lnglat) =>{
    const lng = (lnglat.lng - ne.lng) * (lnglat.lng - sw.lng) < 0;
    const lat = (lnglat.lat - ne.lat) * (lnglat.lat - sw.lat) < 0;
    return lng && lat;
  }

class ListContainer extends React.Component {
    render() {
        return (
        <ListView
            eventsData={this.props.eventsData.sort((a, b) => new Date(a.start_datetime) - new Date(b.start_datetime))}
        />
        );
    }
}

const mapStateToProps = ({ events, search }) => {
    return {
        eventsData: events.eventsData.filter(item => {
            const show = search.activeFilters.includes(item.event_type)

            if (!search.bounds) {
                return show;
            }
    
            return show && inBounds(
                    search.bounds.northeast,
                    search.bounds.southwest,
                    {lng: item.lng, lat: item.lat});

        }),
    };
}

export default connect(mapStateToProps)(ListContainer);
