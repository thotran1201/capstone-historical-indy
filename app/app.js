// function testLocalStorage() {
//     if(localStorage.getItem('title') !== null) {
//         console.log(localStorage.getItem('title'));
//     }
//     else {
//         console.log("no title");
//     }
    
//     if(localStorage.getItem('description') !== null) {
//         console.log(localStorage.getItem('description'));
//     }
//     else {
//         console.log("no description");
//     }

//     if(localStorage.getItem('imagesIndex') !== null) {
//         console.log(localStorage.getItem('imagesIndex'));
//     }
//     else {
//         console.log("no imagesIndex");
//     }

//     if(localStorage.getItem('sourceImg') !== null) {
//         console.log(localStorage.getItem('sourceImg'));
//     }
//     else {
//         console.log("no sourceImg");
//     }

//     if(localStorage.getItem('lat') !== null) {
//         console.log(localStorage.getItem('lat'));
//     }
//     else {
//         console.log("no lat");
//     }

//     if(localStorage.getItem('lon') !== null) {
//         console.log(localStorage.getItem('lon'));
//     }
//     else {
//         console.log("no lon");
//     }
// }

// testLocalStorage();

let locations = [
    "Indiana_World_War_Memorial_Plaza", //0
    "Indianapolis_Museum_of_Art", //1
    "Soldiers%27_and_Sailors%27_Monument_(Indianapolis)", //2
    "Crown_Hill_Cemetery", //3
    "Indianapolis_Union_Station", //4
    "Indiana_Statehouse", //5
    "The_Propylaeum", //6
    "Benjamin_Harrison_Presidential_Site", //7
    "James_Whitcomb_Riley_Museum_Home", //8
    "Benton_House", //9
    "Scottish_Rite_Cathedral_(Indianapolis)", //10
    "Indianapolis_Motor_Speedway", //11
    "The_Children%27s_Museum_of_Indianapolis", //12
    "Madam_Walker_Legacy_Center", //13
    "Indianapolis_Zoo", //14
    "Athenæum_(Das_Deutsche_Haus)", //15
    "Indiana_Central_Canal", //16
    "Kurt_Vonnegut_Museum_and_Library", //17
    "Hotel_Washington_(Indianapolis,_Indiana)", //18
    "Indiana_Theatre_(Indianapolis)", //19
    "Mass_Ave_Cultural_Arts_District", //20
    "Alfred_M._Glossbrenner_Mansion", //21
    "General_German_Protestant_Orphans_Home", //22
    "Old_Indianapolis_City_Hall", //23
    "Hanna–Ochler–Elder_House", //24
    "Eiteljorg_Museum_of_American_Indians_and_Western_Art", //25
    "Indianapolis_Masonic_Temple", //26
    "Fort_Benjamin_Harrison", //27
    "Crispus_Attucks_High_School", //28
    "Old_Northside_Historic_District", //29
    "Rivoli_Theater_(Indianapolis,_Indiana)", //30
    "Indianapolis_Veterans_Administration_Hospital", //31
    "Indiana_State_Museum", //32
    "Indianapolis_City_Market", //33
    "Morris–Butler_House", //34
    "Birch_Bayh_Federal_Building_and_United_States_Courthouse", //35
    "South_Side_Turnverein_Hall", //36
    "Indiana_Medical_History_Museum", //37
    "Omni_Severin_Hotel", //38
    "Slippery_Noodle_Inn", //39
    "Barnes_and_Thornburg_Building", //40
    "Schnull–Rauch_House", //41
    "Indiana_Historical_Society", //42
    "Calvin_I._Fletcher_House", //43
    "Indiana_School_for_the_Deaf", //44
    "Majestic_Building_(Indianapolis,_Indiana)", //45
    "Hilbert_Circle_Theatre", //46
    "Henry_F._Campbell_Mansion", //47
    "Charles_Kuhn_House", //48
    "Shortridge_High_School", //49
    "St._John_the_Evangelist_Catholic_Church_(Indianapolis,_Indiana)", //50
    "Wheeler–Stokely_Mansion", //51
    "Ransom_Place_Historic_District", //52
    "Riverside_Park_(Indianapolis)", //53
    "Garfield_Park_(Indianapolis)", //54
    "Golden_Hill_Historic_District_(Indianapolis,_Indiana)", //55
    "Indianapolis_Public_Library", //56
    "Balmoral_Court", //57
    "August_Sommer_House", //58
    "Herron–Morton_Place_Historic_District", //59
    "Old_Southport_High_School", //60
    "Crows_Nest,_Indiana", //61
    "Indiana_State_Federation_of_Colored_Women%27s_Clubs", //62
    "Indianapolis_Athletic_Club", //63
    "Roberts_Park_Methodist_Episcopal_Church", //64
    "Allison_Mansion", //65
    "Central_State_Hospital_(Indiana)", //66
    "Old_National_Centre", //67
    "Christ_Church_Cathedral_(Indianapolis)", //68
    "Louis_Levey_Mansion", //69
    "The_Mayleeno" //70

]

let xhr = new XMLHttpRequest();

let contentURL = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages|coordinates&exintro&explaintext&origin=*&format=json&pithumbsize=1000&titles=";

let title = "";

let description = "";

let sourceImg = "";

let lat;

let lon;

function setup(locationIndex, imagesIndex) {
    let place = locations[locationIndex]

    goWiki(place);
    localStorage.setItem('imagesIndex', imagesIndex);
}

function goWiki(locationname) {
    let url = contentURL + locationname;
    console.log(url);
    getJSON(url);
}

function getJSON(url, method) {
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if(xhr.status >= 200 && xhr.status < 400) {
            let data = JSON.parse(this.response);
            
            getContent(data); 
            location.href = "historicalfacts.html";  
            
        }
        else {
            console.log(xhr.statusText);
        }
        
    }
    
    xhr.send();
}

function getContent(data) {
    let page = data.query.pages;
    let pageID = Object.keys(data.query.pages);
    description = page[pageID].extract;
    title = page[pageID].title;
    sourceImg = page[pageID].thumbnail.source;
    lat = page[pageID].coordinates[0].lat;
    lon = page[pageID].coordinates[0].lon;
    localStorage.setItem('title', title);
    localStorage.setItem('description', description);
    localStorage.setItem('sourceImg', sourceImg);
    localStorage.setItem('lat', lat);
    localStorage.setItem('lon', lon);
    // testLocalStorage();
}