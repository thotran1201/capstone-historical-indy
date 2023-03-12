let locations = [
    "Indiana_World_War_Memorial_Plaza",
    "Indianapolis_Museum_of_Art",
    "Soldiers%27_and_Sailors%27_Monument_(Indianapolis)",
    "Crown_Hill_Cemetery",
    "Indianapolis_Union_Station",
    "Indiana_Statehouse",
    "The_Propylaeum",
    "Benjamin_Harrison_Presidential_Site",
    "James_Whitcomb_Riley_Museum_Home",
    "Benton_House",
    "Scottish_Rite_Cathedral_(Indianapolis)",
    "Indianapolis_Motor_Speedway",
    "The_Children%27s_Museum_of_Indianapolis",
    "Madam_Walker_Legacy_Center",
    "Indianapolis_Zoo",
    "Athenæum_(Das_Deutsche_Haus)",
    "Indiana_Central_Canal"

]

let xhr = new XMLHttpRequest();

let searchURL = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search=";

let contentURL = "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&origin=*&rvprop=content&format=json&titles=";

let title = "";

let description = "";

function setup() {
    goWiki("Indiana_World_War_Memorial_Plaza");
}

function goWiki(locationname) {
    let url = contentURL + locationname;
    getJSON(url);
}

function getJSON(url) {
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if(xhr.status >= 200 && xhr.status < 400) {
            let data = JSON.parse(this.response);
            console.log(data);
            getContent(data);
        }
        else {
            console.log(xhr.statusText);
        }
        
    }
    
    xhr.send();
}

function getContent(data) {
    //let pageID = Object.keys(data.query.pages)
    let page = data.query.pages;
    let pageID = Object.keys(data.query.pages);
    description = page[pageID].revisions[0] ['*'];
    title = page[pageID].title;
    console.log(title);
    console.log(page);
    console.log(description);
}