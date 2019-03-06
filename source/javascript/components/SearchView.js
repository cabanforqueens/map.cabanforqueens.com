import React from 'react';
import SearchSuggestion from './SearchSuggestion';
import './SearchView.css';
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
                        <label htmlFor='events'><img src='/img/event.png' /><span>Events</span></label>
                    </li>
                    <li>
                        <input type="checkbox" name='f[]' value='local-groups' id='local-groups'/>
                        <label htmlFor='local-groups'><img src='/img/group.png' /><span>Local Groups</span></label>
                    </li>
                    <li>
                        <input type="checkbox" name='f[]' value='regional-groups' id='regional-groups'/>
                        <label htmlFor='regional-groups'><img src='/img/flag.png' /><span>Regional Groups</span></label>
                    </li>

                </ul>
            </form>
            {searchResults && <SearchSuggestion selectResult={selectResult} searchResults={searchResults}/>}
        </div>
    </div>
)
