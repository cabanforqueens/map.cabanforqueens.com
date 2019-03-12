import { EVENTS_LOAD_EVENTS } from '../actions/actionTypes';

const defaultState = {
    eventsData: JSON.parse(`[{"title": "March 20th Evening Petition for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/march-20th-evening-petition-for-tiffany-caban-in-ridgewood", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-20T18:30:00Z", "venue": "Milo's Yard. 564 Seneca Ave Ridgewood NY 11385", "lat": 40.704691788016476, "lng": -73.91103986570252, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 20th Morning Subway Petition for Tiffany Cab\u00e1n at 36th Ave N/W Station", "url": "https://actionnetwork.org/events/march-20th-morning-subway-petition-for-tiffany-caban-at-36th-ave-nw-station", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-20T07:00:00Z", "venue": "36th Avenue Subway Station. 36th Ave and 31st Street Astoria NY 11106", "lat": 40.756608, "lng": -73.9297935, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 20th Evening Petition for Tiffany Cab\u00e1n in Sunnyside ", "url": "https://actionnetwork.org/events/march-20th-evening-petition-for-tiffany-caban-in-sunnyside", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-20T18:30:00Z", "venue": "Marabella. 4107 Greenpoint Ave Sunnyside NY 11104", "lat": 40.740184696375934, "lng": -73.92361490481267, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 20th Evening Petition for Tiffany Cab\u00e1n in Long Island City", "url": "https://actionnetwork.org/events/march-20th-evening-petition-for-tiffany-caban-in-long-island-city", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-20T18:30:00Z", "venue": "Creek and Cave. 10-93 Jackson Ave Long Island City NY 11101", "lat": 40.74320068527712, "lng": -73.9514971661177, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 19th Morning Petition for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/march-19th-morning-petition-for-tiffany-caban-in-ridgewood", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-19T07:00:00Z", "venue": "Fresh Pond M Station. Fresh Pond and 67th Ave Ridgewood NY 11385", "lat": 40.70573999999999, "lng": -73.89656099999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 19th Evening Petition for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/march-19th-evening-petition-for-tiffany-caban-in-ridgewood", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-19T18:30:00Z", "venue": "Catania Bakery. 487 Harman St, Brooklyn, NY 11237 Ridgewood NY 11385", "lat": 40.704668088262444, "lng": -73.91415412920533, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 19th Evening Petition for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/march-19th-evening-petition-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-19T18:30:00Z", "venue": "Dunkin Donuts.  3530 36th St Astoria NY 11106", "lat": 40.75580120321724, "lng": -73.92495414524886, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 19th Morning Subway Petition for Tiffany Cab\u00e1n at Steinway R/M Stop", "url": "https://actionnetwork.org/events/march-19th-morning-subway-petition-for-tiffany-caban-at-steinway-rm-stop", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-19T07:30:00Z", "venue": "Steinway Street Subway Station. Steinway Street and Broadway Astoria NY 11103", "lat": 40.75897499999999, "lng": -73.91900249999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 18th Evening Petition for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/march-18th-evening-petition-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-18T18:30:00Z", "venue": "Vintage.  2314 Ditmars Blvd Astoria NY 11105", "lat": 40.77937984511522, "lng": -73.91536076729746, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 18th Evening Petition for Tiffany Cab\u00e1n in Jackson Heights", "url": "https://actionnetwork.org/events/march-11th-evening-petition-for-tiffany-caban-in-jackson-heights-2", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-18T18:30:00Z", "venue": "La Gran Via Bakery. 78-14 Roosevelt Ave Jackson Heights NY 11372", "lat": 40.747250579491215, "lng": -73.88726054801202, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 18th Morning Subway Petition for Tiffany Cab\u00e1n at Queensbridge F Stop", "url": "https://actionnetwork.org/events/march-11th-morning-subway-petition-for-tiffany-caban-at-queensbridge-f-stop", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-18T06:30:00Z", "venue": "Queensbridge F Stop. Queensbridge Long Island City NY 11101", "lat": 40.756470000000036, "lng": -73.94728999999995, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 18th Morning Subway Petition for Tiffany Cab\u00e1n at Senca Ave M Station", "url": "https://actionnetwork.org/events/march-18th-morning-subway-petition-for-tiffany-caban-at-senca-ave-m-station", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-18T07:00:00Z", "venue": "Seneca Ave M Station. Seneca and Palmetto Ridgewood NY 11385", "lat": 40.702788, "lng": -73.90765350000001, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 12th Morning Subway Petition for Tiffany Cab\u00e1n at Steinway R/M Stop", "url": "https://actionnetwork.org/events/march-14th-morning-subway-petition-for-tiffany-caban-at-steinway-rm-stop", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-12T07:30:00Z", "venue": "Steinway Street Subway Station. Steinway Street and Broadway Astoria NY 11103", "lat": 40.75897499999999, "lng": -73.91900249999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 14th Evening Petition for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/march-11th-evening-petition-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-14T18:30:00Z", "venue": "Apicius Pizzeria. 20-72 Steinway St Astoria NY 11105", "lat": 40.77500059368679, "lng": -73.90348061561532, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 14th Evening Petition for Tiffany Cab\u00e1n in Sunnyside", "url": "https://actionnetwork.org/events/march-14th-evening-petition-for-tiffany-caban-in-sunnyside", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-14T18:30:00Z", "venue": "Marabella. 4107 Greenpoint Ave Sunnyside NY 11377", "lat": 40.740184696375934, "lng": -73.92361490481267, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 12th Evening Petition for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/march-12th-evening-petition-for-tiffany-caban-in-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-12T18:30:00Z", "venue": "Dunkin Donuts.  3530 36th St Astoria NY 11106", "lat": 40.75580120321724, "lng": -73.92495414524886, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "Collect Petition Signatures for Tiffany Cab\u00e1n at Green New Deal Forum", "url": "https://actionnetwork.org/events/collect-petition-signatures-for-tiffany-caban-at-green-new-deal-forum", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-20T18:15:00Z", "venue": "Concert Hall at Society for Ethical Culture. 2 W 64th St New York NY 10023", "lat": 40.77126078628315, "lng": -73.97998254968546, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "Collect Petition Signatures for Tiffany Cab\u00e1n at the Rikers Table ", "url": "https://actionnetwork.org/events/collect-petition-signatures-for-tiffany-caban-at-the-rikers-table", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-16T10:30:00Z", "venue": "Queensbridge Projects. Queensbridge F Stop Long Island City  NY 11106", "lat": 40.76276000000004, "lng": -73.94446999999994, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "3/30 Petition for Tiffany Cab\u00e1n at Sunnyside Greenmarket", "url": "https://actionnetwork.org/events/330-petition-for-tiffany-caban-at-sunnyside-greenmarket", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-30T11:00:00Z", "venue": "Sunnyside Greenmarket. Skillman Avenue and 42nd Street Sunnyside NY 1104", "lat": 40.746995999999996, "lng": -73.92172049999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "3/16 Petition for Tiffany Cab\u00e1n at Sunnyside Greenmarket", "url": "https://actionnetwork.org/events/316-petition-for-tiffany-caban-at-sunnyside-greenmarket", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-16T11:00:00Z", "venue": "Sunnyside Greenmarket. Skillman Avenue and 42nd Street Sunnyside NY 1104", "lat": 40.746995999999996, "lng": -73.92172049999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "3/17 All Day Petitioning for Tiffany Cab\u00e1n in Jackson Heights", "url": "https://actionnetwork.org/events/317-all-day-petitioning-for-tiffany-caban-in-jackson-heights", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-17T09:00:00Z", "venue": "TBD. TBD Jackson Heights NY 11372", "lat": 40.75108420000004, "lng": -73.88532059999994, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 16th Afternoon Petition for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/316-afternoon-petition-for-tiffany-caban-ridgeood", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-16T17:00:00Z", "venue": "Capybara. 853 Wyckoff Ave Ridgewood NY 11385", "lat": 40.69773005135892, "lng": -73.90779664181437, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 16th Afternoon Petition for Tiffany Cab\u00e1n in Astoria", "url": "https://actionnetwork.org/events/316-afternoon-petition-for-tiffany-caban-astoria", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-16T13:00:00Z", "venue": "Mosaic. 25-19 24th Ave Astoria NY 11102", "lat": 40.77486671807906, "lng": -73.9189416083943, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 16th Choose Your Own Adventure Petition for Tiffany Cab\u00e1n in Jackson Heights", "url": "https://actionnetwork.org/events/316-all-day-petitioning-for-tiffany-caban-in-jackson-heights", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-16T11:00:00Z", "venue": "Dan's Apt. Jackson Heights Jackson Heights NY 11372", "lat": 40.75108420000004, "lng": -73.88532059999994, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 15th Morning Subway Petition for Tiffany Cab\u00e1n at Queensboro Plaza Station", "url": "https://actionnetwork.org/events/315-morning-subway-petition-for-tiffany-caban-at-queensboro-plaza-subway-station", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-15T07:00:00Z", "venue": "Queensboro Plaza Subway Station. Queensboro Plaza Long Island City NY 11101", "lat": 40.75258861815297, "lng": -73.9444160217518, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 14th Evening Petition for Tiffany Cab\u00e1n in Jackson Heights", "url": "https://actionnetwork.org/events/314-evening-petition-for-tiffany-caban-jackson-heights", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-14T18:30:00Z", "venue": "Las Americas Bakery. 9304 37th Ave Jackson Heights NY 11372", "lat": 40.750814641670146, "lng": -73.8738682127359, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 14th Morning Subway Petition for Tiffany Cab\u00e1n at Steinway R/M Stop", "url": "https://actionnetwork.org/events/314-morning-subway-petition-for-tiffany-caban-at-steinway-rm-subway-stop", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-14T06:30:00Z", "venue": "Steinway Street Subway Station. Steinway Street and Broadway Astoria NY 11103", "lat": 40.75897499999999, "lng": -73.91900249999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 14th Morning Subway Petition for Tiffany Cab\u00e1n at Astoria Blvd N/W Station", "url": "https://actionnetwork.org/events/314-morning-subway-petition-for-tiffany-caban-at-astoria-blvd-nw-station", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-14T06:30:00Z", "venue": "Astoria Blvd Subway Station. Astoria Blvd and 31st Street Astoria NY 11102", "lat": 40.77006299999999, "lng": -73.918071, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 13th Evening Petition for Tiffany Cab\u00e1n in Long Island City", "url": "https://actionnetwork.org/events/313-evening-petition-for-tiffany-caban-lic", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-13T18:30:00Z", "venue": "Creek and Cave. 10-93 Jackson Ave Long Island City NY 11101", "lat": 40.74320068527712, "lng": -73.9514971661177, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 13th Evening Petition for Tiffany Cab\u00e1n in Jackson Heights", "url": "https://actionnetwork.org/events/313-evening-petition-for-tiffany-caban-jackson-heights", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-13T18:30:00Z", "venue": "Espresso 77. 35-57 77th St Jackson Heights NY 11372", "lat": 40.75014538645949, "lng": -73.88905820163923, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 13th Extra Sunny Evening Petition for Tiffany Cab\u00e1n in Sunnyside ", "url": "https://actionnetwork.org/events/313-evening-petition-for-tiffany-caban-sunnyside", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-13T18:30:00Z", "venue": "Marabella. 4107 Greenpoint Ave Sunnyside NY 11104", "lat": 40.740184696375934, "lng": -73.92361490481267, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 13 Evening Petition for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/313-evening-petition-for-tiffany-caban-ridgewood", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-13T18:30:00Z", "venue": "Milo's Yard. 564 Seneca Ave Ridgewood NY 11385", "lat": 40.704691788016476, "lng": -73.91103986570252, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 13th Morning Subway Petition for Tiffany Cab\u00e1n at 36th Ave N/W Station", "url": "https://actionnetwork.org/events/313-morning-subway-petition-for-tiffany-caban-at-36th-ave-nw-station", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-13T07:00:00Z", "venue": "36th Avenue Subway Station. 36th Ave and 31st Street Astoria NY 11106", "lat": 40.756608, "lng": -73.9297935, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 13th Morning Subway Petition for Tiffany Cab\u00e1n at Roosevelt Ave Subway Station", "url": "https://actionnetwork.org/events/313-morning-subway-petition-for-tiffany-caban-at-roosevelt-ave-subway-station", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-13T05:45:00Z", "venue": "Roosevelt Ave Subway Station (7, R, E, M, F). 74th Street and Roosevelt Ave Jackson Heights NY 11372", "lat": 40.746852000000004, "lng": -73.8914355, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 12th Evening Petition for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/312-evening-petition-for-tiffany-caban-ridgewood", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-12T18:30:00Z", "venue": "Catania Bakery. 487 Harman St, Brooklyn, NY 11237 Ridgewood NY 11385", "lat": 40.704668088262444, "lng": -73.91415412920533, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "March 12th Morning Petition for Tiffany Cab\u00e1n in Ridgewood", "url": "https://actionnetwork.org/events/312-morning-subway-petition-for-tiffany-caban-at-fresh-pond-m-station", "supergroup": null, "campaign": "dsa-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-12T07:00:00Z", "venue": "Fresh Pond M Station. Fresh Pond and 67th Ave Ridgewood NY 11385", "lat": 40.70573999999999, "lng": -73.89656099999999, "logo": "/img/queens-dsa.jpg", "sponsor": "Queens DSA Political Committee"}, {"title": "Jackson Heights Greenmarket", "url": "https://actionnetwork.org/events/jackson-heights-greenmarket", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-17T09:00:00Z", "venue": "Jackson Heights Greenmarket. 34TH Ave At 80th St Jackson Heights NY 11372", "lat": 40.75353, "lng": -73.886904}, {"title": "Petitioning with Sonya Elango", "url": "https://actionnetwork.org/events/petitioning-with-sonya-elango", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-18T18:30:00Z", "venue": "El Buen Sabor Bakery. 4507 Queens Blvd Queens NY 11104", "lat": 40.74348463683664, "lng": -73.91945721539038}, {"title": "Petition in Rockaway", "url": "https://actionnetwork.org/events/petition-in-rockaway", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-12T09:15:00Z", "venue": "Ralph's Coffee Shop. 21-23 Mott Avenue  Far Rockaway NY 11691", "lat": 40.604952449045136, "lng": -73.75443437945033}, {"title": "Petitioning for Tiffany Caban - Rockaway", "url": "https://actionnetwork.org/events/petitioning-for-tiffany-caban-rockaway", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-17T11:00:00Z", "venue": "First Congregrational Church. 320 Beach 94th Street Rockaway Park NY 11694", "lat": 40.58718105844757, "lng": -73.81723018167318}, {"title": "Pastries & Petitioning ", "url": "https://actionnetwork.org/events/pastries-petitioning", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-14T18:30:00Z", "venue": "Rockaway Revolution. 101-04 Shore Front Parkway - 1st Fl Rockaway Park NY 11694", "lat": 40.582384677154444, "lng": -73.82109765784226}, {"title": "Far Rockaway Petitioning Event", "url": "https://actionnetwork.org/events/far-rockaway-petitioning-event", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-16T13:00:00Z", "venue": "Far Rockaway Mott Avenue Station. Far Rockaway Mott Avenue Station Queens NY 11691", "lat": 40.605380000000025, "lng": -73.75536999999997}, {"title": "Petitioning at Queens College", "url": "https://actionnetwork.org/events/petitioning-at-queens-college", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-15T11:00:00Z", "venue": "Queens College. 65-30 Kissena Blvd, Flushing, NY Queens NY 11367", "lat": 40.73607083332412, "lng": -73.81481226219735}, {"title": "Petitioning at Queens Criminal Court", "url": "https://actionnetwork.org/events/petitioning-at-far-rockaway", "supergroup": null, "campaign": "caban-events", "group": "Caban for Queens", "event_type": "Ballot Petition", "start_datetime": "2019-03-17T12:00:00Z", "venue": "Queens Criminal Court. 125-01 Queens Blvd, Kew Gardens Queens NY 11415", "lat": 40.71205818269902, "lng": -73.8253195602457}]`)
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
