import React from 'react';
import Icon from 'react-fontawesome';
import Moment from 'react-moment';

import './MapPopupItem.css';

export default ({ popup }) => (
  <div className='popup-item'>
    <Icon name='rocket' style={{color: 'black'}} size='2x' />
    <div className='header-area'>
      <h1>
        <a href={`poprup.ul`} target='_blank'>{popup.title}</a>
      </h1>
      <h3 className='event-type'><span>{popup.type}</span></h3>
    </div>
    <div className='content-area'>
      <div className='sponsor-area'>
        <sub>Hosted<br/>by</sub>
        <h3><img src={popup.logo}></img> <span>{popup.sponsor}</span></h3>
      </div>

      <p className='time'>
        <Moment format="DD MMM YYYY @ hh:mma">{ popup.date.toString() }</Moment>
      </p>
      <p className='address'>{ popup.address }</p>

      <a href={ popup.url } target='_blank' className='rsvp'>RSVP</a>
    </div>
  </div>
)
