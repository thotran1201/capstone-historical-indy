let factstitle = "";
let factsdescription = '';
let imagesIndex = -1;
let factSourceImg = "";

function historicalfactsSetUp() {
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
    
    if(localStorage.getItem('imagesIndex') !== null) {
        imagesIndex = localStorage.getItem('imagesIndex');
    }
    
    else {
        console.log("no images");
    }
    
    if(localStorage.getItem('sourceImg') !== null) {
        factSourceImg = localStorage.getItem('sourceImg');
        console.log(factSourceImg);
    }
    
    else {
        console.log("no sourceImg");
    }
    
    let historicalfactstitle = document.getElementById("featured-post-title");
    
    let historicalfactsparagraph = document.getElementById("historical-location-paragraph");
    
    historicalfactstitle.innerHTML = factstitle;
    
    historicalfactsparagraph.innerHTML = factsdescription;
    
    let heroFactsImage = document.getElementById("hero-facts-image");
    
    heroFactsImage.style.backgroundImage = `url(${factSourceImg})`;
}

historicalfactsSetUp();

//folder images
let foldername = [
    "benjamin-harrison-site", //0
    "benton-house", //1
    "majestic-building", //2
    "birch-bayh-federal-building-and-united-states-courthouse", //3
    "calvin-i-fletcher-house", //4
    "circle-downtown", //5
    "crispus-attucks-high-school", //6
    "crown-hill-cemetery", //7
    "glossbrenner-mansion", //8
    "eiteljorg-museum", //9
    "fort-benjamin-harrison", //10
    "general-german-protestant-orphans-home", //11
    "hannah-house", //12
    "hilbert-circle-theatre", //13
    "hiram-a-haverstick-farmstead", //14
    "hotel-washington", //15
    "indiana-historical-society", //16
    "indiana-medical-history-museum", //17
    "indianapolis-city-market", //18
    "indianapolis-masonic-temple", //19
    "indianapolis-motor-speedway", //20
    "indianapolis-propyleum", //21
    "indianapolis-zoo", //22
    "indiana-repertory-theatre", //23
    "indiana-school-for-the-deaf", //24
    "indiana-state-capitol", //25
    "indiana-state-museum", //26
    "indiana-world-war-memorial", //27
    "james-whitcombe-house", //28
    "kurt-vonnegut-museum", //29
    "mass-ave", //30
    "morris-butler-house", //31
    "newfields", //32
    "nicholson-rand-house", //33
    "old-indianapolis-city-hall", //34
    "old-northside", //35
    "omni-severan-hotel", //36
    "rivoli-theater", //37
    "schnull-rauch-house", //38
    "scottish-rite-cathedral", //39
    "slippery-noodle-inn", //40
    "south-side-turnverein-hall", //41
    "the-athenaeum", //42
    "the-canals", //43
    "the-childrens-museum", //44
    "union-station", //45
    "veterans-mall", //46
    "walker-theatre", //47
    "henry-f-campbell-mansion", //48
    "charles-kuhn-house", //49
    "shortridge-high-school", //50
    "st-john-the-evangelist-catholic-church", //51
    "allison-mansion", //52
    "byram-middleton-house", //53
    "riverside-park", //54
    "garfield-park", //55
    "golden-hill-historic-district", //56
    "big-run-baptist-church-and-cemetery", //57
    "balmoral-court", //58
    "august-sommer-house", //59
    "herron-morton-place-historic-district", //60
    "old-southport-high-school", //61
    "crows-nest", //62
    "indiana-womens-club", //63
    "indianapolis-athletic-club", //64
    "roberts-park-church" //65
]

function loadImages(name) {
    let folder = "images/" + name;
    // let imageTemplate = "";
    // let thumbnailTemplate = "";

    let count = 0;

    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) {
                     let imageTemplate = `<div class="mySlides"><div class="numbertext">${count}</div><img src="${val}" style="width:100%"></div>`;

                    //  $("#gallery-area").html(imageTemplate);
                     document.getElementById("gallery-area").insertAdjacentHTML("afterbegin", imageTemplate);
                     
                     let thumbnailTemplate = `<div class="column"><img class="demo cursor" src="${val}" style="width:100%" onclick="currentSlide(${count})" alt="${factstitle}"></div>`;
                    //  $("#gallery-row-area").insert(thumbnailTemplate);
                     document.getElementById("gallery-row-area").insertAdjacentHTML("beforeend", thumbnailTemplate);

                     count += 1;

                     //console.log(count, val);

                     //console.log(imageTemplate);
                     //console.log(thumbnailTemplate);
                }
            });
        }
    });

    // console.log(imageTemplate);
    // console.log(thumbnailTemplate);

}

if (imagesIndex > -1) {
    let name = foldername[imagesIndex];
    loadImages(name);
    let slideIndex = 0;
    showSlides(slideIndex);
}

//GALLERY JS

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //console.log(slides);
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}