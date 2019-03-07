import React from 'react';
import Icon from 'react-fontawesome';
import Moment from 'react-moment';

import './MapPopupItem.css';

export default ({ popup, handleClosePopup }) => (
  <div className='popup-item'>
    <a href="javascript: void(null)" className={'popup-close'} onClick={handleClosePopup}>
      <Icon name='close' style={{color: 'black'}} />
    </a>
    <div className='header-area'>
      <h1>
        <a href={popup.url} target='_blank'>{popup.title}</a>
      </h1>
      <h3 className='event-type'><span>{popup.event_type}</span></h3>
    </div>
    <div className='content-area'>
      {popup.sponsor && <div className='sponsor-area'>
        <sub>Hosted<br/>by</sub>
        <h3><img src={popup.logo}></img> <span>{popup.sponsor}</span></h3>
      </div>}

      <p className='time'>
        <Moment format="DD MMM YYYY @ hh:mma" add={{ hours: 5 }}>{ popup.start_datetime }</Moment>
      </p>
      <p className='address'>{ popup.venue }</p>

      <a href={ popup.url } target='_blank' className='rsvp'>RSVP</a>
    </div>
  </div>
)
