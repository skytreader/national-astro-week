function Event(title, description){
    this.title = title;
    this.description = description;
}

function Listing(date, events){
    this.date = date;
    this.events = events;
}

var EVENT_PLACEHOLDER_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet libero sit amet mauris egestas, vitae mattis magna varius. Nulla massa felis, fermentum a posuere ut, blandit vitae odio.";
var dec8Events = [
    Event("UP Diliman Astronomy Quizbee", EVENT_PLACEHOLDER_TEXT),
    Event("Ateneo Astronomy Exhibit", EVENT_PLACEHOLDER_TEXT)
];
var dec9Events = [
    Event("University of Santo Tomas Astro Open House", EVENT_PLACEHOLDER_TEXT),
    Event("De La Salle Winter Solstice", EVENT_PLACEHOLDER_TEXT)
];
var dec10Events = [
    Event("FEU Astrophysics Lecture Series", EVENT_PLACEHOLDER),
    Event("Mapua SpaceEx Engineering Seminar", EVENT_PLACEHOLDER),
    Event("Mall of Asia Planetarium FREE Entrance", EVENT_PLACEHOLDER)
];
var dec11Events = [
    Event("Luneta Telescope Viewing - Manila Street Astronomers", EVENT_PLACEHOLDER)
];
var dec12Events = [
    Event("Astronomy for Pedestrians - National Institute of Physics", EVENT_PLACEHOLDER),
    Event("Meteorology and Astronomy - PAGASA-DOST", EVENT_PLACEHOLDER)
];
var dec13Events = [
    Event("Space Sci-Fi Film Festival - Philippine Science High School", EVENT_PLACEHOLDER),
    Event("Science and Technology Bookfair - Bonifacio Global City", EVENT_PLACEHOLDER),
    Event("Philippine Dark Sky Preservation Lecture", EVENT_PLACEHOLDER)
];
var events = [
    Listing("Dis. 8", dec8Events),
    Listing("Dis. 9", dec9Events),
    Listing("Dis. 10", dec10Events),
    Listing("Dis. 11", dec11Events),
    Listing("Dis. 12", dec12Events),
    Listing("Dis. 13", dec13Events)
];
