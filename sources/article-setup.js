// Here you can easily set up different thumbnails for news articles.

//!\\ generally you're expected that the images will be in the media/ directory...

let img1a = /* Put first photo of main page articles underneath */`

`;
let img2a = /* Put second photo of main page articles underneath */`

;`
let atext = /* Put article text of the main page underneath*/`

`;
let adat = /* Put date of article of the main page underneath*/`

`;



//!\\ dont touch anything under this comment
let genimg1 = document.getElementById('latimg1');
let genimg2 = document.getElementById('latimg2');
let gentex = document.getElementById('latest-op');
let gendat = document.getElementById('latest-date');
genimg1.style.backgroundImage = "url('media/" + img1a + "');";
genimg2.style.backgroundImage = "url('media/" + img2a + "');";
gentex.value = atext;
gentex.value = adat;