import React from 'react';
import SearchSuggestion from './SearchSuggestion';
import './SearchView.css';
import MeetEventsIcon from '../assets/images/meet-events.png';
import VolunteerEventsIcon from '../assets/images/volunteer-events.png';
export default ({
  handleSearch,
  searchResults,
  selectResult,
  handleKeyPress,
  searchQuery
}) => (
    <div className='search-container'>
        <div className='search-viewport'>
            <form className='search-form' onSubmit={() => { return false; }}>
                <input type='text'
                    className='search-text'
                    placeholder='City, State, Country, and/or Zip Code'
                    onChange={handleSearch}
                    onKeyPress={handleKeyPress}
                    value={searchQuery}
                />
                <a href='javascript: void(null)' className='search-btn'>Search</a>
            </form>

            <form className='filter-form'>
                <ul>
                    <li>
                        <input type="checkbox" name='f[]' value='events' id='events'/>
                        <label htmlFor='events'><img src={VolunteerEventsIcon} /><span>Volunteer for Tiffany</span></label>
                    </li>
                    <li>
                        <input type="checkbox" name='f[]' value='local-groups' id='local-groups'/>
                        <label htmlFor='local-groups'><img src={MeetEventsIcon} /><span>Meet Tiffany</span></label>
                    </li>

                </ul>
            </form>
            {searchResults && <SearchSuggestion selectResult={selectResult} searchResults={searchResults}/>}
        </div>
    </div>
)
