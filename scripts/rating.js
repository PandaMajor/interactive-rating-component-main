// Globals 
const ratings = document.getElementsByClassName("rating");  // Array of rating buttons
var selection = 0;                                          // Selected rating

// Initial function called on page load, adds listeners to buttons
function init(){
    // Add the callback function submission to the submit button
    const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", function() {
        submission();
    });

    // Add the callback function selectRating to the individual ratings
    for(let i = 0; i < ratings.length; i++){
        ratings[i].addEventListener("click", function() {
            selectRating(ratings[i]);
        });
    }
}

/*  Changes the user-select display text based on the selected rating.
    Hides the prompt card and replaces it with the thank you card. */
function submission() {
    document.getElementById("user-select").innerText = 'You selected ' + selection + ' out of 5';
    document.getElementById("prompt").style.display = "none";
    document.getElementById("thank-you").style.display = "flex";
}

/*  Changes the background color of the selected rating, ensures only one
    can be orange at a time */
function selectRating(rating) {
    for(let i = 0; i < ratings.length; i++){
        if(ratings[i].innerHTML != rating.innerHTML){
            ratings[i].style.background = "hsl(210, 19%, 24%)";
            ratings[i].style.color = "hsl(216, 8%, 52%)";
        }
        else{
            rating.style.background = "hsl(25, 97%, 53%)";
            rating.style.color = "hsl(0, 0%, 100%)";
            selection = rating.innerHTML;
        }
    }
}