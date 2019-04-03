import { EVENTS_LOAD_EVENTS } from '../actions/actionTypes';

const defaultState = {
    eventsData: JSON.parse(`[{"title": "April 5th Canvass for Tiffany Cab\u00e1n in Woodside", "url": "https://actionnetwork.org/events/april-5thrd-canvass-for-tiffany-caban-in-woodside", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-05T18:00:00Z", "venue": "Big Bear Bubble Tea. 57-16 Woodside Ave Woodside NY 11377", "lat": 40.7457502698529, "lng": -73.9071094506485, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "April 6th Canvass for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/april-6th-canvass-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-06T11:00:00Z", "venue": "TBD. TBD Astoria NY 11104", "lat": 40.74288000000007, "lng": -73.92189989999997, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "April 7th Canvass for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/april-7th-canvass-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-07T13:00:00Z", "venue": "Starbucks. 30-18 Astoria Blvd Astoria NY 11102", "lat": 40.77018157759221, "lng": -73.91880047446604, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "April 7th Canvass for Tiffany Cab\u00e1n in Jackson Heights", "url": "https://actionnetwork.org/events/april-7th-canvass-for-tiffany-caban-in-jackson-heights", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-07T16:00:00Z", "venue": "Las Americas Bakery. 9304 37th Ave, Jackson Heights, NY 11372 Jackson Heights NY 11372", "lat": 40.750814641670146, "lng": -73.8738682127359, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "April 6th Canvass for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/april-6th-canvass-for-tiffany-caban-in-ridgewood", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-06T15:00:00Z", "venue": "C. Lo Cafe. 660 Fairview Ave Ridgewood NY 11385", "lat": 40.70655761272963, "lng": -73.90573881855663, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "April 4th Canvass for Tiffany Cab\u00e1n in Sunnyside", "url": "https://actionnetwork.org/events/april-4th-canvass-for-tiffany-caban-in-sunnyside", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-04T18:00:00Z", "venue": "Starbucks. 46-09 Queens Blvd Sunnyside NY 11104", "lat": 40.74335816338518, "lng": -73.91835983369225, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "April 3rd Canvass for Tiffany Cab\u00e1n in Sunnyside", "url": "https://actionnetwork.org/events/april-3rd-canvass-for-tiffany-caban-in-sunnyside", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-03T18:00:00Z", "venue": "Starbucks. 46-09 Queens Blvd Sunnyside NY 11104", "lat": 40.74335816338518, "lng": -73.91835983369225, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "April 6th Canvass for Tiffany Cab\u00e1n in Long Island City", "url": "https://actionnetwork.org/events/april-6th-canvass-for-tiffany-caban-in-long-island-city", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-06T14:00:00Z", "venue": "Alewife. 5-14 51st Ave Long Island City NY 11101", "lat": 40.74232984205681, "lng": -73.95602793381033, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "April 4th Canvass for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/april-4th-canvass-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-04T18:00:00Z", "venue": "Starbucks. 30-18 Astoria Blvd Astoria NY 11102", "lat": 40.77018157759221, "lng": -73.91880047446604, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "April 3rd Canvass for Tiffany Cab\u00e1n in Long Island City", "url": "https://actionnetwork.org/events/april-3rd-canvass-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-03T18:00:00Z", "venue": "Alewife. 5-14 51st Ave Long Island City NY 11101", "lat": 40.74232984205681, "lng": -73.95602793381033, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "April 3rd Canvass for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/april-1st-canvass-for-tiffany-caban-in-ridgewood-2", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-03T18:30:00Z", "venue": "Milo's Yard. 564 Seneca Ave Ridgewood NY 11385", "lat": 40.704691788016476, "lng": -73.91103986570252, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "April 7th Door-knocking + Potluck!", "url": "https://actionnetwork.org/events/april-7th-door-knocking-potluck", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-07T12:30:00Z", "venue": "Nuala's House. 35-18 90th St Queens NY 11372", "lat": 40.752006527612686, "lng": -73.87717528117591}, {"title": "Petition for Caban with Susie!", "url": "https://actionnetwork.org/events/petition-for-caban-with-susie", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-04-08T18:30:00Z", "venue": "Astoria\u2013Ditmars Boulevard . 31st Street between 23rd Avenue (Northeast corner) Queens NY 11105", "lat": 40.77839000000006, "lng": -73.91340999999994}]`)
}

export default function (state=defaultState, action) {

    switch(action.type) {

        case EVENTS_LOAD_EVENTS:
            return {
                ...state,
                eventsData: action.data
            }
        default:
          return state;
    }
};
