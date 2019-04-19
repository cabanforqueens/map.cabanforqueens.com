import { EVENTS_LOAD_EVENTS } from '../actions/actionTypes';

const defaultState = {
    eventsData: JSON.parse(`[{"title": "4/28 Ridgewood Canvass for Tiffany Caban", "url": "https://actionnetwork.org/events/428-ridgewood-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-28T15:00:00Z", "venue": "TBD. TBD Ridgewood NY 11385", "lat": 40.703741000000036, "lng": -73.90650389999996, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/28 Jackson Heights Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/428-jackson-heights-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-28T15:00:00Z", "venue": "TBD. TBD Jackson Heights NY 11372", "lat": 40.75108420000004, "lng": -73.88532059999994, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/27 Ridgewood Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/427-ridgewood-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-27T15:00:00Z", "venue": "TBD. TBD Ridgewood NY 11385", "lat": 40.703741000000036, "lng": -73.90650389999996, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/27 Sunnyside Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/427-sunnyside-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-27T14:00:00Z", "venue": "TBD. TBD Sunnyside NY 11103", "lat": 40.742440000000045, "lng": -73.92073999999997, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/27 Astoria Morning Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/427-astoria-morning-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-27T11:00:00Z", "venue": "TBD. TBD Astoria NY 11106", "lat": 40.76198000000005, "lng": -73.92789989999994, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/26 Woodside Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/426-woodside-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-26T18:00:00Z", "venue": "TBD. TBD Woodside NY 11377", "lat": 40.74532490000007, "lng": -73.90465719999997, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/25 Astoria Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/425-astoria-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-25T18:00:00Z", "venue": "TBD. TBD Astoria NY 11106", "lat": 40.76198000000005, "lng": -73.92789989999994, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/24 Sunnyside Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/424-sunnyside-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-24T18:00:00Z", "venue": "TBD. TBD Sunnyside NY 11103", "lat": 40.742440000000045, "lng": -73.92073999999997, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/24 Ridgewood Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/424-ridgewood-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-24T18:00:00Z", "venue": "TBD. TBD Ridgewood NY 11385", "lat": 40.703741000000036, "lng": -73.90650389999996, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/23 Astoria Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/423-astoria-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-23T18:00:00Z", "venue": "TBD. TBD Astoria NY 11106", "lat": 40.76198000000005, "lng": -73.92789989999994, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/22 Jackson Heights Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/422-jackson-heights-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-22T18:00:00Z", "venue": "TBD. TBD Jackson Heights NY 11372", "lat": 40.75108420000004, "lng": -73.88532059999994, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/22 Ridgewood Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/422-ridgewood-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-22T18:30:00Z", "venue": "TBD. TBD Ridgewood NY 11385", "lat": 40.703741000000036, "lng": -73.90650389999996, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/21 Jackson Heights Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/421-jackson-heights-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-21T15:00:00Z", "venue": "TBD. TBD Jackson Heights NY 11372", "lat": 40.75108420000004, "lng": -73.88532059999994, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/20 Ridgewood Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/420-ridgewood-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-20T15:00:00Z", "venue": "Gottscheer Hall. 657 Fairview Ave Ridgewood NY 11385", "lat": 40.706710038597514, "lng": -73.90572508579386, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/20 Astoria Canvass + Social for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/420-astoria-canvass-social-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-20T14:00:00Z", "venue": "Diamond Dogs. 34-03 31st Avenue Astoria NY 11106", "lat": 40.76322315735817, "lng": -73.92096897158758, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "4/19 Woodside Canvass for Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/419-woodside-canvass-for-tiffany-caban", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-19T18:00:00Z", "venue": "Starbucks. 51-06 Northern Boulevard Woodside NY 11377", "lat": 40.75288815290912, "lng": -73.91002646818961, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "APA VOICE Forum", "url": "https://actionnetwork.org/events/apa-voice-forum", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-04-30T18:45:00Z", "venue": "Bellozino Party Hall. 72-11 Roosevelt Ave Jackson Heights NY 11372", "lat": 40.74671645325739, "lng": -73.89312530988512}, {"title": "New Visions Democratic Club \u2013 Jackson Heights Candidate Debate", "url": "https://actionnetwork.org/events/new-visions-democratic-club-jackson-heights-candidate-debate", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-04-29T19:00:00Z", "venue": "The Jewish Center of Jackson Heights. 37-06 77th Street Jackson Heights NY 11372", "lat": 40.74899046932888, "lng": -73.8890677445322}, {"title": "Candidate Forum Justice and Witness Ministries", "url": "https://actionnetwork.org/events/candidate-forum-justice-and-witness-ministries", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-04-27T18:00:00Z", "venue": "Robert Ross Johnson Family Life Center. 172-17 Linden Blvd Jamaica NY 11434", "lat": 40.6920300635926, "lng": -73.77771022052617}, {"title": "SEQ Leadership Coalition Forum", "url": "https://actionnetwork.org/events/seq-leadership-coalition-forum", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-04-27T10:00:00Z", "venue": "The Robert Ross Johnson FLC. 172-17 Linden Blvd Jamaica NY 11434", "lat": 40.6920300635926, "lng": -73.77771022052617}, {"title": "Community Meet and Greet with Tiffany Caban", "url": "https://actionnetwork.org/events/community-meet-and-greet-with-tiffany-caban", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-04-20T13:00:00Z", "venue": "English Lutheran Church. 116-01 204th St  Jamaica NY 11412", "lat": 40.69663722759533, "lng": -73.74913246805947}, {"title": "Bagel Brunch with Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/bagel-brunch-with-tiffany-caban", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-05-11T10:00:00Z", "venue": "Amanda and Dan's. 85-10 34th Ave Jackson Heights NY 11372", "lat": 40.75404460502643, "lng": -73.88172898972822}, {"title": "One Queens Indivisible Meet & Greet Fundraiser in Support of Tiffany Cab\u00e1n", "url": "https://actionnetwork.org/events/one-queens-indivisible-meet-greet-fundraiser-in-support-of-tiffany-caban", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Meet Tiffany", "start_datetime": "2019-05-03T19:00:00Z", "venue": "Oliloli Arts and Crafts Studio. 103-23 Metropolitan Ave Forest Hills NY 11375", "lat": 40.71019430725942, "lng": -73.84905945155528}, {"title": "Phonebank para Tiffany", "url": "https://actionnetwork.org/events/phonebank-para-tiffany-2", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-25T17:30:00Z", "venue": "Make the Road Office. 92-10 Roosevelt Ave Jackson Heights NY 11373", "lat": 40.748660572277856, "lng": -73.87402880376828}, {"title": "Phonebank para Tiffany", "url": "https://actionnetwork.org/events/phonebank-para-tiffany", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-24T17:30:00Z", "venue": "Make the Road Office. 92-10 Roosevelt Ave Jackson Heights NY 11373", "lat": 40.748660572277856, "lng": -73.87402880376828}, {"title": "April 28th Canvass Forest Hills and Social in Kew Gardens", "url": "https://actionnetwork.org/events/april-21st-canvass-forest-hills-and-social-in-kew-gardens", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-28T13:00:00Z", "venue": "Hangar 11. 119-11 Metropolitan Ave Queens NY 11415", "lat": 40.706129771518476, "lng": -73.8314940789368}, {"title": "April 25th: Door Knocking in Forest Hills with James!", "url": "https://actionnetwork.org/events/april-25th-door-knocking-in-forest-hills-with-james", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-25T18:00:00Z", "venue": "Dunkin . 10721 71st Ave Queens NY 11375", "lat": 40.72057993660557, "lng": -73.84460192698177}, {"title": "April 26th: Door Knocking in Forest Hills with James!", "url": "https://actionnetwork.org/events/april-26th-door-knocking-in-forest-hills-with-james", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-26T18:00:00Z", "venue": "Dunkin . 10721 71st Ave Queens NY 11375", "lat": 40.72057993660557, "lng": -73.84460192698177}, {"title": "May 16th Amplify Her Phonebank", "url": "https://actionnetwork.org/events/may-16th-amplify-her-phonebank", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-05-16T18:00:00Z", "venue": "Text Host for Address. Text Host for Address Manhattan NY 10014", "lat": 40.73446179800004, "lng": -74.00697999999994}, {"title": "April 24th New Volunteer Canvass", "url": "https://actionnetwork.org/events/april-24th-new-volunteer-canvass", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-24T18:00:00Z", "venue": "Chicken Shack. 95-05 63rd Dr Queens NY 11374", "lat": 40.729486431040385, "lng": -73.86277151445537}, {"title": "April 23rd: Door Knocking in Kew Gardens with Mel! ", "url": "https://actionnetwork.org/events/april-23rd-door-knocking-in-kew-gardens-with-miriam", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-23T18:00:00Z", "venue": "Starbucks. 118-24 Queens Blvd Queens NY 11415", "lat": 40.714758093466884, "lng": -73.83220564107677}, {"title": "April 22nd: Door Knocking in Forest Hills with James! ", "url": "https://actionnetwork.org/events/april-22nd-door-knocking-in-forest-hills-with-james", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-22T18:00:00Z", "venue": "Keuka Kafe. 112-04 Queens Blvd Queens NY 11375", "lat": 40.71796830225318, "lng": -73.8368246561772}, {"title": "April 23rd Canvass in Ozone Park with Sasha ", "url": "https://actionnetwork.org/events/april-23rd-canvass-in-ozone-park-with-sasha", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-23T18:00:00Z", "venue": "McDonalds. 75-50 101st Ave Ozone Park  NY 11416", "lat": 40.67966619587203, "lng": -73.86187299035063}, {"title": "April 28th Amplify Her Canvass in Jackson Heights with Nuala", "url": "https://actionnetwork.org/events/april-28th-amplify-her-canvass-in-jackson-heights-with-nuala", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-28T12:00:00Z", "venue": "Nuala Office. 72-24 Broadway Jackson Heights NY 11377", "lat": 40.747226574788016, "lng": -73.89278017153319}, {"title": "April 28th Amplify Her Canvass in Woodside with Angela", "url": "https://actionnetwork.org/events/april-28th-amplify-her-canvass-in-woodside-with-angela", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-28T12:00:00Z", "venue": "Lucid Cafe. 59-02 Woodside Ave Woodside NY 11377", "lat": 40.74527532108611, "lng": -73.9054645075188}, {"title": "April 27th Amplify Her Canvass in Sunnyside with Megan", "url": "https://actionnetwork.org/events/april-27th-amplify-her-canvass-in-jackson-heights-with-megan", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-27T12:00:00Z", "venue": "Cafe Bene. 41-31 Queens Blvd Sunnyside NY 11104", "lat": 40.74385477749345, "lng": -73.92262613667108}, {"title": "April 25th Amplify Her Canvass in Jackson Heights with Maria", "url": "https://actionnetwork.org/events/april-24th-amplify-her-canvass-in-jackson-heights-with-maria", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-25T18:00:00Z", "venue": "Starbucks. 78-25 37th Ave Jackson Heights NY 11372", "lat": 40.74945457857714, "lng": -73.88777556563463}, {"title": "April 21st Amplify Her Canvass in Woodhaven with Felicia", "url": "https://actionnetwork.org/events/april-21st-amplify-her-canvass-in-woodhaven-with-felicia", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-21T17:00:00Z", "venue": "Dunkin. 8413 Jamaica Ave Queens NY 11421", "lat": 40.69245296194713, "lng": -73.86042431026651}, {"title": "April 21st Amplify Her Canvass in Woodside with Angela", "url": "https://actionnetwork.org/events/april-21st-amplify-her-canvass-in-woodside-with-angela", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-21T12:00:00Z", "venue": "Lucid Cafe. 59-02 Woodside Ave Queens NY 11377", "lat": 40.74527532108611, "lng": -73.9054645075188}, {"title": "April 19th: Door Knocking in Forest Hills with James! ", "url": "https://actionnetwork.org/events/april-19th-door-knocking-in-forest-hills-with-james", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-19T18:00:00Z", "venue": "Keuka Kafe. 112-04 Queens Blvd Queens NY 11375", "lat": 40.71796830225318, "lng": -73.8368246561772}, {"title": "April 24 QUIP and Amplify Her Day of Action", "url": "https://actionnetwork.org/events/april-24-quip-day-of-action", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-24T18:30:00Z", "venue": "JH Office. 72-24 Broadway 4th Floor Queens NY 11372", "lat": 40.747226574788016, "lng": -73.89278017153319}, {"title": "April 21st Canvassing in Forest Hills + Social", "url": "https://actionnetwork.org/events/april-21st-door-knocking-beer-garden-social", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Volunteer for Tiffany", "start_datetime": "2019-04-21T14:00:00Z", "venue": "Cobblestones Pub and Biergarten. 117-18 Queens Blvd Queens NY 11375", "lat": 40.715155587210724, "lng": -73.83272307387608}]
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
