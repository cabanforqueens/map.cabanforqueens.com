import React from 'react';
import './ListItem.css';
import EventBundled from './EventBundled';
import EventSingle from  './EventSingle';
export default (
    { data } ) => (
    <li className='event-list-item'>
        {
            data.length === 1
                ? <EventSingle data={data[0]} />
                : <EventBundled data={data} />
        }
    </li>
);
