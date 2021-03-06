import React from 'react';
import Moment from 'react-moment';

import ClockIcon from '../assets/images/clock.png';
import MarkerIcon from '../assets/images/marker.png';
import './EventSingle.css';

export default ({ bundled = false, data :
    {title, url, venue, event_type, description, location,
    start_datetime, supergroup, campaign_title, name, website, group, group_url}
}) => (
    <div className={`${bundled && 'event-bundled-item'} event-list-item-container`}>

        <div className='event-list-item-date'>
            <div className='event-list-date-view'>
                <Moment className='event-list-day-data' format="ddd" add={{ hours: 4 }}>{ start_datetime }</Moment>
                <Moment className='event-list-date-data' format="DD" add={{ hours: 4 }}>{ start_datetime }</Moment>
                <Moment className='event-list-month-data' format="MMM" add={{ hours: 4 }}>{ start_datetime }</Moment>
            </div>

        </div>
        <div className='event-list-item-info'>
            <h2 className='event-list-item-title'>
                <a href={url || website} target='_blank'>{name || title}</a>
            </h2>
            <div className='event-list-item-desc event-list-item-event-type'>
                {event_type}
            </div>
            <div className='event-list-item-desc'>
                <img src={ClockIcon} className='event-list-icon' /> <Moment className='event-list-time-data' format="h:mm a" add={{ hours: 4 }}>{ start_datetime }</Moment>
            </div>
            {!bundled && <div className='event-list-item-desc'>
                <img src={MarkerIcon} className='event-list-icon' />  <span>{location || venue}</span> 
            </div>}

           
        </div>
    </div>
)