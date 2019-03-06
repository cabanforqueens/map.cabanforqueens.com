import React from 'react';
import ListView from '../components/ListView';
import { connect } from 'react-redux';

class ListContainer extends React.Component {
    render() {
        return (
        <ListView
            eventsData={this.props.eventsData.sort((a, b) => new Date(a.start_datetime) - new Date(b.start_datetime))}
        />
        );
    }
}

const mapStateToProps = ({ events }) => {
    return {
        eventsData: events.eventsData,
    };
}

export default connect(mapStateToProps)(ListContainer);
