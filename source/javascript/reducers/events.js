import { EVENTS_LOAD_EVENTS } from '../actions/actionTypes';

const defaultState = {
    eventsData: JSON.parse(`[{"title": "March 31st Queensbridge Petition for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/march-31st-queensbridge-petition-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-31T12:00:00Z", "venue": "Queensbridge Houses. 41st Ave and 24th St Long Island City NY 11101", "lat": 40.75264800000001, "lng": -73.9398645, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 30th Afternoon Petition for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/march-30th-afternoon-petition-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-30T13:00:00Z", "venue": "Astoria Coffee . 30-04 30th St Astoria NY 11102", "lat": 40.767160940957126, "lng": -73.92236164842141, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 30th Petition for Tiffany Cab\u00e1n on Northern Blvd", "url": "https://actionnetwork.org/events/march-30th-petition-for-tiffany-caban-on-northern-blvd", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-30T16:00:00Z", "venue": "LIC Food Bazaar. 42-02 Northern Blvd Astoria NY 11101", "lat": 40.75299696136573, "lng": -73.9216136802471, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 30th Afternoon Petition for Tiffany Cab\u00e1n in LIC", "url": "https://actionnetwork.org/events/march-30th-afternoon-petition-for-tiffany-caban-in-lic", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-30T16:00:00Z", "venue": "Clever Blend LIC. 2706 Queens Plaza S LIC NY 11101", "lat": 40.750069541376966, "lng": -73.93975594596061, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 31st BUM Day of Action for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/bum-day-of-action-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-31T14:00:00Z", "venue": "Starbucks. 30-18 Astoria Blvd Astoria NY 11102", "lat": 40.77018157759221, "lng": -73.91880047446604, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 29th Morning Subway Petition for Tiffany Cab\u00e1n at Queensboro Plaza Station", "url": "https://actionnetwork.org/events/march-29th-morning-subway-petition-for-tiffany-caban-at-queensboro-plaza-station", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-29T07:30:00Z", "venue": "Queensboro Plaza Subway Station. Queensboro Plaza Long Island City NY 11101", "lat": 40.75258861815297, "lng": -73.9444160217518, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 28th Evening Petition for Tiffany Cab\u00e1n in Jamaica", "url": "https://actionnetwork.org/events/march-28th-evening-petition-for-tiffany-caban-in-jamaica", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-28T18:30:00Z", "venue": "Jamaica Center Bus Terminal. Archer Ave and 153rd Street Jamaica NY 11435", "lat": 40.701978, "lng": -73.8019035, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 28th Evening Petition for Tiffany Cab\u00e1n in Sunnyside", "url": "https://actionnetwork.org/events/march-21st-evening-petition-for-tiffany-caban-in-sunnyside-2", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-28T18:30:00Z", "venue": "Starbucks. 46-09 Queens Blvd Sunnyside NY 11104", "lat": 40.74335816338518, "lng": -73.91835983369225, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 28st Morning Subway Petition for Tiffany Cab\u00e1n at 30th Avenue N/W Station", "url": "https://actionnetwork.org/events/march-28st-morning-subway-petition-for-tiffany-caban-at-30th-avenue-nw-station", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-28T06:30:00Z", "venue": "Tastee Corner. 30-20 30th Avenue Astoria NY 11102", "lat": 40.76710855703202, "lng": -73.92202681864049, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 28st Morning Subway Petition for Tiffany Cab\u00e1n at Steinway R/M Stop", "url": "https://actionnetwork.org/events/march-28st-morning-subway-petition-for-tiffany-caban-at-steinway-rm-stop", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-28T07:30:00Z", "venue": "Steinway Street Subway Station. Steinway Street and Broadway Astoria NY 11103", "lat": 40.75897499999999, "lng": -73.91900249999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 24th Jackson Heights Green Market Petition for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/march-24th-jackson-heights-green-market-petition-for-tiffany-caban-2", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-31T10:00:00Z", "venue": "Jackson Heights Green Market. 79th St and 34th Ave Jackson Heights NY  11372", "lat": 40.75344000000001, "lng": -73.887822, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 29th Morning Subway Petition for Tiffany Cab\u00e1n at 46th St 7 Stop", "url": "https://actionnetwork.org/events/march-20th-morning-subway-petition-for-tiffany-caban-at-46th-st-7-stop-2", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-29T07:00:00Z", "venue": "46th Street 7 Stop. 46th Street and Queens Blvd Sunnyside NY 11103", "lat": 40.743009, "lng": -73.91871, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 25th Morning Subway Petition for Tiffany Cab\u00e1n at 52nd Street 7 Stop", "url": "https://actionnetwork.org/events/march-20th-morning-subway-petition-for-tiffany-caban-at-46th-st-7-stop", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-25T07:00:00Z", "venue": "52nd Street and Lincoln Ave 7 stop. 52nd Street and 43rd Ave Sunnyside NY 11103", "lat": 40.744152000000014, "lng": -73.912491, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 26th Evening Petition for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/march-26th-evening-petition-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-26T18:30:00Z", "venue": "Dunkin Donuts. 3102 36th Ave Astoria NY 11106", "lat": 40.75647422701841, "lng": -73.92960521163937, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 26th Morning Subway Petition for Tiffany Cab\u00e1n at Steinway R/M Stop", "url": "https://actionnetwork.org/events/march-26th-morning-subway-petition-for-tiffany-caban-at-steinway-rm-stop", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-26T07:30:00Z", "venue": "Steinway Street Subway Station. Steinway Street and Broadway Astoria NY 11103", "lat": 40.75897499999999, "lng": -73.91900249999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 26th Evening Petition for Tiffany Cab\u00e1n in Jamaica", "url": "https://actionnetwork.org/events/march-26th-evening-petition-for-tiffany-caban-in-jamaica", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-26T18:30:00Z", "venue": "Jamaica Center Bus Terminal. Archer Ave and 153rd Street Jamaica NY 11432", "lat": 40.701969000000005, "lng": -73.8019035, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 26th Morning Petition for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/march-26th-morning-petition-for-tiffany-caban-in-ridgewood", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-26T07:00:00Z", "venue": "Forest Ave M Stop. Forest Ave and Putnam Ridgewood NY 11385", "lat": 40.70514600000001, "lng": -73.902123, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 25th Evening Petition for Tiffany Cab\u00e1n in Jamaica", "url": "https://actionnetwork.org/events/march-25th-evening-petition-for-tiffany-caban-in-jamaica", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-25T18:30:00Z", "venue": "Jamaica Center Bus Terminal. Archer Ave and 153rd Street Jamaica NY 11435", "lat": 40.701978, "lng": -73.8019035, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 25th Evening Petition for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/march-25th-evening-petition-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-25T18:00:00Z", "venue": "New York City Bagel and Coffee House. 29-08 23rd Ave Astoria NY 11105", "lat": 40.77484367747716, "lng": -73.91360738095088, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 25th Evening Petition for Tiffany Cab\u00e1n in Jackson Heights", "url": "https://actionnetwork.org/events/march-25th-evening-petition-for-tiffany-caban-in-jackson-heights", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-25T18:30:00Z", "venue": "La Gran Via Bakery. 78-14 Roosevelt Ave Jackson Heights NY 11372", "lat": 40.747250579491215, "lng": -73.88726054801202, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 25th Morning Subway Petition for Tiffany Cab\u00e1n at Forest Ave M", "url": "https://actionnetwork.org/events/march-18th-morning-subway-petition-for-tiffany-caban-at-senca-forest-ave-m", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-25T07:30:00Z", "venue": "Forest Ave M Stop. Seneca and Putnam Ridgewood NY 11385", "lat": 40.701483, "lng": -73.9054755, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 24th Jackson Heights Green Market Petition for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/march-24th-jackson-heights-green-market-petition-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-24T10:00:00Z", "venue": "Jackson Heights Green Market. 79th St and 34th Ave Jackson Heights NY  11372", "lat": 40.75344000000001, "lng": -73.887822, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 24th Queensbridge Petition for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/queensbridge-petition-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-24T12:00:00Z", "venue": "Queensbridge Houses. 41st Ave and 24th St Long Island City NY 11101", "lat": 40.75264800000001, "lng": -73.9398645, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 24th Queer Caucus Petition for Tiffany Cab\u00e1n in Jackson Heights", "url": "https://actionnetwork.org/events/march-24th-queer-caucus-petition-for-tiffany-caban-in-jackson-heights", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-24T14:00:00Z", "venue": "La Gran Via Bakery. 78-14 Roosevelt Ave Jackson Heights NY 11372", "lat": 40.747250579491215, "lng": -73.88726054801202, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 30th Petition for Tiffany Cab\u00e1n at Sunnyside Greenmarket", "url": "https://actionnetwork.org/events/330-petition-for-tiffany-caban-at-sunnyside-greenmarket", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-30T11:00:00Z", "venue": "Sunnyside Greenmarket. Skillman Avenue and 42nd Street Sunnyside NY 1104", "lat": 40.746995999999996, "lng": -73.92172049999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "3/29\u2013 Forest Hills Ballot Petitioning with James!", "url": "https://actionnetwork.org/events/329-forest-hills-ballot-petitioning-with-james", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-28T18:00:00Z", "venue": "NY Hot Bagels and Bialys. 101-01 Queens Blvd Queens NY 11375", "lat": 40.726725693421976, "lng": -73.85236665841848}, {"title": "3/28\u2013 Rego Park Ballot Petitioning with James!", "url": "https://actionnetwork.org/events/328-rego-park-ballot-petitioning-with-james", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-28T18:00:00Z", "venue": "Starbucks. 95-17 63rd Dr Queens NY 11374", "lat": 40.729467488072665, "lng": -73.86281472173003}, {"title": "3/27\u2013 Forest Hills Ballot Petitioning with James!", "url": "https://actionnetwork.org/events/327-forest-hills-ballot-petitioning-with-james", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-27T18:00:00Z", "venue": "NY Hot Bagels and Bialys. 101-01 Queens Blvd Queens NY 11375", "lat": 40.726725693421976, "lng": -73.85236665841848}, {"title": "3/25 \u2013 Rego Park Ballot Petitioning with James!", "url": "https://actionnetwork.org/events/325-rego-park-ballot-petitioning-with-james", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-25T18:00:00Z", "venue": "Starbucks. 95-17 63rd Dr Queens NY 11374", "lat": 40.729467488072665, "lng": -73.86281472173003}, {"title": "3/26 \u2013 Kew Gardens Ballot Petitioning with James!", "url": "https://actionnetwork.org/events/326-kew-gardens-ballot-petitioning-with-james", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-26T18:00:00Z", "venue": "Starbucks. 118-24 Queens Blvd Queens NY 11415", "lat": 40.714758093466884, "lng": -73.83220564107677}, {"title": "March 25th Evening Ballot Petitioning with Evan at R/M Stop ", "url": "https://actionnetwork.org/events/march-25th-evening-ballot-petitioning-with-evan-at-rm-stop", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-25T18:30:00Z", "venue": "Steinway Street Subway Station. Steinway Street and Broadway Astoria NY 11103", "lat": 40.75897499999999, "lng": -73.91900249999999}, {"title": "Forest Hills Ballot Petitioning with James!", "url": "https://actionnetwork.org/events/forest-hills-ballot-petitioning-with-james-8", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-24T12:00:00Z", "venue": "Near Forest Hills US Postal Service. 10628 Queens Blvd Forest Hills NY 11375", "lat": 40.72192792198071, "lng": -73.8467587758958}, {"title": "Forest Hills Ballot Petitioning with James!", "url": "https://actionnetwork.org/events/forest-hills-ballot-petitioning-with-james-7", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-24T10:00:00Z", "venue": "Near Forest Hills US Postal Service. 10628 Queens Blvd Forest Hills NY 11375", "lat": 40.72192792198071, "lng": -73.8467587758958}]`)
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
