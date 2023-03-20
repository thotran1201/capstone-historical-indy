let factstitle = "";
let factsdescription = '';

if(localStorage.getItem('title') !== null) {
    factstitle = localStorage.getItem('title');
}

else {
    console.log("no title");
    factstitle = "no title";
}

if(localStorage.getItem('description') !== null) {
    factsdescription = localStorage.getItem('description');
}

else {
    console.log("no description");
    factsdescription = "no description";
}

let historicalfactstitle = document.getElementById("featured-post-title");

let historicalfactsparagraph = document.getElementById("historical-location-paragraph");

historicalfactstitle.innerHTML = factstitle;

historicalfactsparagraph.innerHTML = factsdescription;