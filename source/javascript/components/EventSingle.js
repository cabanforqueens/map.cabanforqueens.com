import React from 'react';
import Moment from 'react-moment';

import ClockIcon from '../assets/images/clock.png';
import MarkerIcon from '../assets/images/marker.png';
import './EventSingle.css';

export default ({ data :
    {title, url, venue, event_type, description, location,
    start_datetime, supergroup, campaign_title, name, website, group, group_url}
}) => (
    <div className='event-list-item-container'>

        <div className='event-list-item-date'>
            <div className='event-list-date-view'>
            <Moment className='event-list-day-data' format="ddd" add={{ hours: 4 }}>{ start_datetime }</Moment>
                <Moment className='event-list-date-data' format="DD" add={{ hours: 4 }}>{ start_datetime }</Moment>
                <Moment className='event-list-month-data' format="MMM" add={{ hours: 4 }}>{ start_datetime }</Moment>
            </div>
            
        </div>
        <div className='event-list-item-info'>
            <div className='event-list-item-type'>
                <span>{event_type == "groups" ?
                    supergroup : (campaign_title || event_type)}
                </span>
            </div>
            <h2 className='event-list-item-title'>
                <a href={url || website} target='_blank'>{name || title}</a>
            </h2>

            <div className='event-list-item-desc'>
                <img src={ClockIcon} className='event-list-icon' /> <Moment className='event-list-tim-data' format="h:mm a" add={{ hours: 4 }}>{ start_datetime }</Moment>
            </div>
            <div className='event-list-item-desc'>
                <img src={MarkerIcon} className='event-list-icon' />  <span>{location || venue}</span> 
            </div>

            <div className='event-list-item-cta'>
                <a target='_blank' className='event-list-item-cta-btn btn' href={url || website}>RSVP</a>
            </div>
        </div>
    </div>
)