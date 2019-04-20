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
  searchQuery,
  showVolunteer, 
  showMeet,
  handleFilterChange
}) => (
    <div className='search-container'>
        <div className='search-viewport'>
            <form className='search-form' onSubmit={() => { return false; }}>
                <input type='number'
                    className='search-text'
                    placeholder='Enter Zip Code'
                    onChange={handleSearch}
                    onKeyPress={handleKeyPress}
                    value={searchQuery}
                    maxLength={5}
                />
            </form>

            <form className='filter-form'>
                <ul>
                    <li>
                        <input type="checkbox" name='f[]' value='Volunteer for Tiffany' 
                            id='Volunteer for Tiffany' onChange={handleFilterChange} 
                            checked={showVolunteer ? "checked" : false}/>
                        <label htmlFor='Volunteer for Tiffany'><img src={VolunteerEventsIcon} /><span>Volunteer for Tiffany</span></label>
                    </li>
                    <li>
                        <input type="checkbox" name='f[]' onChange={handleFilterChange} 
                                value='Meet Tiffany' id='Meet Tiffany'  checked={showMeet ? "checked" : false}/>
                        <label htmlFor='Meet Tiffany'><img src={MeetEventsIcon} /><span>Meet Tiffany</span></label>
                    </li>

                </ul>
            </form>
            {searchResults && <SearchSuggestion selectResult={selectResult} searchResults={searchResults}/>}
        </div>
    </div>
)
