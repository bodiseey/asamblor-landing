export type StateData = {
  slug: string; // kebab-case
  name: string; // full
  abbr: string; // 2-letter
  region: "Northeast" | "Southeast" | "Midwest" | "Southwest" | "West" | "Mountain";
  corridors: string[]; // primary interstates with brief context
  hubs: string[]; // top 2-4 trucking cities
  notes: string; // regional industry context, port/border facts
  adjacentStates: string[]; // 3-5 abbreviations for "operating radius" examples
  tier: "tier1" | "tier2" | "tier3"; // freight volume / MC density
};

export const STATES: StateData[] = [
  // — TIER 1: top freight states —
  {
    slug: "texas", name: "Texas", abbr: "TX", region: "Southwest", tier: "tier1",
    corridors: ["I-10 (LA→FL coast)", "I-35 (Mexico→Minneapolis)", "I-20 (Dallas→Atlanta)", "I-45 (Dallas→Houston)"],
    hubs: ["Dallas / Fort Worth", "Houston", "San Antonio", "Laredo (Mexico border)"],
    notes: "Largest motor-carrier population in the US. Oil & gas freight in the Permian, port volume out of Houston, the busiest US–Mexico inland border crossing at Laredo, and a huge cross-dock corridor on I-35.",
    adjacentStates: ["OK", "LA", "AR", "NM"],
  },
  {
    slug: "california", name: "California", abbr: "CA", region: "West", tier: "tier1",
    corridors: ["I-5 (Mexico→Oregon)", "I-10 (LA→AZ)", "I-15 (LA→Las Vegas)", "I-40 (Barstow→AZ)"],
    hubs: ["Los Angeles / Long Beach (port)", "Oakland (port)", "Sacramento", "Riverside / San Bernardino (Inland Empire warehousing)"],
    notes: "Largest US container-port complex (LA/Long Beach), produce belt in the Central Valley, and CARB clean-truck rules that shape carrier fleet mix. Drayage and reefer are the dominant equipment classes.",
    adjacentStates: ["NV", "AZ", "OR"],
  },
  {
    slug: "florida", name: "Florida", abbr: "FL", region: "Southeast", tier: "tier1",
    corridors: ["I-75 (Miami→Atlanta)", "I-95 (Miami→ME)", "I-10 (Jacksonville→TX)", "I-4 (Tampa→Orlando)"],
    hubs: ["Miami (port + Latin America gateway)", "Jacksonville (port + intermodal)", "Tampa", "Orlando"],
    notes: "Major import gateway from Latin America and the Caribbean. Reefer-heavy out of Miami for produce, and a strong owner-operator population in central FL. Hurricane-season operations affect insurance and routing.",
    adjacentStates: ["GA", "AL"],
  },
  {
    slug: "illinois", name: "Illinois", abbr: "IL", region: "Midwest", tier: "tier1",
    corridors: ["I-80 (cross-country)", "I-90 (Chicago→Seattle)", "I-94 (Chicago→Detroit)", "I-55 (Chicago→New Orleans)", "I-57 (Chicago→Memphis)"],
    hubs: ["Chicago (BNSF + UP intermodal megahub)", "Joliet (CenterPoint inland port)", "Rockford"],
    notes: "Chicago is the #1 US intermodal rail hub — every Class I railroad meets here. Massive cross-dock and drayage volume; CenterPoint Joliet is one of the largest inland ports in North America.",
    adjacentStates: ["WI", "IN", "IA", "MO", "KY"],
  },
  {
    slug: "georgia", name: "Georgia", abbr: "GA", region: "Southeast", tier: "tier1",
    corridors: ["I-75 (FL→Detroit)", "I-85 (AL→Richmond)", "I-95 (FL→ME)", "I-20 (TX→SC)"],
    hubs: ["Atlanta (largest US inland logistics hub by population)", "Savannah (port — fastest-growing US container terminal)", "Macon"],
    notes: "Atlanta sits at the intersection of three interstates and is the dominant Southeast distribution center. Port of Savannah handles fast-growing container volume, driving drayage and reefer demand inland.",
    adjacentStates: ["FL", "AL", "TN", "NC", "SC"],
  },
  {
    slug: "pennsylvania", name: "Pennsylvania", abbr: "PA", region: "Northeast", tier: "tier1",
    corridors: ["I-76 / PA Turnpike (Pittsburgh→Philly)", "I-78 (Harrisburg→NYC)", "I-80 (cross-country)", "I-95 (Philly corridor)"],
    hubs: ["Philadelphia (port)", "Harrisburg / Lehigh Valley (e-commerce distribution corridor)", "Pittsburgh"],
    notes: "Lehigh Valley has become one of the largest east-coast e-commerce fulfillment corridors. Strong owner-operator population on I-80, plus port volume out of Philadelphia.",
    adjacentStates: ["OH", "WV", "MD", "NJ", "NY"],
  },
  {
    slug: "ohio", name: "Ohio", abbr: "OH", region: "Midwest", tier: "tier1",
    corridors: ["I-70 (cross-country)", "I-71 (Cleveland→Cincinnati)", "I-75 (Detroit→FL)", "I-80 (cross-country)", "I-90 (Chicago→Boston)"],
    hubs: ["Columbus (Rickenbacker air cargo + distribution)", "Cleveland", "Cincinnati / Northern Kentucky (CVG)", "Toledo"],
    notes: "Columbus is one of the fastest-growing US distribution markets thanks to Rickenbacker air-cargo + AB-mile access to 50%+ of US population. Cross-dock and dry-van density is among the highest in the Midwest.",
    adjacentStates: ["MI", "IN", "KY", "WV", "PA"],
  },
  {
    slug: "north-carolina", name: "North Carolina", abbr: "NC", region: "Southeast", tier: "tier1",
    corridors: ["I-40 (TN→Wilmington)", "I-85 (AL→VA)", "I-95 (FL→ME)", "I-77 (SC→VA)"],
    hubs: ["Charlotte", "Greensboro / High Point (furniture freight)", "Raleigh / Durham"],
    notes: "Charlotte and Greensboro are major Southeast distribution centers; furniture and textile freight remain strong out of High Point. Growing port volume at Wilmington.",
    adjacentStates: ["VA", "SC", "GA", "TN"],
  },
  {
    slug: "indiana", name: "Indiana", abbr: "IN", region: "Midwest", tier: "tier1",
    corridors: ["I-65 (Chicago→Mobile)", "I-70 (cross-country)", "I-74 (IL→OH)", "I-94 (Chicago→Detroit)"],
    hubs: ["Indianapolis (Crossroads of America)", "Fort Wayne", "Gary (Chicago metro)"],
    notes: "Indianapolis sits at the intersection of more interstates than any other US city — true 'Crossroads of America.' FedEx hub at IND drives night-shift trucking volume.",
    adjacentStates: ["IL", "MI", "OH", "KY"],
  },
  {
    slug: "tennessee", name: "Tennessee", abbr: "TN", region: "Southeast", tier: "tier1",
    corridors: ["I-40 (cross-country)", "I-65 (Chicago→Mobile)", "I-75 (Detroit→FL)", "I-24 (St Louis→Chattanooga)"],
    hubs: ["Memphis (FedEx World Hub + #1 US air-cargo airport)", "Nashville", "Knoxville", "Chattanooga"],
    notes: "Memphis is the #1 US air-cargo airport and the FedEx World Hub — drives massive late-night and early-morning trucking demand. Nashville is the fastest-growing Southeast distribution market.",
    adjacentStates: ["KY", "MS", "AL", "GA", "NC", "AR"],
  },

  // — TIER 2: high-volume freight states —
  {
    slug: "michigan", name: "Michigan", abbr: "MI", region: "Midwest", tier: "tier2",
    corridors: ["I-94 (Chicago→Detroit→Port Huron)", "I-75 (Detroit→Sault Ste Marie)", "I-96"],
    hubs: ["Detroit (auto industry + Ambassador Bridge to Canada)", "Grand Rapids", "Flint"],
    notes: "Auto-industry freight dominates: parts in, finished vehicles out. Ambassador Bridge at Detroit is the busiest US–Canada border crossing for trucks. Reefer activity along Lake Michigan produce belt.",
    adjacentStates: ["OH", "IN", "WI"],
  },
  {
    slug: "arizona", name: "Arizona", abbr: "AZ", region: "Southwest", tier: "tier2",
    corridors: ["I-10 (LA→FL coast)", "I-40 (Barstow→OK)", "I-17 (Phoenix→Flagstaff)"],
    hubs: ["Phoenix (Sun Corridor distribution)", "Tucson", "Nogales (Mexico border — produce)"],
    notes: "Nogales is the largest US entry point for fresh produce from Mexico (reefer-heavy). Phoenix is one of the fastest-growing US distribution markets thanks to land + I-10 access to West Coast.",
    adjacentStates: ["CA", "NV", "UT", "NM"],
  },
  {
    slug: "new-jersey", name: "New Jersey", abbr: "NJ", region: "Northeast", tier: "tier2",
    corridors: ["I-95 / NJ Turnpike", "I-78", "I-80", "I-287"],
    hubs: ["Newark / Elizabeth (Port NY/NJ — largest east coast port)", "Edison", "Trenton"],
    notes: "Port NY/NJ is the largest container port on the US east coast. Drayage and intermodal dominate; high cost of operations and congestion make carrier acquisition particularly competitive.",
    adjacentStates: ["NY", "PA", "DE"],
  },
  {
    slug: "new-york", name: "New York", abbr: "NY", region: "Northeast", tier: "tier2",
    corridors: ["I-87 (NYC→Canada)", "I-90 (Boston→Buffalo)", "I-81 (Syracuse→PA)", "I-95 (NJ→CT)"],
    hubs: ["NYC metro", "Buffalo / Niagara (Canada border)", "Albany", "Syracuse"],
    notes: "NYC is a congestion / drayage market; upstate (Buffalo, Syracuse, Albany) is a long-haul corridor through the Mohawk Valley. Buffalo–Fort Erie is a major US–Canada truck crossing.",
    adjacentStates: ["NJ", "CT", "MA", "PA", "VT"],
  },
  {
    slug: "virginia", name: "Virginia", abbr: "VA", region: "Southeast", tier: "tier2",
    corridors: ["I-81 (TN→PA)", "I-95 (FL→ME)", "I-64 (St Louis→Hampton Roads)", "I-66"],
    hubs: ["Norfolk / Hampton Roads (port)", "Richmond", "Northern Virginia (DC suburbs)"],
    notes: "Port of Virginia at Norfolk is one of the largest US east-coast ports and continues to grow. I-81 is the dominant inland trucking corridor through Appalachia.",
    adjacentStates: ["NC", "TN", "KY", "WV", "MD"],
  },
  {
    slug: "missouri", name: "Missouri", abbr: "MO", region: "Midwest", tier: "tier2",
    corridors: ["I-70 (cross-country)", "I-44 (St Louis→OK)", "I-55 (Chicago→New Orleans)", "I-35"],
    hubs: ["Kansas City (rail-truck interchange)", "St. Louis (Mississippi River + rail)", "Springfield"],
    notes: "Kansas City rivals Chicago as a Class I rail interchange. St. Louis is the second-largest US inland port by tonnage. Both anchor cross-country flows on I-70 and I-44.",
    adjacentStates: ["IL", "KS", "OK", "AR", "TN", "KY", "IA", "NE"],
  },
  {
    slug: "oklahoma", name: "Oklahoma", abbr: "OK", region: "Southwest", tier: "tier2",
    corridors: ["I-40 (cross-country)", "I-35 (TX→KS)", "I-44 (TX→MO)"],
    hubs: ["Oklahoma City", "Tulsa"],
    notes: "Crossroads of three major interstates. Strong energy-sector freight, plus a steady flow of small fleets and owner-operators serving I-40 long-haul.",
    adjacentStates: ["TX", "AR", "MO", "KS", "NM"],
  },
  {
    slug: "arkansas", name: "Arkansas", abbr: "AR", region: "Southeast", tier: "tier2",
    corridors: ["I-30 (TX→Little Rock)", "I-40 (cross-country)", "I-55 (Memphis→St Louis)"],
    hubs: ["Little Rock", "Lowell / Bentonville (J.B. Hunt + Walmart HQ region)", "Fort Smith"],
    notes: "Home to J.B. Hunt and Walmart. The Bentonville region is one of the most concentrated trucking-decision-maker markets in the US.",
    adjacentStates: ["TX", "OK", "MO", "TN", "MS", "LA"],
  },
  {
    slug: "kentucky", name: "Kentucky", abbr: "KY", region: "Southeast", tier: "tier2",
    corridors: ["I-65 (Chicago→Mobile)", "I-75 (Detroit→FL)", "I-64 (St Louis→Hampton Roads)", "I-71"],
    hubs: ["Louisville (UPS Worldport)", "Lexington", "Northern Kentucky / Cincinnati metro"],
    notes: "Louisville is home to UPS Worldport — the largest fully-automated package handling facility in the world — making KY a critical late-night and early-morning trucking market.",
    adjacentStates: ["OH", "WV", "VA", "TN", "MO", "IL", "IN"],
  },
  {
    slug: "south-carolina", name: "South Carolina", abbr: "SC", region: "Southeast", tier: "tier2",
    corridors: ["I-95 (FL→ME)", "I-26 (Charleston→TN)", "I-85 (AL→VA)"],
    hubs: ["Charleston (port — fastest-growing on east coast)", "Greenville / Spartanburg (BMW + advanced manufacturing)", "Columbia"],
    notes: "Charleston is one of the fastest-growing US container ports. Upstate SC (Greenville/Spartanburg) is a major advanced-manufacturing and auto corridor.",
    adjacentStates: ["NC", "GA"],
  },
  {
    slug: "washington", name: "Washington", abbr: "WA", region: "West", tier: "tier2",
    corridors: ["I-5 (Mexico→Canada border)", "I-90 (Seattle→Boston)", "I-82"],
    hubs: ["Seattle / Tacoma (NWSA port complex)", "Spokane", "Kent / Auburn (warehousing)"],
    notes: "Northwest Seaport Alliance (Seattle + Tacoma) is the 4th-largest US container port complex. Strong reefer activity for produce out of Yakima Valley.",
    adjacentStates: ["OR", "ID"],
  },
  {
    slug: "alabama", name: "Alabama", abbr: "AL", region: "Southeast", tier: "tier2",
    corridors: ["I-65 (Chicago→Mobile)", "I-20 (TX→GA)", "I-10 (LA→FL)", "I-85 (Montgomery→Atlanta)"],
    hubs: ["Birmingham", "Mobile (port)", "Huntsville", "Montgomery"],
    notes: "Mobile is a Gulf port and the largest US auto-export gateway (Mercedes, Hyundai, Honda plants drive parts and finished-vehicle freight).",
    adjacentStates: ["MS", "TN", "GA", "FL"],
  },
  {
    slug: "louisiana", name: "Louisiana", abbr: "LA", region: "Southeast", tier: "tier2",
    corridors: ["I-10 (TX→FL)", "I-20 (TX→GA)", "I-49 (Lafayette→Shreveport)", "I-12"],
    hubs: ["New Orleans (port + Mississippi River)", "Baton Rouge", "Shreveport", "Lake Charles"],
    notes: "Port of New Orleans + Port of South Louisiana handle huge bulk/petrochemical volume. Mississippi River corridor anchors barge–truck interchange.",
    adjacentStates: ["TX", "AR", "MS"],
  },
  {
    slug: "oregon", name: "Oregon", abbr: "OR", region: "West", tier: "tier2",
    corridors: ["I-5 (Mexico→Canada border)", "I-84 (Portland→UT)"],
    hubs: ["Portland (port + intermodal)", "Salem", "Eugene"],
    notes: "Portland anchors Pacific Northwest distribution. Strong reefer activity for produce; I-84 connects to the intermountain West.",
    adjacentStates: ["WA", "CA", "ID", "NV"],
  },
  {
    slug: "colorado", name: "Colorado", abbr: "CO", region: "Mountain", tier: "tier2",
    corridors: ["I-25 (NM→WY)", "I-70 (cross-country)", "I-76"],
    hubs: ["Denver", "Colorado Springs", "Pueblo"],
    notes: "Denver is the dominant Mountain West distribution hub. Growing population drives strong consumer-goods freight; high-altitude routes require equipment-specific knowledge.",
    adjacentStates: ["WY", "NE", "KS", "OK", "NM", "UT"],
  },
  {
    slug: "minnesota", name: "Minnesota", abbr: "MN", region: "Midwest", tier: "tier2",
    corridors: ["I-35 (TX→MN)", "I-94 (Chicago→Seattle)", "I-90"],
    hubs: ["Twin Cities (Minneapolis / St Paul)", "Duluth (Great Lakes port)"],
    notes: "Twin Cities is a major Upper Midwest distribution hub. Northern-tier carriers handle iron ore, ag, and cross-border Canada freight at International Falls.",
    adjacentStates: ["WI", "IA", "SD", "ND"],
  },
  {
    slug: "wisconsin", name: "Wisconsin", abbr: "WI", region: "Midwest", tier: "tier2",
    corridors: ["I-94 (Chicago→Twin Cities)", "I-90 (Chicago→Seattle)", "I-43"],
    hubs: ["Milwaukee", "Madison", "Green Bay (paper + ag)"],
    notes: "Dairy and paper freight dominate. Strong intermodal interchange with Chicago via I-94.",
    adjacentStates: ["IL", "IA", "MN", "MI"],
  },
  {
    slug: "iowa", name: "Iowa", abbr: "IA", region: "Midwest", tier: "tier2",
    corridors: ["I-80 (cross-country)", "I-35 (TX→MN)", "I-29"],
    hubs: ["Des Moines", "Cedar Rapids", "Davenport (Quad Cities)"],
    notes: "Corn-belt ag freight (grain, hogs, ethanol) dominates. I-80 is one of the busiest east-west truck corridors in the US.",
    adjacentStates: ["IL", "MO", "NE", "SD", "MN", "WI"],
  },
  {
    slug: "kansas", name: "Kansas", abbr: "KS", region: "Midwest", tier: "tier2",
    corridors: ["I-70 (cross-country)", "I-35 (TX→MN)"],
    hubs: ["Wichita", "Kansas City (KS side)", "Topeka"],
    notes: "Wheat, beef, and aviation freight (Wichita is a major aircraft-manufacturing hub). Kansas City metro straddles MO–KS for major rail-truck activity.",
    adjacentStates: ["MO", "OK", "CO", "NE"],
  },
  {
    slug: "nebraska", name: "Nebraska", abbr: "NE", region: "Midwest", tier: "tier2",
    corridors: ["I-80 (cross-country)", "I-29"],
    hubs: ["Omaha (Werner Enterprises HQ)", "Lincoln"],
    notes: "Home to Werner Enterprises (one of the largest US carriers). Beef-processing freight is concentrated here, with high outbound reefer demand.",
    adjacentStates: ["IA", "MO", "KS", "CO", "WY", "SD"],
  },
  {
    slug: "maryland", name: "Maryland", abbr: "MD", region: "Northeast", tier: "tier2",
    corridors: ["I-95 (FL→ME)", "I-70 (cross-country)", "I-68"],
    hubs: ["Baltimore (port — auto + roro)", "Hagerstown (FedEx hub)"],
    notes: "Port of Baltimore is the largest US roll-on/roll-off (auto) port. Hagerstown's FedEx hub anchors I-81 night-shift trucking.",
    adjacentStates: ["VA", "WV", "PA", "DE"],
  },
  {
    slug: "utah", name: "Utah", abbr: "UT", region: "Mountain", tier: "tier2",
    corridors: ["I-15 (San Diego→Canada border)", "I-80 (cross-country)", "I-70 (cross-country)"],
    hubs: ["Salt Lake City (Mountain West distribution hub)", "Ogden", "Provo"],
    notes: "Salt Lake City is the dominant Intermountain West distribution market. Major UPS and FedEx ground hubs; intermodal interchange via UP and BNSF.",
    adjacentStates: ["NV", "AZ", "CO", "WY", "ID"],
  },
  {
    slug: "nevada", name: "Nevada", abbr: "NV", region: "West", tier: "tier2",
    corridors: ["I-15 (LA→SLC)", "I-80 (cross-country)"],
    hubs: ["Las Vegas (convention + consumer goods)", "Reno-Sparks (West Coast distribution)"],
    notes: "Reno-Sparks is a fast-growing West Coast distribution hub (Tesla Gigafactory and Amazon fulfillment). Las Vegas handles consumer goods and convention freight.",
    adjacentStates: ["CA", "AZ", "UT", "ID", "OR"],
  },

  // — TIER 3: smaller-volume but still active markets —
  {
    slug: "mississippi", name: "Mississippi", abbr: "MS", region: "Southeast", tier: "tier3",
    corridors: ["I-55 (Chicago→New Orleans)", "I-20 (TX→GA)", "I-10 (LA→FL)"],
    hubs: ["Jackson", "Gulfport / Biloxi (port)", "Tupelo (furniture)"],
    notes: "Furniture freight out of Tupelo, port volume at Gulfport, and Gulf Coast intermodal. I-55 anchors north-south flow to Memphis and New Orleans.",
    adjacentStates: ["TN", "AL", "LA", "AR"],
  },
  {
    slug: "connecticut", name: "Connecticut", abbr: "CT", region: "Northeast", tier: "tier3",
    corridors: ["I-95 (FL→ME)", "I-91 (New Haven→VT)", "I-84"],
    hubs: ["Hartford", "New Haven", "Bridgeport"],
    notes: "Dense, congested LTL and parcel market. High cost of operations; specialized last-mile carriers serve the I-95 northeast corridor.",
    adjacentStates: ["NY", "MA", "RI"],
  },
  {
    slug: "massachusetts", name: "Massachusetts", abbr: "MA", region: "Northeast", tier: "tier3",
    corridors: ["I-90 / Mass Pike (NY→Boston)", "I-95 (FL→ME)", "I-93"],
    hubs: ["Boston (port)", "Worcester", "Springfield"],
    notes: "Major New England distribution hub with port volume at Boston and Conley Terminal. Congested but high-rate market.",
    adjacentStates: ["NY", "CT", "RI", "VT", "NH"],
  },
  {
    slug: "new-hampshire", name: "New Hampshire", abbr: "NH", region: "Northeast", tier: "tier3",
    corridors: ["I-93 (MA→Vermont)", "I-95 (Maine→MA)", "I-89"],
    hubs: ["Manchester", "Nashua"],
    notes: "Smaller carrier population, primarily regional LTL serving Boston and northern New England. Some tax-advantaged drayage out of Portsmouth.",
    adjacentStates: ["MA", "VT", "ME"],
  },
  {
    slug: "maine", name: "Maine", abbr: "ME", region: "Northeast", tier: "tier3",
    corridors: ["I-95 (FL→Canada border)", "I-295"],
    hubs: ["Portland", "Bangor"],
    notes: "Forest-products, lobster, and seafood reefer freight. I-95 corridor ends at the Canada border at Houlton — major US–Canada truck crossing.",
    adjacentStates: ["NH"],
  },
  {
    slug: "vermont", name: "Vermont", abbr: "VT", region: "Northeast", tier: "tier3",
    corridors: ["I-89 (NH→Canada)", "I-91 (MA→Canada)"],
    hubs: ["Burlington", "Montpelier"],
    notes: "Small carrier base; cross-border Canada freight (dairy, lumber, maple) and northeast LTL.",
    adjacentStates: ["NY", "MA", "NH"],
  },
  {
    slug: "rhode-island", name: "Rhode Island", abbr: "RI", region: "Northeast", tier: "tier3",
    corridors: ["I-95 (FL→ME)", "I-195"],
    hubs: ["Providence"],
    notes: "Small geography, dense LTL and parcel volume on I-95. Port of Providence handles bulk freight.",
    adjacentStates: ["MA", "CT"],
  },
  {
    slug: "delaware", name: "Delaware", abbr: "DE", region: "Northeast", tier: "tier3",
    corridors: ["I-95 (FL→ME)", "I-295", "I-495"],
    hubs: ["Wilmington (port)", "Dover"],
    notes: "Port of Wilmington handles fresh fruit and auto imports. I-95 corridor through New Castle is highest-traffic segment in the state.",
    adjacentStates: ["PA", "NJ", "MD"],
  },
  {
    slug: "west-virginia", name: "West Virginia", abbr: "WV", region: "Southeast", tier: "tier3",
    corridors: ["I-64 (St Louis→Hampton Roads)", "I-77 (SC→OH)", "I-79"],
    hubs: ["Charleston", "Huntington", "Morgantown"],
    notes: "Mountainous routes — heavy-haul coal, gas, and chemical freight. Significant equipment-specific knowledge required.",
    adjacentStates: ["VA", "KY", "OH", "PA", "MD"],
  },
  {
    slug: "idaho", name: "Idaho", abbr: "ID", region: "Mountain", tier: "tier3",
    corridors: ["I-84 (OR→UT)", "I-15 (UT→Canada)", "I-90"],
    hubs: ["Boise", "Idaho Falls"],
    notes: "Ag freight (potatoes, dairy, sugar beets) is dominant. I-84 connects Pacific Northwest to the Mountain West.",
    adjacentStates: ["WA", "OR", "NV", "UT", "WY", "MT"],
  },
  {
    slug: "montana", name: "Montana", abbr: "MT", region: "Mountain", tier: "tier3",
    corridors: ["I-90 (Chicago→Seattle)", "I-94", "I-15"],
    hubs: ["Billings", "Missoula", "Great Falls"],
    notes: "Vast geography, fewer carriers, long-haul cross-country trips. Ag, oil/gas, and timber freight are dominant.",
    adjacentStates: ["ID", "WY", "ND", "SD"],
  },
  {
    slug: "wyoming", name: "Wyoming", abbr: "WY", region: "Mountain", tier: "tier3",
    corridors: ["I-80 (cross-country)", "I-25 (NM→MT)", "I-90"],
    hubs: ["Cheyenne", "Casper"],
    notes: "Energy-sector freight (coal, oil, gas). I-80 across southern Wyoming is one of the most weather-difficult truck corridors in the lower 48.",
    adjacentStates: ["MT", "ID", "UT", "CO", "NE", "SD"],
  },
  {
    slug: "north-dakota", name: "North Dakota", abbr: "ND", region: "Midwest", tier: "tier3",
    corridors: ["I-94 (Chicago→Seattle)", "I-29 (KC→Canada)"],
    hubs: ["Fargo", "Bismarck", "Williston (Bakken oil)"],
    notes: "Bakken oilfield freight (frac sand, crude, equipment) drives huge spikes in trucking demand. Ag freight is dominant outside the energy patch.",
    adjacentStates: ["MN", "SD", "MT"],
  },
  {
    slug: "south-dakota", name: "South Dakota", abbr: "SD", region: "Midwest", tier: "tier3",
    corridors: ["I-90 (Chicago→Seattle)", "I-29 (KC→Canada)"],
    hubs: ["Sioux Falls", "Rapid City"],
    notes: "Ag and livestock freight. Sioux Falls is a regional distribution hub for the northern plains.",
    adjacentStates: ["ND", "MN", "IA", "NE", "WY", "MT"],
  },
  {
    slug: "new-mexico", name: "New Mexico", abbr: "NM", region: "Southwest", tier: "tier3",
    corridors: ["I-40 (cross-country)", "I-25 (Mexico→CO)", "I-10"],
    hubs: ["Albuquerque", "Santa Fe", "Las Cruces"],
    notes: "Major east-west long-haul corridor on I-40. Strong Mexico-border trucking volume through Santa Teresa (alternate to El Paso).",
    adjacentStates: ["TX", "OK", "CO", "AZ"],
  },
];

export const STATE_SLUGS = STATES.map((s) => s.slug);

export function getState(slug: string): StateData | undefined {
  return STATES.find((s) => s.slug === slug);
}

export function getAdjacentStates(abbrs: string[]): StateData[] {
  return abbrs.map((a) => STATES.find((s) => s.abbr === a)).filter((x): x is StateData => !!x);
}
