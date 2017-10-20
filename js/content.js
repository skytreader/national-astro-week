function Event(title, description){
    this.title = title;
    this.description = description;
}

Event.prototype.makeHTMLElement = function() {
    var mainHolder = document.createElement("div");
    mainHolder.className = "col-3";
    
    var title = document.createElement("h5");
    title.className = "card-title";
    title.innerHTML = this.title;
    mainHolder.appendChild(title);

    var text = document.createElement("p");
    text.className = "card-text text-muted";
    text.innerHTML = this.description;
    mainHolder.appendChild(text);

    return mainHolder;
}

function Listing(date, events){
    this.date = date;
    this.events = events;
}

var EVENT_PLACEHOLDER_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet libero sit amet mauris egestas, vitae mattis magna varius. Nulla massa felis, fermentum a posuere ut, blandit vitae odio.";
var dec8Events = [
    new Event("UP Diliman Astronomy Quizbee", EVENT_PLACEHOLDER_TEXT),
    new Event("Ateneo Astronomy Exhibit", EVENT_PLACEHOLDER_TEXT)
];
var dec9Events = [
    new Event("University of Santo Tomas Astro Open House", EVENT_PLACEHOLDER_TEXT),
    new Event("De La Salle Winter Solstice", EVENT_PLACEHOLDER_TEXT)
];
var dec10Events = [
    new Event("FEU Astrophysics Lecture Series", EVENT_PLACEHOLDER_TEXT),
    new Event("Mapua SpaceEx Engineering Seminar", EVENT_PLACEHOLDER_TEXT),
    new Event("Mall of Asia Planetarium FREE Entrance", EVENT_PLACEHOLDER_TEXT)
];
var dec11Events = [
    new Event("Luneta Telescope Viewing - Manila Street Astronomers", EVENT_PLACEHOLDER_TEXT)
];
var dec12Events = [
    new Event("Astronomy for Pedestrians - National Institute of Physics", EVENT_PLACEHOLDER_TEXT),
    new Event("Meteorology and Astronomy - PAGASA-DOST", EVENT_PLACEHOLDER_TEXT)
];
var dec13Events = [
    new Event("Space Sci-Fi Film Festival - Philippine Science High School", EVENT_PLACEHOLDER_TEXT),
    new Event("Science and Technology Bookfair - Bonifacio Global City", EVENT_PLACEHOLDER_TEXT),
    new Event("Philippine Dark Sky Preservation Lecture", EVENT_PLACEHOLDER_TEXT)
];
var events = [
    Listing("Dis. 8", dec8Events),
    Listing("Dis. 9", dec9Events),
    Listing("Dis. 10", dec10Events),
    Listing("Dis. 11", dec11Events),
    Listing("Dis. 12", dec12Events),
    Listing("Dis. 13", dec13Events)
];

function insertEventList(events, holderId){
    var listHolder = document.getElementById(holderId);
    var limit = events.length;
    for(var i = 0; i < limit; i++){
        listHolder.appendChild(events[i].makeHTMLElement());
    }
}
