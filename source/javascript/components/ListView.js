import React from 'react';
import ListItem from './ListItem';
import './ListView.css';


export default ({ eventsData }) => (
    <div className='event-list-container'>
        <ul className='event-list'>
            {eventsData.map((item) => (
                <ListItem data={item} key={item.url || item.website}/>
            ))}
        </ul>
    </div>
)