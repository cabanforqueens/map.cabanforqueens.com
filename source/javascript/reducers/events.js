import { EVENTS_LOAD_EVENTS } from '../actions/actionTypes';

const defaultState = {
    eventsData: JSON.parse(`[{"title": "March 21st Evening Petition for Tiffany Cab\u00e1n in Sunnyside", "url": "https://actionnetwork.org/events/march-21st-evening-petition-for-tiffany-caban-in-sunnyside", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-21T18:30:00Z", "venue": "Marabella. 4107 Greenpoint Ave Sunnyside NY 11377", "lat": 40.740184696375934, "lng": -73.92361490481267, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 21st Evening Petition for Tiffany Cab\u00e1n in Jackson Heights", "url": "https://actionnetwork.org/events/march-21st-evening-petition-for-tiffany-caban-in-jackson-heights", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-21T18:30:00Z", "venue": "Las Americas Bakery. 9304 37th Ave Jackson Heights NY 11372", "lat": 40.750814641670146, "lng": -73.8738682127359, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 21st Morning Subway Petition for Tiffany Cab\u00e1n at Steinway R/M Stop", "url": "https://actionnetwork.org/events/march-14th-morning-subway-petition-for-tiffany-caban-at-steinway-rm-stop-2", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-21T07:30:00Z", "venue": "Steinway Street Subway Station. Steinway Street and Broadway Astoria NY 11103", "lat": 40.75897499999999, "lng": -73.91900249999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 21st Morning Subway Petition for Tiffany Cab\u00e1n at 30th Avenue N/W Station", "url": "https://actionnetwork.org/events/march-21th-morning-subway-petition-for-tiffany-caban-at-30th-avenue-nw-station", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-21T06:30:00Z", "venue": "Tastee Corner. 30-20 30th Avenue Astoria NY 11102", "lat": 40.76710855703202, "lng": -73.92202681864049, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 20th Morning Subway Petition for Tiffany Cab\u00e1n at 46th St 7 Stop", "url": "https://actionnetwork.org/events/march-20th-morning-subway-petition-for-tiffany-caban-at-46th-st-7-train-stop", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-19T07:00:00Z", "venue": "46th St 7 Train Stop. 46th Street and Queens Blvd Sunnyside NY 11103", "lat": 40.743009, "lng": -73.91871, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 19th Evening Petition for Tiffany Cab\u00e1n in Jamaica", "url": "https://actionnetwork.org/events/march-19th-evening-petition-for-tiffany-caban-in-jamaica", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-19T18:30:00Z", "venue": "Jamaica Center Bus Terminal. Archer Ave and 153rd Street Jamaica NY 11432", "lat": 40.701969000000005, "lng": -73.8019035, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 18th Evening Petition for Tiffany Cab\u00e1n in Jamaica", "url": "https://actionnetwork.org/events/march-18th-evening-petition-for-tiffany-caban-in-jamaica", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-18T18:30:00Z", "venue": "Jamaica Center Bus Terminal. Archer Ave and 153rd Street Jamaica NY 11435", "lat": 40.701978, "lng": -73.8019035, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 20th Evening Petition for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/march-20th-evening-petition-for-tiffany-caban-in-ridgewood", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-20T18:30:00Z", "venue": "Milo's Yard. 564 Seneca Ave Ridgewood NY 11385", "lat": 40.704691788016476, "lng": -73.91103986570252, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 20th Morning Subway Petition for Tiffany Cab\u00e1n at 36th Ave N/W Station", "url": "https://actionnetwork.org/events/march-20th-morning-subway-petition-for-tiffany-caban-at-36th-ave-nw-station", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-20T07:00:00Z", "venue": "36th Avenue Subway Station. 36th Ave and 31st Street Astoria NY 11106", "lat": 40.756608, "lng": -73.9297935, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 20th Evening Petition for Tiffany Cab\u00e1n in Sunnyside ", "url": "https://actionnetwork.org/events/march-20th-evening-petition-for-tiffany-caban-in-sunnyside", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-20T18:30:00Z", "venue": "Marabella. 4107 Greenpoint Ave Sunnyside NY 11104", "lat": 40.740184696375934, "lng": -73.92361490481267, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 20th Evening Petition for Tiffany Cab\u00e1n in Long Island City", "url": "https://actionnetwork.org/events/march-20th-evening-petition-for-tiffany-caban-in-long-island-city", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-20T18:30:00Z", "venue": "Creek and Cave. 10-93 Jackson Ave Long Island City NY 11101", "lat": 40.74320068527712, "lng": -73.9514971661177, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 19th Morning Petition for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/march-19th-morning-petition-for-tiffany-caban-in-ridgewood", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-19T07:00:00Z", "venue": "Fresh Pond M Station. Fresh Pond and 67th Ave Ridgewood NY 11385", "lat": 40.70573999999999, "lng": -73.89656099999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 19th Evening Petition for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/march-19th-evening-petition-for-tiffany-caban-in-ridgewood", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-19T18:30:00Z", "venue": "Catania Bakery. 487 Harman St, Brooklyn, NY 11237 Ridgewood NY 11385", "lat": 40.704668088262444, "lng": -73.91415412920533, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 19th Evening Petition for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/march-19th-evening-petition-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-19T18:30:00Z", "venue": "Dunkin Donuts.  3530 36th St Astoria NY 11106", "lat": 40.75580120321724, "lng": -73.92495414524886, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 19th Morning Subway Petition for Tiffany Cab\u00e1n at Steinway R/M Stop", "url": "https://actionnetwork.org/events/march-19th-morning-subway-petition-for-tiffany-caban-at-steinway-rm-stop", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-19T07:30:00Z", "venue": "Steinway Street Subway Station. Steinway Street and Broadway Astoria NY 11103", "lat": 40.75897499999999, "lng": -73.91900249999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 18th Evening Petition for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/march-18th-evening-petition-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-18T18:30:00Z", "venue": "Vintage.  2314 Ditmars Blvd Astoria NY 11105", "lat": 40.77937984511522, "lng": -73.91536076729746, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 18th Evening Petition for Tiffany Cab\u00e1n in Jackson Heights", "url": "https://actionnetwork.org/events/march-11th-evening-petition-for-tiffany-caban-in-jackson-heights-2", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-18T18:30:00Z", "venue": "La Gran Via Bakery. 78-14 Roosevelt Ave Jackson Heights NY 11372", "lat": 40.747250579491215, "lng": -73.88726054801202, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 18th Morning Subway Petition for Tiffany Cab\u00e1n at Queensbridge F Stop", "url": "https://actionnetwork.org/events/march-11th-morning-subway-petition-for-tiffany-caban-at-queensbridge-f-stop", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-18T06:30:00Z", "venue": "Queensbridge F Stop. Queensbridge Long Island City NY 11101", "lat": 40.756470000000036, "lng": -73.94728999999995, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 18th Morning Subway Petition for Tiffany Cab\u00e1n at Senca Ave M Station", "url": "https://actionnetwork.org/events/march-18th-morning-subway-petition-for-tiffany-caban-at-senca-ave-m-station", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-18T07:00:00Z", "venue": "Seneca Ave M Station. Seneca and Palmetto Ridgewood NY 11385", "lat": 40.702788, "lng": -73.90765350000001, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "Collect Petition Signatures for Tiffany Cab\u00e1n at Green New Deal Forum", "url": "https://actionnetwork.org/events/collect-petition-signatures-for-tiffany-caban-at-green-new-deal-forum", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-20T18:15:00Z", "venue": "Concert Hall at Society for Ethical Culture. 2 W 64th St New York NY 10023", "lat": 40.77126078628315, "lng": -73.97998254968546, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "3/30 Petition for Tiffany Cab\u00e1n at Sunnyside Greenmarket", "url": "https://actionnetwork.org/events/330-petition-for-tiffany-caban-at-sunnyside-greenmarket", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-30T11:00:00Z", "venue": "Sunnyside Greenmarket. Skillman Avenue and 42nd Street Sunnyside NY 1104", "lat": 40.746995999999996, "lng": -73.92172049999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "Ballot Petitioning in Corona with Ingrid", "url": "https://actionnetwork.org/events/ballot-petitioning-in-corona-with-ingrid", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-17T12:00:00Z", "venue": "Dunkin Donut. 10227 Roosevelt Ave Corona NY 11368", "lat": 40.74983950983988, "lng": -73.86373333083623}, {"title": "Ballot Petitioning in Briarwood with Divya", "url": "https://actionnetwork.org/events/ballot-petitioning-in-briarwood-with-divya-3", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-17T04:00:00Z", "venue": "Near Jamaica Van-Wyck Station. 132-40 Metropolitan Ave  Richmond Hill NY 11418", "lat": 40.70281683484343, "lng": -73.81850670788846}, {"title": "Ballot Petitioning in Briarwood with Divya", "url": "https://actionnetwork.org/events/ballot-petitioning-in-briarwood-with-divya-2", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-17T02:00:00Z", "venue": "Near Jamaica Van-Wyck Station. 132-40 Metropolitan Ave  Richmond Hill NY 11418", "lat": 40.70281683484343, "lng": -73.81850670788846}, {"title": "Ballot Petitioning in Briarwood with Divya", "url": "https://actionnetwork.org/events/ballot-petitioning-in-briarwood-with-divya", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-17T12:00:00Z", "venue": "Near Jamaica Van-Wyck Station. 132-40 Metropolitan Ave  Richmond Hill NY 11418", "lat": 40.70281683484343, "lng": -73.81850670788846}, {"title": "Forest Hills Greenmarket Petitioning for Cab\u00e1n with Thomas ", "url": "https://actionnetwork.org/events/forest-hills-greenmarket-petitioning-for-caban-with-thomas", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-17T10:00:00Z", "venue": "Forest Hills Greenmarket . 106-20 70th Avenue  Forest Hills NY 11375", "lat": 40.7215343829997, "lng": -73.84656509100373}, {"title": "Jackson Heights Greenmarket", "url": "https://actionnetwork.org/events/jackson-heights-greenmarket", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-17T09:30:00Z", "venue": "Jackson Heights Greenmarket. 34TH Ave At 80th St Jackson Heights NY 11372", "lat": 40.75353, "lng": -73.886904}, {"title": "Petitioning with Sonya Elango", "url": "https://actionnetwork.org/events/petitioning-with-sonya-elango", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-18T18:30:00Z", "venue": "El Buen Sabor Bakery. 4507 Queens Blvd Queens NY 11104", "lat": 40.74348463683664, "lng": -73.91945721539038}, {"title": "Petitioning for Tiffany Caban - Rockaway", "url": "https://actionnetwork.org/events/petitioning-for-tiffany-caban-rockaway", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-17T11:00:00Z", "venue": "First Congregrational Church. 320 Beach 94th Street Rockaway Park NY 11694", "lat": 40.58718105844757, "lng": -73.81723018167318}, {"title": "Petitioning at Queens Criminal Court", "url": "https://actionnetwork.org/events/petitioning-at-far-rockaway", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-17T12:00:00Z", "venue": "Queens Criminal Court. 125-01 Queens Blvd, Kew Gardens Queens NY 11415", "lat": 40.71205818269902, "lng": -73.8253195602457}]`)
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
