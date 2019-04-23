import { EVENTS_LOAD_EVENTS } from '../actions/actionTypes';

const defaultState = {
    eventsData: JSON.parse(`[{"title": "May 2nd Astoria Canvass for Tiffany Cab\u00e1n and Drag Race Watch Party!", "url": "https://actionnetwork.org/events/may-2nd-astoria-canvass-for-tiffany-caban-and-drag-race-watch-party", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-05-02T18:00:00Z", "venue": "TBD. TBD Astoria NY 11106", "lat": 40.76198000000005, "lng": -73.92789989999994, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/28 Ridgewood Canvass for Tiffany Caban", "url": "https://actionnetwork.org/events/428-ridgewood-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-28T15:00:00Z", "venue": "TBD. TBD Ridgewood NY 11385", "lat": 40.703741000000036, "lng": -73.90650389999996, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/28 Jackson Heights Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/428-jackson-heights-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-28T15:00:00Z", "venue": "TBD. TBD Jackson Heights NY 11372", "lat": 40.75108420000004, "lng": -73.88532059999994, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/27 Ridgewood Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/427-ridgewood-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-27T15:00:00Z", "venue": "Onderdonk & Sons. 566 Onderdonk Avenue Ridgewood NY 11385", "lat": 40.705506901465796, "lng": -73.90986545643138, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/27 Sunnyside Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/427-sunnyside-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-27T14:00:00Z", "venue": "TBD. TBD Sunnyside NY 11103", "lat": 40.742440000000045, "lng": -73.92073999999997, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/27 Astoria Morning Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/427-astoria-morning-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-27T11:00:00Z", "venue": "TBD. TBD Astoria NY 11106", "lat": 40.76198000000005, "lng": -73.92789989999994, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/26 Woodside Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/426-woodside-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-26T18:00:00Z", "venue": "TBD. TBD Woodside NY 11377", "lat": 40.74532490000007, "lng": -73.90465719999997, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/25 Astoria Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/425-astoria-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-25T18:00:00Z", "venue": "Vintage. 2314 Ditmars Boulevard Astoria NY 11105", "lat": 40.77937984511522, "lng": -73.91536076729746, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/24 Sunnyside Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/424-sunnyside-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-24T18:00:00Z", "venue": "Haab. 4722 48th St Sunnyside NY 11377", "lat": 40.74022108465575, "lng": -73.91741552250546, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/24 Ridgewood Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/424-ridgewood-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-24T18:00:00Z", "venue": "Onderdonk & Sons. 566 Onderdonk Avenue Ridgewood NY 11385", "lat": 40.705506901465796, "lng": -73.90986545643138, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/23 Astoria Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/423-astoria-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-23T18:00:00Z", "venue": "New York City Bagel and Coffee House. 29-08 23rd Avenue Astoria NY 11105", "lat": 40.77484367747716, "lng": -73.91360738095088, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "APA VOICE Forum", "url": "https://actionnetwork.org/events/apa-voice-forum", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-04-30T18:45:00Z", "venue": "Bellozino Party Hall. 72-11 Roosevelt Ave Jackson Heights NY 11372", "lat": 40.74671645325739, "lng": -73.89312530988512}, {"title": "New Visions Democratic Club \u2013 Jackson Heights Candidate Debate", "url": "https://actionnetwork.org/events/new-visions-democratic-club-jackson-heights-candidate-debate", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-04-29T19:00:00Z", "venue": "The Jewish Center of Jackson Heights. 37-06 77th Street Jackson Heights NY 11372", "lat": 40.74899046932888, "lng": -73.8890677445322}, {"title": "Candidate Forum Justice and Witness Ministries", "url": "https://actionnetwork.org/events/candidate-forum-justice-and-witness-ministries", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-04-27T18:00:00Z", "venue": "Robert Ross Johnson Family Life Center. 172-17 Linden Blvd Jamaica NY 11434", "lat": 40.6920300635926, "lng": -73.77771022052617}, {"title": "SEQ Leadership Coalition Forum", "url": "https://actionnetwork.org/events/seq-leadership-coalition-forum", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-04-27T10:00:00Z", "venue": "The Robert Ross Johnson FLC. 172-17 Linden Blvd Jamaica NY 11434", "lat": 40.6920300635926, "lng": -73.77771022052617}, {"title": "Bagel Brunch with Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/bagel-brunch-with-tiffany-caban", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-05-11T10:00:00Z", "venue": "Amanda and Dan's. 85-10 34th Ave Jackson Heights NY 11372", "lat": 40.75404460502643, "lng": -73.88172898972822}, {"title": "One Queens Indivisible Meet & Greet Fundraiser in Support of Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/one-queens-indivisible-meet-greet-fundraiser-in-support-of-tiffany-caban", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-05-03T19:00:00Z", "venue": "Oliloli Arts and Crafts Studio. 103-23 Metropolitan Ave Forest Hills NY 11375", "lat": 40.71019430725942, "lng": -73.84905945155528}, {"title": "April 27th Reach Canvass at Astoria Park 5k", "url": "https://actionnetwork.org/events/april-27th-reach-canvass-at-astoria-park-5k", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-27T09:00:00Z", "venue": "Astoria Park. Astoria Park Astoria NY 11105", "lat": 40.768815628856686, "lng": -73.90648219237795}, {"title": "April 27th Jessica Ramos Day of Action in Corona", "url": "https://actionnetwork.org/events/april-27th-jessica-ramos-day-of-action-in-corona", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-27T11:00:00Z", "venue": "Corona Plaza. Corona Plaza Corona NY 11368", "lat": 40.74056633253987, "lng": -73.84988179595338}, {"title": "April 28th Reach Canvass in Sunnyside with Gavin", "url": "https://actionnetwork.org/events/april-28th-reach-canvass-in-sunnyside-with-gavin", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-28T15:00:00Z", "venue": "Cafe Bene. 41-31 Queens Blvd, Sunnyside NY 11104", "lat": 40.74385477749345, "lng": -73.92262613667108}, {"title": "Phonebank para Tiffany", "url": "https://actionnetwork.org/events/phonebank-para-tiffany-2", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-25T17:30:00Z", "venue": "Make the Road Action. 92-10 Roosevelt Ave Jackson Heights NY 11373", "lat": 40.748660572277856, "lng": -73.87402880376828}, {"title": "Phonebank para Tiffany", "url": "https://actionnetwork.org/events/phonebank-para-tiffany", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-24T17:30:00Z", "venue": "Make the Road Action. 92-10 Roosevelt Ave Jackson Heights NY 11373", "lat": 40.748660572277856, "lng": -73.87402880376828}, {"title": "April 28th Canvass Forest Hills and Social in Kew Gardens", "url": "https://actionnetwork.org/events/april-21st-canvass-forest-hills-and-social-in-kew-gardens", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-28T13:00:00Z", "venue": "Hangar 11. 119-11 Metropolitan Ave Queens NY 11415", "lat": 40.706129771518476, "lng": -73.8314940789368}, {"title": "April 25th: Amplify Her Canvass in Forest Hills with Maria ", "url": "https://actionnetwork.org/events/april-25th-door-knocking-in-forest-hills-with-maria", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-25T18:00:00Z", "venue": "Keuka Kafe. 112-04 Queens Boulevard Queens NY 11375", "lat": 40.71796830225318, "lng": -73.8368246561772}, {"title": "April 26th: Door Knocking in Forest Hills with James!", "url": "https://actionnetwork.org/events/april-26th-door-knocking-in-forest-hills-with-james", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-26T18:00:00Z", "venue": "Dunkin . 10721 71st Ave Queens NY 11375", "lat": 40.72057993660557, "lng": -73.84460192698177}, {"title": "May 16th Amplify Her Phonebank", "url": "https://actionnetwork.org/events/may-16th-amplify-her-phonebank", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-05-16T18:00:00Z", "venue": "Text Host for Address. Text Host for Address Manhattan NY 10014", "lat": 40.73446179800004, "lng": -74.00697999999994}, {"title": "April 24th New Volunteer Canvass", "url": "https://actionnetwork.org/events/april-24th-new-volunteer-canvass", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-24T18:00:00Z", "venue": "Chicken Shack. 95-05 63rd Dr Queens NY 11374", "lat": 40.729486431040385, "lng": -73.86277151445537}, {"title": "April 23rd: Door Knocking in Kew Gardens with Mel! ", "url": "https://actionnetwork.org/events/april-23rd-door-knocking-in-kew-gardens-with-mel-2", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-23T18:00:00Z", "venue": "Starbucks. 118-24 Queens Blvd Queens NY 11415", "lat": 40.714758093466884, "lng": -73.83220564107677}, {"title": "April 23rd Canvass in Ozone Park with Sasha ", "url": "https://actionnetwork.org/events/april-23rd-canvass-in-ozone-park-with-sasha", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-23T18:00:00Z", "venue": "McDonalds. 75-50 101st Ave Ozone Park  NY 11416", "lat": 40.67966619587203, "lng": -73.86187299035063}, {"title": "April 28th Amplify Her Canvass in Jackson Heights with Nuala", "url": "https://actionnetwork.org/events/april-28th-amplify-her-canvass-in-jackson-heights-with-nuala", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-28T12:00:00Z", "venue": "Nuala Office. 72-24 Broadway Jackson Heights NY 11377", "lat": 40.747226574788016, "lng": -73.89278017153319}, {"title": "April 28th Amplify Her Canvass in Woodside with Angela", "url": "https://actionnetwork.org/events/april-28th-amplify-her-canvass-in-woodside-with-angela", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-28T12:00:00Z", "venue": "Lucid Cafe. 59-02 Woodside Ave Woodside NY 11377", "lat": 40.74527532108611, "lng": -73.9054645075188}, {"title": "April 27th Amplify Her Canvass in Sunnyside with Megan", "url": "https://actionnetwork.org/events/april-27th-amplify-her-canvass-in-jackson-heights-with-megan", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-27T12:00:00Z", "venue": "Cafe Bene. 41-31 Queens Blvd Sunnyside NY 11104", "lat": 40.74385477749345, "lng": -73.92262613667108}, {"title": "April 24 QUIP and Amplify Her Day of Action", "url": "https://actionnetwork.org/events/april-24-quip-day-of-action", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-24T18:30:00Z", "venue": "JH Office. 72-24 Broadway 4th Floor Queens NY 11372", "lat": 40.747226574788016, "lng": -73.89278017153319}]
`)
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
