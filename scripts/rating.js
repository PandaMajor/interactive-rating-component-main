ratings = document.getElementsByClassName("rating");

function selectRating(selection){
    console.log("click detected!");
    console.log(selection);
}

for (rating in ratings) {
    console.log(rating);
    rating.onclick = function(){selectRating(this);};
}
console.log(ratings);