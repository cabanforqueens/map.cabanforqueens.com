import React from 'react';
import './ListItem.css';
import EventBundled from './EventBundled';
import EventSingle from  './EventSingle';
export default (
    { data } ) => (
    <li className='event-list-item'>
        <EventSingle data={data} />
    </li>
);
