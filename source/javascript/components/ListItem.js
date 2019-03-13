import React from 'react';
import Moment from 'react-moment';
import './ListItem.css';

export default (
    { data: {
        title, url, venue, event_type, description, location,
        start_datetime, supergroup, campaign_title, name, website, group, group_url }
    }) => (
    <li className='event-list-item'>
        <div className='event-list-item-container'>
            <div className='event-list-item-type'>
                <span>{event_type == "groups" ?
                    supergroup : (campaign_title || event_type)}
                </span>
            </div>
            <h2 className='event-list-item-title'>
                <a href={url || website} target='_blank'>{name || title}</a>
            </h2>

            {start_datetime  &&
                <div className='event-list-item-date'>
                    <Moment format="DD MMM YYYY @ hh:mma" add={{ hours: 4 }}>{ start_datetime }</Moment>
                </div>
            }

            <div className='event-list-item-location'>
                {location || venue}
            </div>

            <div className='event-list-item-description'>
                {description || ""}
            </div>

            <div className='event-list-item-cta'>
                <a target='_blank' className='event-list-item-cta-btn btn' href={url || website}>RSVP</a>
            </div>
        </div>
    </li>
);
